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
    Switch,

    } from 'react-native';
const MiddleData = require('./MiddleData.json');
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
            <View style={styles.itemView}>
                {this.renderAllItem()}
            </View>
        );
    }

    renderAllItem(){
        let itemArr = [];
        for(let i=0;i<MiddleData.length;i++){
            let itemData = MiddleData[i];
            itemArr.push(
                <InnerView key={i} title={itemData.title} iconName={itemData.iconName}/>
            )
        }
        return itemArr;

    }
}

class InnerView extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    static get defaultProps(){
        return {
            iconName:'',
            title:'',
            onClick:() => {},
        }

    }


    render(){
        return(
            <TouchableOpacity onPress={() => this.props.onClick()} activeOpacity={0.3}>
                <View style={{justifyContent:'center',alignItems:'center',width:80,height:60,padding:4,}}>
                    <Image source={{uri:this.props.iconName}} style={{width:40,height:32}}/>
                    <Text style={{marginTop:8}}>{this.props.title}</Text>
                </View>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:48,
    },

    itemView:{
        height:90,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        backgroundColor:'white',
    }
});
