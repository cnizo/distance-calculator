import { Injectable, Logger } from '@nestjs/common';

import { DistanceCalculatorService } from './distance-calcualator.service';

@Injectable()
export class SearchDomainService {
  constructor(private readonly distanceCalculatorService: DistanceCalculatorService) {}

  async createSearch(sourceAddress: string, destinationAddress: string): Promise<number | undefined> {
    const distance = await this.distanceCalculatorService.calculateDistance(
      sourceAddress,
      destinationAddress
    );
    return distance;
  }
}