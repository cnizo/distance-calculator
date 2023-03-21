import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchDto } from '../search.dto';

@Injectable()
export class SearchService {
  _SEARCH_HISTORY: SearchDto[];

  constructor(
    // @InjectRepository(Search)
    // private searchRepository: Repository<Search>,
  ) {
    this._SEARCH_HISTORY = [];
  }

  async create(search: SearchDto): Promise<void> {
    const searchDomainToSearch = {...search};
    try {
      this._SEARCH_HISTORY.push(searchDomainToSearch)
      // return this.searchRepository.create(searchDomainToSearch);
    } catch (e) {
      Logger.error('Error on saving new search to db', e)
    }
  }

  findAll(): SearchDto[] {
    return this._SEARCH_HISTORY;
  }
}