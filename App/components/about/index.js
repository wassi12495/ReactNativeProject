import React, { Component } from "react";
import {connect} from 'react-redux'
import * as actions from '../../actions'
import { Text, View, TextInput } from "react-native";

class About extends Component {
  constructor() {
    super();
    this.state={
      text: "hi"
    }
  }

  changeText = (text) =>{
    this.props.test(text)
    this.state({
      text
    })
  }

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Text>About Screen here</Text>;
        <Text>
          I'm not quite sure what to put here yet. But, I am pretty excited!
        </Text>
        <TextInput onChangeText= {(text) => this.props.test(text)} value={this.state.text}/>
        <Text>{this.props.auth.currentUser}</Text>
      </View>
    );
  }
}

const mapStateToProps= ({auth})=>({
  auth: auth
})
export default connect(mapStateToProps, actions)(About);
