import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppNavigator from './navigation';
import { addNavigationHelpers } from 'react-navigation';

class App extends Component {
  render() {
    const { dispatch, nav } = this.props;

    return (
      <AppNavigator
        navigation={addNavigationHelpers({
          dispatch,
          state: nav,
        })}
      />
    );
  }
}

const mapStateToProps = store => ({
  currentUser: store.USER,
  nav: store.NAVIGATION,
});

export default connect(mapStateToProps)(App);
