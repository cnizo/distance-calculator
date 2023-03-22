import { Injectable, Logger } from '@nestjs/common';
import { GeoreferenceGatewayService } from '../georeference-gateway/georeference-gateway.service';
import { getDistance } from 'geolib';

@Injectable()
export class DistanceCalculatorService {
  constructor(private georeferenceGatewayService: GeoreferenceGatewayService) {}

  async calculateDistance(
    source: string,
    destination: string,
  ): Promise<number | undefined> {
    Logger.log('Starting distance calculation');

    const sourceGeoPoint =
      await this.georeferenceGatewayService.getGeoReferencing(source);
    const destinationGeoPoint =
      await this.georeferenceGatewayService.getGeoReferencing(destination);

    let distanceInKm;
    try {
      if (sourceGeoPoint && destinationGeoPoint) {
        distanceInKm = (getDistance(sourceGeoPoint, destinationGeoPoint) / 1000).toFixed(2);
        Logger.log(`Distance in km is ${distanceInKm}`);
      }
    } catch (e) {
      Logger.error(`Error to calculate distance ${e}`);
    }
    return distanceInKm;
  }
}
