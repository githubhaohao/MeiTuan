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


export default class MiddleCommonView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }
    static get defaultProps(){
        return {
            title:'',
            subtitle:'',
            rightIcon:'',
            titleColor:'orange',
            isRedefine:false,
            rightIconWidth:64,
            rightIconHeight:44,
            onClickCallBack:null,
        }
    }

    render() {
        let iconStyle = (this.props.isRedefine) ? {width:this.props.rightIconWidth,height:this.props.rightIconHeight} : styles.icon;
        return (
            <TouchableOpacity onPress={() => this.itemClick(this.props.title)} activeOpacity={0.5}>
                <View style={styles.container}>
                    <View style={styles.leftView}>
                        <Text style={[styles.title,{color:this.props.titleColor}]}>{this.props.title}</Text>
                        <Text style={styles.subTitle}>{this.props.subtitle}</Text>
                    </View>
                    <Image style={iconStyle} source={{uri:this.props.rightIcon}}/>
                </View>
            </TouchableOpacity>
        );
    }

    itemClick(data){
        if(this.props.onClickCallBack == null) return;
        this.props.onClickCallBack(data);
    }

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        width:width * 0.5 -1,
        height:59,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:1,
        marginLeft:1,

    },

    leftView:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:8,
    },

    subTitle:{
        color:'gray'
    },

    title:{
        fontSize:18,
        fontWeight:'bold',
    },

    icon:{
        width:64,
        height:44,
        marginRight:8,
    },

});
