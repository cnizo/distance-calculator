import { Test } from '@nestjs/testing';
import { GeoreferenceGatewayModule } from '../../../src/georeference-gateway/georeference-gateway.module';
import { GeoreferenceGatewayService } from '../../../src/georeference-gateway/georeference-gateway.service';
import { SearchService } from '../../../src/search/search.service';

describe('SearchService', () => {
  let searchService: SearchService;
  let georeferenceGatewayService: GeoreferenceGatewayService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
        imports: [GeoreferenceGatewayModule],
        providers: [SearchService],
      }).compile();

    
    searchService = moduleRef.get<SearchService>(SearchService);
    georeferenceGatewayService = moduleRef.get<GeoreferenceGatewayService>(GeoreferenceGatewayService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result = ['test'];
      jest.spyOn(georeferenceGatewayService, 'getGeoReferencing')
        .mockReturnValueOnce(Promise.resolve({ latitude: 51.5103, longitude: 7.49347 }))
        .mockReturnValueOnce(Promise.resolve({ latitude: 51.515, longitude: 7.453619 }));

      expect(await searchService.calculateDistance('source', 'destination')).not.toBeUndefined();
    });
  });
});