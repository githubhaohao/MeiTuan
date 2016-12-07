/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    Switch,
    PixelRatio,

    } from 'react-native';

export default class SmallMiddleView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
        };
    }
    static get defaultProps(){
        return {
            onClick:() => {}
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.item,styles.rightLine]}>
                    <Text style={styles.text}>500</Text>
                    <Text style={[styles.text,{marginTop:4}]}>美团券</Text>
                </View>
                <View style={[styles.item,styles.rightLine]}>
                    <Text style={styles.text}>999+</Text>
                    <Text style={[styles.text,{marginTop:4}]}>评价</Text>
                </View>
                <View style={styles.item}>
                    <Text style={styles.text}>50</Text>
                    <Text style={[styles.text,{marginTop:4}]}>收藏</Text>
                </View>
            </View>

        );
    }

}

const styles = StyleSheet.create({
    container:{
        height:58,
        flexDirection:'row',
        backgroundColor:'rgba(255,96,0,0.8)',
        padding:4,
    },

    item:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },

    rightLine:{
        borderColor:'white',
        borderRightWidth:1 / PixelRatio.get(),
    },

    text:{
        fontSize:15,
        color:'white',
    }

});
