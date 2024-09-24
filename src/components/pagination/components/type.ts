import { TPagination } from '../type';

export type TPaginationComponents = Pick<TPagination, 'page' | 'pages'> & {
  changeMode: () => void;
};
