import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
  Platform,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Actions from 'actions';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import * as Colors from '../../themes/colors';

class HomeScreen extends Component {
  constructor() {
    super();
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    const { fetchHomeData } = this.props;
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('backPress', this.handleBackButton);
    }
    fetchHomeData('video-11');
  }

  handleBackButton() {
    const { homeDataLength, isFetching } = this.props;
    if (homeDataLength > 1 || (homeDataLength === 1 && isFetching)) {
      this.props.attemptPopHomeData();
      return true;
    }
    return false;
  }

  openTarget(item) {
    const { drawerLink } = this.props;
    if (item.target === 'drawer') {
      this.props.setDrawerLink(item.link);
      this.props.fetchDrawerItems();
      this.props.navigation.navigate('DrawerOpen');
    } else {
      if (item.title === 'Back') {
        this.props.attemptPopHomeData();
      } else {
        this.props.fetchHomeData(item.link);
      }
    }
  }

  render() {
    const { homeData, isFetching } = this.props;
    return (
      <View style={styles.container}>
        {!isEmpty(homeData) && !isEmpty(homeData.title) &&
          <View style={styles.title}>
            <Text style={styles.titleText}>{homeData.title}</Text>
          </View>
        }
        {!isEmpty(homeData) && homeData.body.map(item => (
          <View style={styles.section} key={item.title}>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btnSubmit} onPress={() => this.openTarget(item)}>
                <Text style={{ textAlign: 'center', color: Colors.primary }}>{item.title} (Type: {item.target})</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
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
  homeData: Actions.getCurrentHomeData(store),
  homeDataLength: Actions.getHomeDataLength(store),
  isFetching: Actions.isFetchingHomeData(store),
  drawerLink: Actions.getDrawerLink(store),
});

const mapDispatchToProps = {
  updateCurrentUser: Actions.updateCurrentUser,
  updateDrawerItems: Actions.updateDrawerItems,
  fetchHomeData: Actions.fetchHomeData,
  attemptPopHomeData: Actions.attemptPopHomeData,
  clearHomeData: Actions.clearHomeData,
  fetchDrawerItems: Actions.fetchDrawerItems,
  setDrawerLink: Actions.setDrawerLink,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
