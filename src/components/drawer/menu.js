import Actions from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import NavBarItem from '../common/NavBarItem';

class DrawerMenu extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <NavBarItem
        iconName="bars"
        onPress={() => {
          if (navigation.state.index === 0) {
            // check if drawer is not open, then only open it
            navigation.navigate('DrawerOpen');
            this.props.fetchDrawerItems(); 
          } else {
            // else close the drawer
            navigation.navigate('DrawerClose');
          }
        }}
      />
    );
  }
}

const mapDispatchToProps = {
  fetchDrawerItems: Actions.fetchDrawerItems,
};

export default connect(null, mapDispatchToProps)(DrawerMenu);
