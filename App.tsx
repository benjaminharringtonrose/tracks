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
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { Provider as LocationProvider } from "./src/context/LocationContext";
import { setNavigator } from "./src/navigationRef";

/*
-- Running the App --
- Open terminal inside track-server and npm run dev
- Open terminal inside tracks, and npm run ios
- Open another terminal inside tracks and npx ngrok http 3000
-- Then use that http address and paste it into the src/api/tracker.tsx baseURL
*/

export enum Routes {
  ResolveAuth = "ResolveAuth",
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

const switchNavigator = createSwitchNavigator(
  {
    [Routes.ResolveAuth]: ResolveAuthScreen,
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
  },
  {
    initialRouteName: Routes.ResolveAuth,
  }
);

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <LocationProvider>
        <AuthProvider>
          <App
            ref={(navigator) => {
              setNavigator(navigator);
            }}
          />
        </AuthProvider>
      </LocationProvider>
    </>
  );
};
