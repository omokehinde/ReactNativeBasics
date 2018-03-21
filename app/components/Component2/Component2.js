import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';



export default class Component2 extends Component {
    doThis(){
        console.log('View 1 pressed.');
    }

    doThat(){
        console.log('Area 2 pressed');
    }

  render() {
    return (
        <View>
            <View style={styles.myView}>
            <Text style={styles.myText}>Hello Idris</Text>
            </View>
            <View style={styles.container}>
                <TouchableHighlight 
                    style={styles.v1} 
                    onPress={this.doThis}
                    underlayColor='blue'>
                    <View>
                        <Text>Text 1</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity 
                    style={styles.v2}
                    onPress={this.doThat}>
                    <View>
                        <Text>Text 2</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.v3}>
                    <Text style={styles.vText}>Text 3</Text>
                </View>
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    myView:{
        backgroundColor:'blue'
    },
    myText: {
        color:'white'
    },
    container: {
        flexDirection:'row',
        height:100
    },
    v1: {
        flex:1,
        backgroundColor:'red',
        padding:10
    },
    v2: {
        flex:1,
        backgroundColor:'green',
        padding:10
    },
    v3: {
        flex:1,
        backgroundColor:'black',
        padding:10
    },
    vText: {
        color:'white'
    }
});