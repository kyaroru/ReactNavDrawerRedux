# ReactNavDrawerRedux

A simple example of using DrawerNavigator in React Navigation (With REDUX integration)

It consists of a fake login page (without drawer) and also other pages that can be seen only after login (with drawer)

**Display different drawer items on button click**

![Demo1](http://g.recordit.co/TZbxjkvRA0.gif)

**Display different drawer items after fetch from server**

![Demo2](http://g.recordit.co/VEOTYN9G7q.gif)

**Cancel request if drawer is closed**

![Demo3](http://g.recordit.co/azunGDuaON.gif)

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