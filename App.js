import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class BlueButton extends Component{
  render(){
    return(
      <Button color="blue" title="Sound 1"/>
    )
  }
}

class YellowButton extends Component{
  render(){
    return(
      <Button color="yellow" title="Sound 3"/>
    )
  }
}

class GreenButton extends Component{
  render(){
    return(
      <Button color="green" title="Sound 4"/>
    )
  }
}

class RedButton extends Component {
  render(){
    return(
      <Button color="red" title="Sound 2"/>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{marginTop: 100}}>
        <RedButton />
        <Text>My First React Component</Text>
      </View>
    );
  }
}