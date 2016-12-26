/**
 * Created by liuwenxiang on 16/12/26.
 */

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
import {Font, Grid} from '../theme/dimens';
const {A, a} = Grid;
var strs = new Array();

export default class ListViewItem extends Component {

    constructor(props) {
        super(props)
        const str = this.props.rowData.prdTips;
        strs = str.split(",");
    }

    render() {
        return (
            <TouchableOpacity>
                <Text style={styles.finacnText}>
                    {this.props.rowData.prdTypeExplain + "理财"}
                </Text>
                <View style={styles.flex}>
                    <View style={styles.container}>
                        <View style={styles.item}>
                            <View style={styles.viewYield}>
                                <Text style={styles.textYield}>
                                    {this.props.rowData.yield}
                                </Text>
                                <Text style={styles.textYieldUnit}>
                                    {this.props.rowData.yieldUnit}
                                </Text>
                            </View>
                            <Text style={styles.textYieldName}>
                                {this.props.rowData.yieldName}
                            </Text>
                        </View>
                        <View style={styles.item}>
                            <Text style={styles.textItem}>
                                {this.props.rowData.prdName}
                            </Text>
                            <View style={styles.viewYield}>
                                <Text style={styles.textItem}>
                                    {this.props.rowData.timeLimit}
                                </Text>
                                <Text style={styles.textItem}>
                                    {this.props.rowData.timelimitUnit}
                                </Text>
                                <Text style={styles.textPfirstAmt}>
                                    |
                                </Text>
                                <Text style={styles.textPfirstAmt}>
                                    {this.props.rowData.pfirstAmt}
                                </Text>
                                <Text style={styles.textItem}>
                                    {this.props.rowData.pfirstAmtUnit}
                                </Text>
                            </View>

                            <View style={styles.viewYield}>

                                <View style={styles.viewPrdTips}>
                                    <Text style={styles.textPrdTips}>
                                        {strs[0]}
                                    </Text>
                                </View>

                                <View style={[styles.viewPrdTips,styles.viewPrdTipsLeft]}>
                                    <Text style={styles.textPrdTips}>
                                        {strs[1]}
                                    </Text>
                                </View>
                            </View>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = StyleSheet.create({
    flex: {
        flex: 1,
    },
    container: {
        marginLeft: 3 * a,
        marginRight: 3 * a,
        flexDirection: 'row',
    },
    finacnText: {
        color: '#333333',
        fontSize: Font.T2,
        marginLeft: 3 * a,
        marginTop: 3 * a,
    },
    viewPrdTips: {
        marginTop: a,
        flexDirection: "row"// row column
    },
    viewPrdTipsLeft:{
        marginLeft: Font.T1,
    },
    item: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 3 * a,
    },
    listViewStyle: {
        flexDirection: 'column',
        flexWrap: 'wrap', //多行显示
    },
    textItem: {
        color: '#333333',
        fontSize: Font.T2,
    },
    textYieldName: {
        color: '#666666',
        fontSize: Font.T2,
    },
    viewYield: {
        marginTop: a,
        flexDirection: "row"// row column
    },
    textYield: {
        fontSize: Font.D2,
        color: '#f13a28',
    },
    textYieldUnit: {
        fontSize: Font.T2,
        color: '#f13a28',
        justifyContent: 'center',
        marginTop: 8,
    },
    textPrdTips: {
        borderRadius: 2.5,
        backgroundColor: '#3399ff',
        color: '#ffffff',
        fontSize: Font.T2,
        paddingBottom: 2,
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
    },
    textPfirstAmt: {
        fontSize: Font.T2,
        color: '#333333',
        marginLeft:  Font.T1,
    }
});
