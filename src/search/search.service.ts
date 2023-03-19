import { Injectable } from '@nestjs/common';
import { GeoreferenceGatewayService } from '../georeference-gateway/georeference-gateway.service';
import { SearchDto } from './search.dto';
import { getDistance } from 'geolib';

@Injectable()
export class SearchService {
  constructor(private georeferenceGatewayService: GeoreferenceGatewayService) {}

  async calculateDistance(source: string, destination: string): Promise<number | undefined> {
    const sourceGeoPoint = await this.georeferenceGatewayService.getGeoReferencing(source);
    const destinationGeoPoint = await this.georeferenceGatewayService.getGeoReferencing(destination);
    let distanceInKm;
    try {
      if (sourceGeoPoint && destinationGeoPoint) {
        distanceInKm = getDistance(sourceGeoPoint, destinationGeoPoint) / 1000;
      }
    } catch (e) {
      console.log('Error to calculate distance');
    }
    return distanceInKm;
  }

  async saveSearch(): Promise<void> {

  }

  async findAllSearches(): Promise<SearchDto[]> {
    return [];
  }
}