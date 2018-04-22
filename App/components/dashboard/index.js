import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import { StackNavigator } from "react-navigation";

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>Dashboard here saying hi</Text>;
        <Button
          title="About"
          onPress={() => this.props.navigation.navigate("About")}
        />
      </View>
    );
  }
}

export default Dashboard;
