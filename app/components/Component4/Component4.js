import React, { Component } from 'react';
import {
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native';

const users = [
    {name: 'John Doe'},
    {name: 'Flex James'},
    {name: 'Susan Morgan'},
    {name: 'Moris Idris'}
]

export default class Component4 extends Component {
    constructor(){
        super();
        this.state = {dataSource:users};
    }

  render() {
    return (
        <View>
            <Text>Component 4</Text>
            <View style={styles.row}>
                <FlatList 
                    data={this.state.dataSource}
                    renderItem={({item}) => <Text style={styles.rowText}>{item.name}</Text> }
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