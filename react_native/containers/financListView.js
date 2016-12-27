/**
 * Created by liuwenxiang on 16/12/23.
 */

'use strict';

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    ListView,
    TouchableOpacity
} from 'react-native';

import  FetchData from '../utils/FetchData';
import ListViewItem from  '../componets/ListViewItem';
export default class App extends Component {
    constructor(props) {
        super(props);
        // alert(new FetchData().get().list[0].yield)
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(new FetchData().get().list),
        };
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSeparator={this._renderSeparator}
                contentContainerStyle={styles.listViewStyle}
            />
        );
    }

    renderRow(rowData) {
        return (
            <ListViewItem rowData={rowData}/>
        );
    }

    _renderSeparator(sectionID,rowID){
        return(
            <View style={styles.separator} key={sectionID+rowID}></View>
        );
    }
}

const styles = StyleSheet.create({
    listViewStyle: {
        flexDirection: 'column',
        flexWrap: 'wrap', //多行显示
    },
    separator:{
        height:20,
        backgroundColor: '#999999'
    }
});
// module.exports = App;
