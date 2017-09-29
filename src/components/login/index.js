import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import Actions from 'actions';
import { connect } from 'react-redux';
import * as Colors from '../../themes/colors';
import { getNavigationOptions } from '../../utils/navigation';


class LoginScreen extends Component {

  login() {
    const { updateCurrentUser, navigation } = this.props;
    updateCurrentUser({ name: 'carol ' });
    const navigateAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Drawer' }),
      ],
    });
    navigation.dispatch(navigateAction);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.input, { borderColor: Colors.primary }]}>
          <TouchableOpacity style={styles.btnSubmit} onPress={() => this.login()}>
            <Text style={{ textAlign: 'center', color: Colors.primary }}>Login</Text>
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

LoginScreen.navigationOptions = ({ navigation }) => getNavigationOptions('Login', Colors.primary, 'white');

const mapStateToProps = store => ({
  currentUser: store.USER,
});

const mapDispatchToProps = {
  updateCurrentUser: Actions.updateCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
