import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SearchDto } from '../search.dto';
import { Search } from './search.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Search)
    private searchRepository: Repository<Search>,
  ) {}

  async create(search: SearchDto): Promise<Search | undefined> {
    const searchDomainToSearch = {...search};
    try {
      return this.searchRepository.create(searchDomainToSearch);
    } catch (e) {
      Logger.error('Error on saving new search to db', e)
      return;
    }
  }

  findAll(): Promise<Search[]> {
    return this.searchRepository.find();
  }
}