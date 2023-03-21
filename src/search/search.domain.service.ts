import { Injectable, Logger } from '@nestjs/common';

import { DistanceCalculatorService } from './distance-calculator.service';
import { SearchDto } from './search.dto';
import { SearchService } from './entity/search.service';

@Injectable()
export class SearchDomainService {
  constructor(
    private readonly distanceCalculatorService: DistanceCalculatorService,
    private readonly searchService: SearchService,
  ) {}

  async createSearch(source: string, destination: string): Promise<number | undefined> {
    const distance = await this.distanceCalculatorService.calculateDistance(
      source,
      destination
    );
    this.searchService.create({source, destination, distance});
    return distance;
  }

  async findAllSearches(): Promise<SearchDto[]> {
    return await this.searchService.findAll();
  }
}