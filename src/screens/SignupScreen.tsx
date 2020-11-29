import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Routes } from "../../App";

function SignupScreen() {
  const { state, signup } = useContext<any>(AuthContext);

  return (
    <View style={styles.rootContainer}>
      <AuthForm
        headerText={"Sign Up for Tracker"}
        errorMessage={state.errorSignup}
        submitButtonText={"Sign Up"}
        onSubmit={signup}
      />
      <NavLink
        routeName={Routes.Signin}
        text={"Already have an account? Sign in instead!"}
      />
    </View>
  );
}

SignupScreen.navigationOptions = () => {
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

export default SignupScreen;
