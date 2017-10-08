import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import Actions from 'actions';
import { connect } from 'react-redux';
import isEmpty from 'lodash/isEmpty';
import * as Colors from '../../themes/colors';

class DashboardScreen extends Component {
  componentDidMount() {
    const { fetchDashboardData } = this.props;
    fetchDashboardData();
  }

  render() {
    const { dashboardData, isFetching } = this.props;
    return (
      <View style={styles.container}>
        {!isEmpty(dashboardData.title) &&
          <View style={styles.title}>
            <Text style={styles.titleText}>{dashboardData.title}</Text>
          </View>
        }
        {!isEmpty(dashboardData) && dashboardData.items.map(item => (
          <View style={styles.item} key={item}>
            <Text>{item}</Text>
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
  dashboardData: store.DASHBOARD.data,
  isFetching: store.DASHBOARD.isFetching,
});

const mapDispatchToProps = {
  fetchDashboardData: Actions.fetchDashboardData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
