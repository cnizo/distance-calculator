import { Model } from 'mongoose';
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SearchDto } from '../search.dto';
import { Search, SearchDocument } from './search.schema';

@Injectable()
export class SearchService {
  constructor(
    @InjectModel(Search.name) private searchModel: Model<SearchDocument>,
  ) {}

  async create(search: SearchDto): Promise<void> {
    const searchDomainToSearch = { ...search, createdAt: Date.now() };
    try {
      const createdSearch = new this.searchModel(searchDomainToSearch);
      createdSearch.save();
    } catch (e) {
      Logger.error('Error on saving new search to db', e);
    }
  }

  async findAll(): Promise<SearchDto[]> {
    return this.searchModel.find().select('-_id -__v').exec();
  }
}
