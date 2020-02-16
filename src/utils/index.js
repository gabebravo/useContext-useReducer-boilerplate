import { HomeContext } from '../views/home/HomeProvider';
import { Page1Context } from '../views/page1/Page1Provider';

export const transformPathName = pn => {
  const pathArr = pn.split('/');
  return pathArr[1] ? pathArr[1] : 'home';
};

export const getContext = pn => {
  const pathArr = pn.split('/');
  switch (pathArr[1]) {
    case 'page1':
      return Page1Context;
    default:
      return HomeContext;
  }
};
