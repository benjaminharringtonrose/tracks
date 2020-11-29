import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import { Routes } from "../../App";

interface IPassedProps {
  navigation: any;
}

interface IPropsFromState {}

type TrackListScreenProps = IPassedProps & IPropsFromState;

function TrackListScreen(props: TrackListScreenProps) {
  const { navigation } = props;

  return (
    <>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button
        title={"Go to Track Detail"}
        onPress={() => navigation.navigate(Routes.TrackDetail)}
      />
    </>
  );
}

const styles = StyleSheet.create({});

export default TrackListScreen;
