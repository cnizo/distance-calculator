import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Search, SearchDocument } from './schemas/search.schema';
import { SearchDto } from './search.dto';

@Injectable()
export class SearchService {
  constructor(@InjectModel(Search.name) private searchModel: Model<SearchDocument>) {}

  async createSearch(search: SearchDto): Promise<Search | undefined> {
    const searchDomainToSearch = {...search};
    const createOperation = new this.searchModel(searchDomainToSearch);
    try {
      return await createOperation.save();
    } catch (e) {
      Logger.error('Error on saving new search to db', e)
      return;
    }
  }

  async findAll(): Promise<SearchDto[]> {

    return [];
  }
}