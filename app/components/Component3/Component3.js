import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Switch
} from 'react-native';



export default class Component3 extends Component {
    constructor(){
        super();
        this.state = {
            textValue: 'Hello',
            switchValue: false
        }
    }

    onChangeText(value){
        this.setState({
            textValue: value
        });
    }

    onSwitchChange(value){
        this.setState({
            switchValue: value 
        });
    }

  render() {
    return (
        <View>
            <Text>Component 3</Text>
            <TextInput 
                placeholder='Enter Text'
                value={this.state.textValue}
                onChangeText={(value)=> this.onChangeText(value)}
            />
            <Text>{this.state.textValue}</Text>
            <Switch 
                value={this.state.switchValue}
                onValueChange={(value)=> this.onSwitchChange(value)}
            />
        </View>
    );
  }
}

