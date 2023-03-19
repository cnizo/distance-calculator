import { BadRequestException, Controller, Get, Post } from '@nestjs/common';
import { CreateSearchDto, SearchDto } from './search.dto';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  async createSearch(): Promise<CreateSearchDto> {
    const distance = await this.searchService.calculateDistance('', '');

    if (distance) {
      return { distance };
    }
    throw new BadRequestException('Error on calculating distance');
  }

  @Get()
  async getSearchHistory(): Promise<SearchDto[]> {
    return this.searchService.findAllSearches();
  }
}
