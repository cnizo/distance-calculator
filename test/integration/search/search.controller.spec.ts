import { SearchDomainService } from '../../../src/search/search.domain.service';
import { DistanceCalculatorService } from '../../../src/search/distance-calculator.service';
import { GeoreferenceGatewayService } from '../../../src/georeference-gateway/georeference-gateway.service';
import { SearchController } from '../../../src/search/search.controller';
import { SearchService } from '../../../src/search/entity/search.service';

describe('SearchController', () => {
  let searchController: SearchController;
  let searchDomainService: SearchDomainService;
  let searchService: SearchService;

  beforeEach(() => {
    const distanceCalculatorService = new DistanceCalculatorService(new GeoreferenceGatewayService());
    searchService = new SearchService();
    searchDomainService = new SearchDomainService(distanceCalculatorService, searchService);
    searchController = new SearchController(searchDomainService);
  });

  describe('createSearch', () => {
    const createSearchRequest = {
      source: 'Avenida Paulista, 1000',
      destination: 'Avenida do Guacá, 63'
    };
    it('should return the calculated distance', async () => {
      const result = 12;
      jest.spyOn(searchDomainService, 'createSearch').mockImplementation(() => Promise.resolve(result));

      expect(await searchController.createSearch(createSearchRequest)).toEqual({
        distance: result
      });
    });

    it('should throw error', async () => {
      jest.spyOn(searchDomainService, 'createSearch').mockImplementation(() => Promise.resolve(undefined));
      await expect(searchController.createSearch(createSearchRequest)).rejects.toThrow();
    });
  });

  describe('getSearchHistory', () => {
    it('should return the search history', async () => {
      const result = [{
        source: 'source',
        destination: 'destination',
        distance: 12,
    }];
      jest.spyOn(searchService, 'findAll').mockImplementation(() => result);

      expect(await searchController.getSearchHistory()).toBe(result);
    });
  });
});
