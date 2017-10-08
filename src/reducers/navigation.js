import AppNavigator from '../navigation';

const initialState = {
  index: 0,
  routes: [
    {
      index: 0,
      key: 'Drawer',
      routeName: 'Drawer',
      routes: [
        {
          index: 0,
          key: 'DrawerClose',
          routeName: 'DrawerClose',
          routes: [
            { key: 'HomeScreen', routeName: 'HomeScreen' },
          ],
        },
        { key: 'DrawerOpen', routeName: 'DrawerOpen' },
        { key: 'DrawerToggle', routeName: 'DrawerToggle' },
      ],
    },
  ],
};

export default function navReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  return nextState || state;
}
