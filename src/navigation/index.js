import { StackNavigator } from 'react-navigation';
import LoginScreen from '../components/login';
import Drawer from '../components/drawer';

export default StackNavigator({
  LoginScreen: { screen: LoginScreen },
  Drawer: { screen: Drawer },
});
