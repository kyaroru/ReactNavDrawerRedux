import { DrawerNavigator } from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions } from '../../utils/navigation';
import HomeScreen from '../home';
import UserScreen from '../user';
import DashboardScreen from '../dashboard';
import AboutScreen from '../about';
import * as Colors from '../../themes/colors';
import DrawerContent from './content';
import DrawerMenu from './menu';

const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const userDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor);
const dashboardDrawerIcon = ({ tintColor }) => getDrawerIcon('bar-chart', tintColor);
const aboutDrawerIcon = ({ tintColor }) => getDrawerIcon('info-circle', tintColor);

const homeNavOptions = getDrawerNavigationOptions('Home', Colors.primary, 'white', homeDrawerIcon);
const userNavOptions = getDrawerNavigationOptions('Users', Colors.primary, 'white', userDrawerIcon);
const dashboardNavOptions = getDrawerNavigationOptions('Dashboard', Colors.primary, 'white', dashboardDrawerIcon);
const aboutNavOptions = getDrawerNavigationOptions('About', Colors.primary, 'white', aboutDrawerIcon);

const Drawer = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: homeNavOptions },
  UserScreen: { screen: UserScreen, navigationOptions: userNavOptions },
  DashboardScreen: { screen: DashboardScreen, navigationOptions: dashboardNavOptions },
  AboutScreen: { screen: AboutScreen, navigationOptions: aboutNavOptions },
}, {
  drawerWidth: 300,
  drawerPosition: 'left',
  initialRouteName: 'HomeScreen',
  contentComponent: props => <DrawerContent {...props} />,
});

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('ReactNavDrawer', Colors.primary, 'white', <DrawerMenu navigation={navigation} />);

export default Drawer;
