const NAVIGATION = 'NAVIGATION';

export const getNavigation = store => store[NAVIGATION];

export const getCurrentScreenName = (store) => {
  const drawerRoute = store[NAVIGATION].routes[0];
  const drawerInnerRoutes = drawerRoute.routes[0];
  const currentRouteIndex = drawerInnerRoutes.index;
  const currentRoute = drawerInnerRoutes.routes[currentRouteIndex];
  const currentRouteName = currentRoute.key;
  return currentRouteName;
};

export const GO_BACK = 'Navigation/BACK';
export const GO_TO = 'Navigation/NAVIGATE';
