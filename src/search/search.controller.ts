import { BadRequestException, Controller, Get, Post } from '@nestjs/common';
import { SearchDto } from './search.dto';
import { SearchService } from './search.service';

class CreateSearchDto {
    distance?: number;
}

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Post()
  async createSearch(): Promise<CreateSearchDto> {
    try {
        const distance = await this.searchService.calculateDistance('', '');
        return { distance };
    } catch(e) {
        console.log('olae')
        throw new BadRequestException('Something bad happened', { 
            cause: new Error(), description: 'Some error description' 
        });
    }
  }

  @Get()
  async getSearchHistory(): Promise<SearchDto[]> {
    return this.searchService.findAllSearches();
  }
}
