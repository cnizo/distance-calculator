import axios from 'axios';
import { Injectable, Logger } from '@nestjs/common';
import { CoordinatesDto } from './coordinates.dto';

@Injectable()
export class GeoreferenceGatewayService {
  nominatimUrl = 'https://nominatim.openstreetmap.org';

  async getGeoReferencing(address: string): Promise<CoordinatesDto | null> {
    Logger.log(`Getting coordinates for: ${address}`);

    const addressSearchApi = `${this.nominatimUrl}/search?q=${address}&format=json`;
    let coordinates = null;

    await axios
      .get(addressSearchApi)
      .then(function (response) {
        const addressData = response.data;
        Logger.log(`Got a result: ${addressData}`);
        if (addressData?.length > 0) {
          coordinates = {
            latitude: addressData[0].lat,
            longitude: addressData[0].lon,
          };
        }
      })
      .catch(function (e) {
        Logger.error(`Error to get coordinates ${e}`);
      });
    return coordinates;
  }
}
