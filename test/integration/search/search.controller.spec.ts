import { BadRequestException } from '@nestjs/common';
import { SearchController } from '../../../src/search/search.controller';
import { SearchService } from '../../../src/search/search.service';

describe('SearchController', () => {
  let searchController: SearchController;
  let searchService: SearchService;

  beforeEach(() => {
    searchService = new SearchService();
    searchController = new SearchController(searchService);
  });

  describe('createSearch', () => {
    it('should return the calculated distance', async () => {
      const result = 12;
      jest.spyOn(searchService, 'calculateDistance').mockImplementation(() => Promise.resolve(result));

      expect(await searchController.createSearch()).toEqual({
        distance: result
      });
    });

    it('should throw error', async () => {
      jest.spyOn(searchService, 'calculateDistance').mockImplementation(() => Promise.reject());
      await expect(searchController.createSearch()).rejects.toThrow();
    });
  });

  describe('getSearchHistory', () => {
    it('should return the search history', async () => {
      const result = [{
        sourceAddress: 'source',
        destinationAddress: 'destination',
        distance: 12,
    }];
      jest.spyOn(searchService, 'findAllSearches').mockImplementation(() => Promise.resolve(result));

      expect(await searchController.getSearchHistory()).toBe(result);
    });
  });
});
