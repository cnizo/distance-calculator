import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { DistanceCalculatorService } from '../../../src/search/distance-calculator.service';
import { SearchDomainService } from '../../../src/search/search.domain.service';
import { GeoreferenceGatewayService } from '../../../src/georeference-gateway/georeference-gateway.service';
import { SearchService } from '../../../src/search/entity/search.service';

describe('SearchDomainService', () => {
  let searchDomainService: SearchDomainService;
  let distanceCalculatorService: DistanceCalculatorService;
  let searchService: SearchService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        SearchDomainService,
        DistanceCalculatorService,
        GeoreferenceGatewayService,
        SearchService,
        {
          provide: getModelToken('Search'),
          useValue: {
            find: jest.fn(),
            create: jest.fn(),
            exec: jest.fn(),
          },
        },
      ],
    }).compile();

    searchDomainService =
      moduleRef.get<SearchDomainService>(SearchDomainService);
    distanceCalculatorService = moduleRef.get<DistanceCalculatorService>(
      DistanceCalculatorService,
    );
    searchService = moduleRef.get<SearchService>(SearchService);
  });

  describe('Create search', () => {
    it('should return an array of searches', async () => {
      const result = 12;
      jest
        .spyOn(distanceCalculatorService, 'calculateDistance')
        .mockImplementation(() => Promise.resolve(result));
      jest
        .spyOn(searchService, 'create')
        .mockImplementation(() => Promise.resolve());

      expect(
        await searchDomainService.createSearch('source', 'destination'),
      ).not.toBeUndefined();
    });
  });
});
