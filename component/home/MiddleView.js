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
    TouchableOpacity,
    ListView,
    } from 'react-native';
const {width} = require('Dimensions').get('window');
import MiddleCommonView from './MiddleCommonView.js';
const TopMiddleData = require('../../LocalData/HomeTopMiddleLeft.json')
export default class MiddleView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }
    static get defaultProps(){
        return {
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    {this.renderLeftView()}
                </View>
                <View>
                    {this.renderRightView()}
                </View>
            </View>

        );
    }

    renderLeftView(){
        let data = TopMiddleData.dataLeft[0];
        return (
            <TouchableOpacity onPress={() => {}} activeOpacity={0.2}>
                <View style={styles.leftView}>
                    <Image source={{uri:data.img1}} style={styles.leftViewImg}/>
                    <Image source={{uri:data.img2}} style={styles.leftViewImg}/>
                    <Text>{data.title}</Text>
                    <View style={styles.leftViewBottomView}>
                        <Text style={{color:'blue',marginRight:5,fontWeight:'bold'}}>{data.price}</Text>
                        <Text style={{color:'orange',backgroundColor:'yellow'}}>{data.sale}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        );

    }

    renderRightView(){
        let itemArr = [];
        let rightData = TopMiddleData.dataRight;
        for(let i =0 ; i < rightData.length;i++){
            let itemData = rightData[i];
            itemArr.push(
                <MiddleCommonView
                    key={i}
                    title={itemData.title}
                    subtitle={itemData.subTitle}
                    rightIcon={itemData.rightImage}
                    titleColor={itemData.titleColor}
                    />
            )
        }
        return itemArr;

    }

}

const styles = StyleSheet.create({
    container:{
        marginTop:16,
        flexDirection:'row',
    },

    leftView:{
        width:width*0.5 - 1,
        height:119,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },

    leftViewImg:{
        width:120,
        height:30,
        resizeMode:'contain',
    },

    leftViewBottomView:{
        flexDirection:'row',
        marginTop:5

    }

});
