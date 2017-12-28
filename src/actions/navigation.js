const NAVIGATION = 'NAVIGATION';

export const getNavigation = store => store[NAVIGATION];

export const getCurrentScreenName = (store) => {
  const innerRoutes = store[NAVIGATION].routes[0];
  if (innerRoutes && innerRoutes.routes) {
    const drawerInnerRoutes = innerRoutes.routes[0];
    const currentRouteIndex = drawerInnerRoutes.index;
    const currentRoute = drawerInnerRoutes.routes[currentRouteIndex];
    const currentRouteName = currentRoute.key;
    return currentRouteName;
  }
  return innerRoutes.routeName;
};

export const GO_BACK = 'Navigation/BACK';
export const GO_TO = 'Navigation/NAVIGATE';
