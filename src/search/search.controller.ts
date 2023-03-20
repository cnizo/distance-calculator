import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { CreateSearchRequestDto, CreateSearchResponseDto, SearchDto } from './search.dto';
import { SearchDomainService } from './search.domain.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchDomainService: SearchDomainService) {}

  @Post()
  async createSearch(@Body() createSearchDto: CreateSearchRequestDto): Promise<CreateSearchResponseDto> {
    if (!createSearchDto.sourceAddress || !createSearchDto.destinationAddress) {
      throw new BadRequestException('Both source and destination data should be provided');
    }

    const distance = await this.searchDomainService.createSearch(
      createSearchDto.sourceAddress,
      createSearchDto.destinationAddress
    );

    if (distance) {
      return { distance };
    }
    throw new BadRequestException('Error on calculating distance');
  }

  @Get()
  async getSearchHistory(): Promise<SearchDto[]> {
    return;
  }
}
