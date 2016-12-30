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
    Image,
    TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
import {Font, Grid} from '../theme/dimens';
const {A, a} = Grid;

import  FetchData from '../utils/FetchData';
import ListViewItem from  '../componets/ListViewItem';

var width = Dimensions.get('window').width;
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
                contentContainerStyle={styles.listViewStyle}
                renderSectionHeader={this.renderSectionHeader}
                renderHeader={this.renderHeader}
            />
        );
    }

    /**
     * listview添加头部
     * @returns {XML}
     */
    renderHeader() {
        return (
            <View style={[{marginBottom: 10,}]}>
                <Image style={styles.image}
                       source={require('../image/image_header.png')}></Image>
            </View>
        );
    }

    /**
     * 每一行中的数据
     * @param rowData
     * @returns {XML}
     */
    renderRow(rowData) {
        return (
            <ListViewItem rowData={rowData}/>
        );
    }

    /**
     * listview分割线的样式
     * @param sectionID
     * @param rowID
     * @returns {XML}
     */
    renderSeparator(sectionID, rowID) {
        return (
            <View style={styles.separator} key={sectionID + rowID}></View>
        );
    }

    /**
     * 每一组对应的数据
     * @param sectionData
     * @returns {XML}
     */
    renderSectionHeader(sectionData) {
        if (sectionData == '定期') {
            return (
                <View style={styles.sectionView}>
                    <View style={styles.lineView_1}/>
                    <Text style={styles.sectionTitle_1}>{sectionData}</Text>
                    <Text style={styles.sectionTitle_2}>定期理财,稳健收益</Text>
                </View>
            );
        } else if (sectionData == '活期') {
            return (
                <View style={styles.sectionView}>
                    <View style={styles.lineView_2}/>
                    <Text style={styles.sectionTitle_1}>{sectionData}</Text>
                    <Text style={styles.sectionTitle_2}>活期理财,灵活存取</Text>
                </View>
            );
        } else if (sectionData == '存款') {
            return (
                <View style={styles.sectionView}>
                    <View style={styles.lineView_3}/>
                    <Text style={styles.sectionTitle_1}>{sectionData}</Text>
                    <Text style={styles.sectionTitle_2}>智能存款,固定收益</Text>
                </View>
            );
        }
        else {
            return (
                <View style={styles.sectionView}>
                    <Text style={styles.sectionTitle}>{"dd"}</Text>
                </View>
            );
        }
    }

    /**
     * 数据的分组
     * @constructor
     */
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
    image: {
        width: width,
        height: 180,
    },
    listViewStyle: {
        flexDirection: 'column',
        flexWrap: 'wrap', //多行显示
    },
    separator: {
        height: 15,
        backgroundColor: '#c3c3c3'
    },
    sectionView: {
        height: 5 * a,
        backgroundColor: "#c3c3c3",
        flexDirection: 'row',
        alignItems: 'center',
    },
    sectionTitle_1: {
        marginLeft: 16,
        color: "#333333",
        fontSize: Font.T1,
    },
    sectionTitle_2: {
        marginLeft: 16,
        color: "#999999",
        fontSize: Font.T2,
    },
    lineView_1: {
        width: 5,
        height: 5 * a,
        backgroundColor: "#60b0ff",
    },
    lineView_2: {
        width: 5,
        height: 5 * a,
        backgroundColor: "#f13a28",
    },
    lineView_3: {
        width: 5,
        height: 5 * a,
        backgroundColor: "#ff8f44",
    }
});
// module.exports = App;
