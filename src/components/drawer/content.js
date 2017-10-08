import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
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
  spinnerViewBg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
    opacity: 0.5,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 10,
  },
  drawerItemTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  drawerItemTitleText: {
    fontWeight: 'bold',
  },
});

class DrawerContent extends Component {
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
    const { navigation, isFetching, drawerItemsTitle } = this.props;
    return (
      <View style={styles.container}>
        {!isFetching && <View style={styles.drawerItemTitle}>
          <Text style={styles.drawerItemTitleText}>{drawerItemsTitle}</Text>
        </View>}
        {!isFetching && <View>
          {navigation.state.routes.map(route => this.renderDrawerItem(route))}
        </View>}
        {isFetching && <View style={styles.spinnerViewBg}>
          <View style={styles.spinner}>
            <ActivityIndicator
              size="small"
              animating
            />
          </View>
        </View>}
      </View>
    );
  }
}

const mapStateToProps = store => ({
  drawerItems: store.DRAWER.items,
  drawerItemsTitle: store.DRAWER.title,
  isFetching: store.DRAWER.isFetching,
});

const mapDispatchToProps = {
  updateDrawerItems: Actions.updateDrawerItems,
};

export default connect(mapStateToProps)(DrawerContent);
