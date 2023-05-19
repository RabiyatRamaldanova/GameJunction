import axios from 'axios';
import rateLimit from 'axios-rate-limit';
import {CategoryStrings, PlatformStrings, SortByStrings} from '../types';

type GetGameListType = {
  platform?: PlatformStrings;
  category?: CategoryStrings | null;
  sortBy?: SortByStrings;
};

const https = rateLimit(axios.create(), {
  maxRequests: 4,
  perMilliseconds: 1000,
  maxRPS: 4,
});

export const getGamesAPI = async ({
  platform,
  category,
  sortBy,
}: GetGameListType) => {
  const result = await https
    .get('https://www.freetogame.com/api/games', {
      params: {
        platform,
        category,
        'sort-by': sortBy,
      },
    })
    .then(function (response) {
      console.log(response);
      return response.data;
    })
    .catch(function (error) {
      console.log('getGameList -->', error);
    });
  return result;
};
