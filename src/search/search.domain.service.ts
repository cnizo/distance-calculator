import { Injectable, Logger } from '@nestjs/common';

import { DistanceCalculatorService } from './distance-calcualator.service';
import { SearchDto } from './search.dto';
import { SearchService } from './entity/search.service';

@Injectable()
export class SearchDomainService {
  constructor(
    private readonly distanceCalculatorService: DistanceCalculatorService,
    private readonly searchService: SearchService,
  ) {}

  async createSearch(sourceAddress: string, destinationAddress: string): Promise<number | undefined> {
    const distance = await this.distanceCalculatorService.calculateDistance(
      sourceAddress,
      destinationAddress
    );
    this.searchService.create({sourceAddress, destinationAddress, distance});
    return distance;
  }

  async findAllSearches(): Promise<SearchDto[]> {
    return await this.searchService.findAll();
  }
}