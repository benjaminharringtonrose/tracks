import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { StatusBar } from "react-native";
import AccountScreen from "./src/screens/AccountScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import TrackCreateScreen from "./src/screens/TrackCreateScreen";
import TrackDetailScreen from "./src/screens/TrackDetailScreen";
import TrackListScreen from "./src/screens/TrackListScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";

export enum Routes {
  authFlow = "authFlow",
  Signup = "Signup",
  Signin = "Signin",
  mainFlow = "mainFlow",
  trackListFlow = "trackListFlow",
  TrackList = "TrackList",
  TrackDetail = "TrackDetail",
  TrackCreate = "TrackCreate",
  Account = "Account",
}

const switchNavigator = createSwitchNavigator({
  [Routes.authFlow]: createStackNavigator({
    [Routes.Signup]: SignupScreen,
    [Routes.Signin]: SigninScreen,
  }),
  [Routes.mainFlow]: createBottomTabNavigator({
    [Routes.trackListFlow]: createStackNavigator({
      [Routes.TrackList]: TrackListScreen,
      [Routes.TrackDetail]: TrackDetailScreen,
    }),
    [Routes.TrackCreate]: TrackCreateScreen,
    [Routes.Account]: AccountScreen,
  }),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <AuthProvider>
        <App />
      </AuthProvider>
    </>
  );
};
