# ReactNavDrawer

A simple example of using DrawerNavigator in React Navigation (With REDUX integration)

It consists of a fake login page (without drawer) and also other pages that can be seen only after login (with drawer)

Navigation Structure
```
-StackNavigator
   -LoginScreen
   -DrawerNavigator
      -HomeScreen
      -UserScreen
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