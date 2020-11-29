import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Routes } from "../../App";

function SigninScreen() {
  const { state, signin } = useContext<any>(AuthContext);

  return (
    <View style={styles.rootContainer}>
      <AuthForm
        headerText={"Sign In to Your Account"}
        errorMessage={state.errorSignin}
        submitButtonText={"Sign In"}
        onSubmit={signin}
      />
      <NavLink
        routeName={Routes.Signup}
        text={"Don't have an account? Sign up here!"}
      />
    </View>
  );
}

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
});

export default SigninScreen;
