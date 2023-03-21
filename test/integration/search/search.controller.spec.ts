import { Test } from '@nestjs/testing';
import { getModelToken } from '@nestjs/mongoose';
import { SearchDomainService } from '../../../src/search/search.domain.service';
import { SearchController } from '../../../src/search/search.controller';
import { SearchModule } from '../../../src/search/search.module';

describe('SearchController', () => {
  let searchController: SearchController;
  let searchDomainService: SearchDomainService;

  const mockRepository = {
    find() {
      return {};
    },
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [SearchModule],
    })
      .overrideProvider(getModelToken('Search'))
      .useValue(mockRepository)
      .compile();

    searchDomainService = module.get<SearchDomainService>(SearchDomainService);
    searchController = module.get<SearchController>(SearchController);
  });

  describe('createSearch', () => {
    const createSearchRequest = {
      source: 'Avenida Paulista, 1000',
      destination: 'Avenida do Guacá, 63',
    };
    it('should return the calculated distance', async () => {
      const result = 12;
      jest
        .spyOn(searchDomainService, 'createSearch')
        .mockImplementation(() => Promise.resolve(result));

      expect(await searchController.createSearch(createSearchRequest)).toEqual({
        distance: result,
      });
    });

    it('should throw error', async () => {
      jest
        .spyOn(searchDomainService, 'createSearch')
        .mockImplementation(() => Promise.resolve(undefined));
      await expect(
        searchController.createSearch(createSearchRequest),
      ).rejects.toThrow();
    });
  });

  describe('getSearchHistory', () => {
    it('should return the search history', async () => {
      const result = [
        {
          source: 'source',
          destination: 'destination',
          distance: 12,
        },
      ];
      jest
        .spyOn(searchDomainService, 'findAllSearches')
        .mockImplementation(() => Promise.resolve(result));

      expect(await searchController.getSearchHistory()).toBe(result);
    });
  });
});
