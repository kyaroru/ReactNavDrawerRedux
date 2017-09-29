import AppNavigator from '../navigation';

const initialState = AppNavigator.router.getStateForAction(
  AppNavigator.router.getActionForPathAndParams('LoginScreen'),
);

export default function navReducer(state = initialState, action) {
  const nextState = AppNavigator.router.getStateForAction(action, state);
  if (nextState) {
    const nextLastIndex = nextState.routes.length - 1;
    const lastIndex = state.routes.length - 1;

    const nextLastRoute = nextState.routes[nextLastIndex];
    const lastRoute = state.routes[lastIndex];

    if (nextLastIndex !== lastIndex && nextLastRoute.routeName === lastRoute.routeName) {
      // skip if same routeName, so won't push same view twice
      return state;
    }
    return nextState;
  }
  return state;
}
