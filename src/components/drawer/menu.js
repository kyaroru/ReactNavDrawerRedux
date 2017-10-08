import Actions from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import NavBarItem from '../common/NavBarItem';

class DrawerMenu extends Component {
  render() {
    const { navigation, currentScreenName } = this.props;
    return (
      <NavBarItem
        iconName="bars"
        onPress={() => {
          if (navigation.state.index === 0) {
            // check if drawer is not open, then only open it
            navigation.navigate('DrawerOpen');
            this.props.fetchDrawerItems(currentScreenName);
          } else {
            // else close the drawer
            navigation.navigate('DrawerClose');
          }
        }}
      />
    );
  }
}

const mapStateToProps = store => ({
  currentScreenName: Actions.getCurrentScreenName(store),
});

const mapDispatchToProps = {
  fetchDrawerItems: Actions.fetchDrawerItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
