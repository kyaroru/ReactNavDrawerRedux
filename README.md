# ReactNavDrawerRedux

A simple example of using DrawerNavigator in React Navigation (With REDUX integration)

It consists only 1 screen in drawer navigatior which is HomeScreen that will render everything including Drawer items based on server response :p

**Display different drawer items for different screen after fetch from server**

![Demo](http://g.recordit.co/rRfkYiCU7Q.gif)

**Android Back Button Demo**

![Demo](http://g.recordit.co/e1Oat1wFLk.gif)

**Navigation Structure**
```
-StackNavigator
   -DrawerNavigator
      -HomeScreen
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