import { DrawerNavigator } from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getNavigationOptionsWithAction, getDrawerNavigationOptions } from '../../utils/navigation';
import HomeScreen from '../home';
import * as Colors from '../../themes/colors';
import DrawerContent from './content';
import DrawerMenu from './menu';

const getDrawerIcon = (iconName, tintColor) => <Icon name={iconName} size={20} color={tintColor} />;

const homeDrawerIcon = ({ tintColor }) => getDrawerIcon('home', tintColor);

const homeNavOptions = getDrawerNavigationOptions('Home', Colors.primary, 'white', homeDrawerIcon);

const Drawer = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: homeNavOptions },
}, {
  drawerWidth: 300,
  drawerPosition: 'right',
  initialRouteName: 'HomeScreen',
  contentComponent: props => <DrawerContent {...props} />,
});

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('ReactNavDrawer', Colors.primary, 'white');

export default Drawer;
