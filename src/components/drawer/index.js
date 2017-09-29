import { DrawerNavigator } from 'react-navigation';
// import {
//   View,
// } from 'react-native';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getNavigationOptionsWithAction, getDrawerConfig, getDrawerNavigationOptions } from '../../utils/navigation';
import NavBarItem from '../common/NavBarItem';
// import * as ducks from '../../ducks';
import HomeScreen from '../home';
import UserScreen from '../user';
import * as Colors from '../../themes/colors';

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

const homeNavOptions = getDrawerNavigationOptions('Home', Colors.primary, 'white', homeDrawerIcon);
const userNavOptions = getDrawerNavigationOptions('Users', Colors.primary, 'white', userDrawerIcon);

const Drawer = DrawerNavigator({
  HomeScreen: { screen: HomeScreen, navigationOptions: homeNavOptions },
  UserScreen: { screen: UserScreen, navigationOptions: userNavOptions },
}, {
  drawerWidth: 300,
  drawerPosition: 'left',
  initialRouteName: 'HomeScreen',
});

// class Drawer extends Component {
//   render() {
//     const { nav, dispatch } = this.props;
//     const DrawerNavigator = drawerNavigator;
//     return (
//       <DrawerNavigator />
//     );
//   }
// }

// Drawer.propTypes = {
//   drawerItems: PropTypes.object,
// };

Drawer.navigationOptions = ({ navigation }) => getNavigationOptionsWithAction('ReactNavDrawer', Colors.primary, 'white', getDrawerItem(navigation));

// const mapStateToProps = store => ({
//   drawerItems: store.drawerItems,
//   nav: store.nav,
// });

// const mapDispatchToProps = {
//   updateDrawerItems: ducks.updateDrawerItems,
// };

export default Drawer;
