import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Actions from 'actions';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import * as Colors from '../../themes/colors';

class HomeScreen extends Component {
  componentDidMount() {
    const { fetchHomeData } = this.props;
    fetchHomeData();
  }

  logout() {
    const { updateCurrentUser, navigation, clearHomeData } = this.props;
    updateCurrentUser({});
    clearHomeData();
    const navigateAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'LoginScreen' }),
      ],
    });
    navigation.dispatch(navigateAction);
  }

  render() {
    const { homeData, isFetching } = this.props;
    return (
      <View style={styles.container}>
        {!isEmpty(homeData.title) &&
          <View style={styles.title}>
            <Text style={styles.titleText}>{homeData.title}</Text>
          </View>
        }
        {!isEmpty(homeData) && homeData.items.map(item => (
          <View style={styles.item} key={item}>
            <Text>{item}</Text>
          </View>
        ))}
        <View style={styles.section}>
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btnSubmit} onPress={() => this.logout()}>
              <Text style={{ textAlign: 'center', color: Colors.primary }}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  section: {
    alignItems: 'center',
  },
  btnSubmit: {
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  btnContainer: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    marginTop: 10,
    borderColor: Colors.primary,
  },
  item: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  spinnerViewBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#333',
    opacity: 0.5,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 10,
  },
  title: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  titleText: {
    fontWeight: 'bold',
  },
});

const mapStateToProps = store => ({
  currentUser: store.USER,
  drawerItems: store.DRAWER.items,
  homeData: store.HOME.data,
  isFetching: store.HOME.isFetching,
});

const mapDispatchToProps = {
  updateCurrentUser: Actions.updateCurrentUser,
  updateDrawerItems: Actions.updateDrawerItems,
  fetchHomeData: Actions.fetchHomeData,
  clearHomeData: Actions.clearHomeData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
