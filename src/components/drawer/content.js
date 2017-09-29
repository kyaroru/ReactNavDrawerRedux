import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import Actions from 'actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as Colors from '../../themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  btnSubmit: {
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  drawerItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
});

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  onItemPress(item) {
    const { navigation } = this.props;
    navigation.navigate(item.key);
  }
  renderDrawerItem(route) {
    const { drawerItems } = this.props;
    if (drawerItems.indexOf(route.key) > -1) {
      return (
        <TouchableOpacity style={styles.drawerItem} key={route.key} onPress={() => this.onItemPress(route)}>
          <Text>{route.routeName}</Text>
        </TouchableOpacity>
      );
    }
    return null;
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View>
          {navigation.state.routes.map(route => this.renderDrawerItem(route))}
        </View>
      </View>
    );
  }
}

const mapStateToProps = store => ({
  drawerItems: store.DRAWER,
});

const mapDispatchToProps = {
  updateDrawerItems: Actions.updateDrawerItems,
};

export default connect(mapStateToProps)(DrawerContent);
