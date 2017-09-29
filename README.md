# ReactNavDrawerRedux

A simple example of using DrawerNavigator in React Navigation (With REDUX integration)

It consists of a fake login page (without drawer) and also other pages that can be seen only after login (with drawer)

**Demo 1**

![Demo](http://g.recordit.co/GR6zYZAV9O.gif)

**Demo 2**

![Demo2](http://g.recordit.co/XZCoVGHup4.gif)

**Display different drawer items based on redux store**

![Demo3](http://g.recordit.co/TZbxjkvRA0.gif)

**Navigation Structure**
```
-StackNavigator
   -LoginScreen
   -DrawerNavigator
      -HomeScreen
      -UserScreen
      -DashboardScreen
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