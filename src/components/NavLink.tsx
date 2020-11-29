import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "./Spacer";
import { withNavigation } from "react-navigation";

interface INavLinkProps {
  navigation: any;
  text: string;
  routeName: string;
}

function NavLink(props: INavLinkProps) {
  return (
    <Spacer>
      <TouchableOpacity
        onPress={() => props.navigation.navigate(props.routeName)}
      >
        <Text style={styles.link}>{props.text}</Text>
      </TouchableOpacity>
    </Spacer>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);
