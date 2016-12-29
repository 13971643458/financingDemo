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
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        this.state = {
            loaded: false,
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData,
                getRowData: getRowData,
                rowHasChanged: (row1, row2)=> row1 !== row2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2

            }),
        };
    }

    componentDidMount() {
        this.RefactorData();
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSeparator={this.renderSeparator}
                contentContainerStyle={styles.listViewStyle}
                renderSectionHeader={this.renderSectionHeader}
            />
        );
    }

    // 每一行中的数据
    renderRow(rowData) {
        return (
            <ListViewItem rowData={rowData}/>
        );
    }

    //分割线的样式
    renderSeparator(sectionID, rowID) {
        return (
            <View style={styles.separator} key={sectionID + rowID}></View>
        );
    }

    // 每一组对应的数据
    renderSectionHeader(sectionData) {
        return (
            <View style={styles.sectionView}>
                <Text style={styles.sectionTitle}>{sectionData}</Text>
            </View>
        );
    }

    RefactorData() {
        var data = new FetchData().get().list;
        var dataBlob = {};
        var sectionIDs = [];
        //定义一个数组
        var rowIDs = [];

        for (let i = 0; i < 3; i++) {
            sectionIDs.push(i);
            //创建一个二维数组
            rowIDs[i] = [];
            if (i == 0) {
                dataBlob[i] = '活期';
            } else if (i == 1) {
                dataBlob[i] = '定期';
            } else if (i == 2) {
                dataBlob[i] = '存款';
            }
        }
        for (let j = 0; j < data.length; j++) {
            if (data[j].prdTypeExplain == '活期') {
                rowIDs[0].push(j);
                dataBlob[0 + ':' + j] = data[j];
            }
            else if (data[j].prdTypeExplain == '定期') {
                rowIDs[1].push(j);
                dataBlob[1 + ':' + j] = data[j];
            }
            else if (data[j].prdTypeExplain == '存款') {
                rowIDs[2].push(j);
                dataBlob[2 + ':' + j] = data[j];
            }
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs),
            loaded: true
        });
    }
}

const styles = StyleSheet.create({
    listViewStyle: {
        flexDirection: 'column',
        flexWrap: 'wrap', //多行显示
    },
    separator: {
        height: 20,
        backgroundColor: '#999999'
    },
    sectionView: {
        height: 22,
        backgroundColor: "#c3c3c3",
        justifyContent: "center"
    },

    sectionTitle: {
        marginLeft: 16,
    },
});
// module.exports = App;
