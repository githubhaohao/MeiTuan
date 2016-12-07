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
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
    } from 'react-native';

import CommonItem from '../common/CommonItem.js';

export default class BottomCommonItem extends Component {

    static get defaultProps(){
        return {
            leftIcon:'',
            leftTitle:'',
            rightTitle:'',
        }
    }
    render() {
        return (
            <TouchableHighlight underlayColor='#efefef' onPress={() => {}}>
                <View style={styles.container}>
                    <View style={styles.leftView}>
                        <Image source={{uri:this.props.leftIcon}} style={{width:35,height:35}}/>
                        <Text style={{marginLeft:5,fontSize:16}}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.rightView}>
                        <Text style={{color:'gray'}}>{this.props.rightTitle}</Text>
                        <Image source={{uri:'icon_cell_rightarrow'}} style={[styles.icon,{marginLeft:5}]}/>
                    </View>
                </View>
            </TouchableHighlight>

        );
    }

}

const styles = StyleSheet.create({
    container:{
        height:50,
        flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomWidth:0.5,
        borderBottomColor:'#e8e8e8'
    },
    leftView:{
        marginLeft:8,
        flexDirection:'row',
        alignItems:'center',
    },
    rightView:{
        marginRight:8,
        flexDirection:'row',
        alignItems:'center',
    },
    icon:{
        width:8,
        height:13,
    },

});

