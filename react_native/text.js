/**
 * Created by liuwenxiang on 16/12/25.
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    PixelRatio,
    Text,
    View
} from 'react-native';

export default class FirstRN extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <View style={styles.container}>

                    <View style={[styles.item, styles.center]}>
                        <Text style={styles.font}>酒店</Text>
                    </View>

                    <View style={[styles.item, styles.lineLeftRight]}>
                        <View style={[styles.flex, styles.center, styles.lineCenter]}>
                            <Text style={styles.font}>海外酒店</Text>
                        </View>
                        <View style={[styles.flex, styles.center]}>
                            <Text style={styles.font}>特惠酒店</Text>
                        </View>
                    </View>

                    <View style={[styles.item, styles.lineLeftRight]}>
                        <View style={[styles.flex, styles.center, styles.lineCenter]}>
                            <Text style={styles.font}>团购</Text>
                        </View>
                        <View style={[styles.flex, styles.center]}>
                            <Text style={styles.font}>客栈,公寓</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        marginLeft: 5,
        marginRight: 5,
        height: 85,
        flexDirection: 'row',
        borderRadius: 5,
        padding: 2,
        backgroundColor: '#FF0067',
    },
    item: {
        flex: 1,
        height: 80,
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: 1,
    },
    font: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    lineLeftRight: {
        borderLeftWidth: 1 / PixelRatio.get(),
        borderRightWidth: 1 / PixelRatio.get(),//自带函数
        borderColor: '#fff',
    },
    lineCenter: {
        borderBottomWidth: 1 / PixelRatio.get(),
        borderColor: '#fff',
    },
});

// AppRegistry.registerComponent('FirstRN', () => FirstRN);

