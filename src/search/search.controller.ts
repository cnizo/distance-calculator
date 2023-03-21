import { BadRequestException, Body, Controller, Get, Logger, Post } from '@nestjs/common';
import { CreateSearchRequestDto, CreateSearchResponseDto, SearchDto } from './search.dto';
import { SearchDomainService } from './search.domain.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchDomainService: SearchDomainService) {}

  @Post()
  async createSearch(@Body() createSearchDto: CreateSearchRequestDto): Promise<CreateSearchResponseDto> {
    Logger.log('Received data: ', createSearchDto)
    if (!createSearchDto.source || !createSearchDto.destination) {
      throw new BadRequestException('Both source and destination data should be provided');
    }

    const distance = await this.searchDomainService.createSearch(
      createSearchDto.source,
      createSearchDto.destination
    );

    if (distance) {
      return { distance };
    }
    throw new BadRequestException('Error on calculating distance');
  }

  @Get()
  async getSearchHistory(): Promise<SearchDto[]> {
    return this.searchDomainService.findAllSearches();
  }
}
