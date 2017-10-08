# ReactNavDrawerRedux

A simple example of using DrawerNavigator in React Navigation (With REDUX integration)

It consists of a fake login page (without drawer) and also other pages that can be seen only after login (with drawer)

**Display different drawer items for different screen after fetch from server**

![Demo](http://g.recordit.co/g5BI1pnyIl.gif)

**Navigation Structure**
```
-StackNavigator
   -LoginScreen
   -DrawerNavigator
      -HomeScreen
      -UserScreen
      -DashboardScreen
      -AboutScreen
```

**To run the app**
```
git clone https://github.com/kyaroru/ReactNavDrawerRedux
cd ReactNavDrawerRedux
npm i
react-native run-ios
react-native run-android
```

**For example without redux**

Refer to [ReactNavDrawer](https://github.com/kyaroru/ReactNavDrawer)