import drawerItems from '../json/drawerItems';
import homeData from '../json/homeData';

export const fetchDrawerItems = () => new Promise((resolve, reject) => {
  resolve(drawerItems);
});

export const fetchHomeData = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(homeData);
  }, 2000);
});
