import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet,
  ActivityIndicator
} from 'react-native';



export default class Component5 extends Component {
    constructor(props){
        super(props);
        this.state = {isLoading: true};
    }

    componentDidMount(){
        return  fetch('https://jsonplaceholder.typicode.com/users')
                    .then((response) => response.json())
                    .then((responseJson) => {
                    this.setState({
                        isLoading: false,
                        dataSource: responseJson
                }, function(){

                });
            });
    }


  render() {
      if(this.state.isLoading){
        return(
            <View style={{flex:1, padding:20}}>
                <ActivityIndicator />
            </View>
        );
      }
    return (
        <View>
            <Text>Component 5</Text>
            <View style={styles.row}>
                <FlatList
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text style={styles.rowText}>{item.name}: {item.email}</Text> }
                />
            </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#f4f4f4',
        marginBottom: 3
    },
    rowText: {
        flex: 1
    }
});