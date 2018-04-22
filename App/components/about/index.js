import React, { Component } from "react";
import { Text, View } from "react-native";

class About extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>About Screen here</Text>;
        <Text>
          I'm not quite sure what to put here yet. But, I am pretty excited!
        </Text>
      </View>
    );
  }
}

export default About;
