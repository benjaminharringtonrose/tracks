import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

interface IAuthFormProps {
  headerText: string;
  errorMessage?: string;
  onSubmit: ({ email, password }: any) => void;
  submitButtonText: string;
}

function AuthForm(props: IAuthFormProps) {
  const { headerText, errorMessage, onSubmit, submitButtonText } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
        <Text h3>{headerText}</Text>
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
      {!!errorMessage && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
      <Spacer>
        <Button
          title={submitButtonText}
          onPress={() => onSubmit({ email, password })}
        />
      </Spacer>
    </>
  );
}

const styles = StyleSheet.create({
  errorMessage: {
    textAlign: "center",
    fontSize: 16,
    color: "red",
    marginBottom: 5,
  },
});

export default AuthForm;
