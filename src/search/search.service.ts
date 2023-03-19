import { Injectable } from '@nestjs/common';
import { SearchDto } from './search.dto';

@Injectable()
export class SearchService {
  async calculateDistance(source: string, destination: string): Promise<number> {
    return await 0
  }

  async saveSearch(): Promise<void> {

  }

  async findAllSearches(): Promise<SearchDto[]> {
    return [];
  }
}