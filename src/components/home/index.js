import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  AsyncStorage,
  TouchableOpacity,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Actions from 'actions';
import { connect } from 'react-redux';
import * as Colors from '../../themes/colors';

class HomeScreen extends Component {
  logout() {
    const { updateCurrentUser, navigation } = this.props;
    updateCurrentUser({});
    const navigateAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'LoginScreen' }),
      ],
    });
    navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.input, { borderColor: Colors.primary }]}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => this.logout()}>
            <Text style={{ textAlign: 'center', color: Colors.primary }}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  btnSubmit: {
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 5,
  },
});

const mapStateToProps = store => ({
  currentUser: store.USER,
});

const mapDispatchToProps = {
  updateCurrentUser: Actions.updateCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
