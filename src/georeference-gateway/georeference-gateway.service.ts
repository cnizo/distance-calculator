import axios from 'axios';
import { Injectable } from '@nestjs/common';
import { CoordinatesDto } from './coordinates.dto';

@Injectable()
export class GeoreferenceGatewayService {
  nominatimUrl = 'https://nominatim.openstreetmap.org'

  async getGeoReferencing(address: string): Promise<CoordinatesDto | null> {
    const addressSearchApi = `${this.nominatimUrl}/search?q=${address}&format=json`
    let coordinates = null;
  
    axios.get(addressSearchApi)
      .then(function (response) {
        const addressData = response.data;
        coordinates = addressData && {
          latitude: addressData?.lat,
          longitude: addressData?.lon,
        };
      })
      .catch(function (error) {
        console.log(error);
      });
    return coordinates;
  }
}