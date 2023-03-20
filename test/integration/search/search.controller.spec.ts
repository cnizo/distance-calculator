import { SearchDomainService } from '../../../src/search/search.domain.service';
import { DistanceCalculatorService } from '../../../src/search/distance-calcualator.service';
import { GeoreferenceGatewayService } from '../../../src/georeference-gateway/georeference-gateway.service';
import { SearchController } from '../../../src/search/search.controller';

describe('SearchController', () => {
  let searchController: SearchController;
  let searchDomainService: SearchDomainService;

  beforeEach(() => {
    const distanceCalculatorService = new DistanceCalculatorService(new GeoreferenceGatewayService());
    searchDomainService = new SearchDomainService(distanceCalculatorService);
    searchController = new SearchController(searchDomainService);
  });

  describe('createSearch', () => {
    const createSearchRequest = {
      sourceAddress: 'Avenida Paulista, 1000',
      destinationAddress: 'Avenida do Guacá, 63'
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

  // describe('getSearchHistory', () => {
  //   it('should return the search history', async () => {
  //     const result = [{
  //       sourceAddress: 'source',
  //       destinationAddress: 'destination',
  //       distance: 12,
  //   }];
  //     jest.spyOn(searchService, 'findAllSearches').mockImplementation(() => Promise.resolve(result));

  //     expect(await searchController.getSearchHistory()).toBe(result);
  //   });
  // });
});
