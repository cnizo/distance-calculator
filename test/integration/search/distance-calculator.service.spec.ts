import { DistanceCalculatorService } from '../../../src/search/distance-calcualator.service';
import { GeoreferenceGatewayService } from '../../../src/georeference-gateway/georeference-gateway.service';

describe('DistanceCalculatorService', () => {
  let distanceCalculatorService: DistanceCalculatorService;
  let georeferenceGatewayService: GeoreferenceGatewayService;

  beforeEach(() => {
    georeferenceGatewayService = new GeoreferenceGatewayService();
    distanceCalculatorService = new DistanceCalculatorService(georeferenceGatewayService);
  });

  describe('Calculatte distance', () => {
    it('should return distance', async () => {
      jest.spyOn(georeferenceGatewayService, 'getGeoReferencing')
        .mockReturnValueOnce(Promise.resolve({ latitude: 51.5103, longitude: 7.49347 }))
        .mockReturnValueOnce(Promise.resolve({ latitude: 51.515, longitude: 7.453619 }));

      expect(await distanceCalculatorService.calculateDistance('source', 'destination')).not.toBeUndefined();
    });
  });
});