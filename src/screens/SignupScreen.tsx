import React, { useState, useContext } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Routes } from "../../App";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

interface IPassedProps {
  navigation: any;
}

interface IPropsFromState {}

type SignupScreenProps = IPassedProps & IPropsFromState;

function SignupScreen(props: SignupScreenProps) {
  const { state, signup } = useContext<any>(AuthContext);
  const { navigation } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.rootContainer}>
      <Spacer>
        <Text h3>{"Sign Up for Tracker"}</Text>
      </Spacer>
      <Input
        label={"Email"}
        value={email}
        onChangeText={setEmail}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
      <Spacer />
      <Input
        label={"Password"}
        value={password}
        onChangeText={setPassword}
        autoCapitalize={"none"}
        autoCorrect={false}
        secureTextEntry
      />
      <Spacer>
        <TouchableOpacity onPress={() => signup({ email, password })}>
          <Button title={"Sign Up"} />
        </TouchableOpacity>
      </Spacer>
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
