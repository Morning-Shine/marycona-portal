import { PAGE_SIZES } from 'constants/enums';

export type TPageSizes = {
  mainPageSize: (typeof PAGE_SIZES)[number];
  favoritePageSize: (typeof PAGE_SIZES)[number];
};
