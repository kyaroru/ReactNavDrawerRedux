import homeDrawerItems from '../json/homeDrawerItems';
import homeData from '../json/homeData';
import dashboardDrawerItems from '../json/dashboardDrawerItems';
import dashboardData from '../json/dashboardData';

const defaultDrawerItems = homeDrawerItems;
const defaultData = homeData;

export const fetchDrawerItems = screenName => new Promise((resolve, reject) => {
  if (screenName === 'DashboardScreen') {
    resolve(dashboardDrawerItems);
  } else {
    // fall back to default drawer items (if no screenName matches)
    resolve(defaultDrawerItems);
  }
});

export const fetchScreenData = screenName => new Promise((resolve, reject) => {
  if (screenName === 'DashboardScreen') {
    resolve(dashboardData);
  } else {
    // fall back to default home data (if no screenName matches)
    resolve(defaultData);
  }
});
