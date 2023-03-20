import { Test } from '@nestjs/testing';
import { DistanceCalculatorService } from '../../../src/search/distance-calcualator.service';
import { SearchDomainService } from '../../../src/search/search.domain.service';
import { GeoreferenceGatewayService } from '../../../src/georeference-gateway/georeference-gateway.service';

describe('SearchDomainService', () => {
  let searchDomainService: SearchDomainService;
  let distanceCalculatorService: DistanceCalculatorService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [SearchDomainService, DistanceCalculatorService, GeoreferenceGatewayService],
    }).compile();

    searchDomainService = moduleRef.get<SearchDomainService>(SearchDomainService);
    distanceCalculatorService = moduleRef.get<DistanceCalculatorService>(DistanceCalculatorService);
  });

  describe('Create search', () => {
    it('should return an array of cats', async () => {
      const result = 12;
      jest.spyOn(distanceCalculatorService, 'calculateDistance').mockImplementation(() => Promise.resolve(result));

      expect(await searchDomainService.createSearch('source', 'destination')).not.toBeUndefined();
    });
  });
});