import isEmpty from 'lodash/isEmpty';

const NAVIGATION = 'NAVIGATION';

export const getNavigation = store => store[NAVIGATION];

export const getCurrentScreenName = (store) => {
  const navigation = store[NAVIGATION];
  if (!isEmpty(navigation.routes) && navigation.routes.length > 0) {
    const drawerRoute = navigation.routes[0];
    if (drawerRoute.routeName === 'Drawer') {
      const drawerInnerRoutes = drawerRoute.routes[0];
      const currentRouteIndex = drawerInnerRoutes.index;
      const currentRoute = drawerInnerRoutes.routes[currentRouteIndex];
      const currentRouteName = currentRoute.key;
      return currentRouteName;
    }
  }
  return '';
};

export const GO_BACK = 'Navigation/BACK';
export const GO_TO = 'Navigation/NAVIGATE';
