import { DrawerNavigator } from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions } from '../../utils/navigation';
import NavBarItem from '../common/NavBarItem';
import HomeScreen from '../home';
import UserScreen from '../user';
import DashboardScreen from '../dashboard';
import * as Colors from '../../themes/colors';
import DrawerContent from './content';

const getDrawerItem = navigation => (
  <NavBarItem
    iconName="bars"
    onPress={() => {
      if (navigation.state.index === 0) {
        // check if drawer is not open, then only open it
        navigation.navigate('DrawerOpen');
      } else {
        // else close the drawer
        navigation.navigate('DrawerClose');
      }
    }}
  />
);
const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);
const userDrawerIcon = ({ tintColor }) => getDrawerIcon('user', tintColor);
const dashboardDrawerIcon = ({ tintColor }) => getDrawerIcon('bar-chart', tintColor);

const homeNavOptions = getDrawerNavigationOptions('Home', Colors.primary, 'white', homeDrawerIcon);
const userNavOptions = getDrawerNavigationOptions('Users', Colors.primary, 'white', userDrawerIcon);
const dashboardNavOptions = getDrawerNavigationOptions('Dashboard', Colors.primary, 'white', dashboardDrawerIcon);

const Drawer = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: homeNavOptions },
  UserScreen: { screen: UserScreen, navigationOptions: userNavOptions },
  DashboardScreen: { screen: DashboardScreen, navigationOptions: dashboardNavOptions },
}, {
  drawerWidth: 300,
  drawerPosition: 'left',
  initialRouteName: 'HomeScreen',
  contentComponent: props => <DrawerContent {...props} />,
});

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('ReactNavDrawer', Colors.primary, 'white', getDrawerItem(navigation));

export default Drawer;
