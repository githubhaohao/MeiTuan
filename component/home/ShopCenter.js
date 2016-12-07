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

import BottomCommonItem from './BottomCommonItem.js';
const Home_D5 = require('../../LocalData/XMG_Home_D5.json');

export default class ShopCenter extends Component {

    static get defaultProps(){
        return {
            popToHomeView:null,
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <BottomCommonItem leftTitle='购物中心' leftIcon='gw' rightTitle={Home_D5.tips}/>
                <ScrollView
                    style={styles.scrollView}
                    horizontal={true}
                    showsHorizontalScrollIndicator ={false}
                    >
                    {this.renderAllItem()}
                </ScrollView>
            </View>
        );
    }

    renderAllItem(){
        let itemArr = [];
        let shopData = Home_D5.data;
        for(let index = 0;index < shopData.length;index ++){
            let itemData = shopData[index];
            itemArr.push(
                <ShopCenterItem
                    onClickListener={(url) => this.popToHome(url)}
                    dataUrl={itemData.detailurl}
                    shopImage={itemData.img} shopSale={itemData.showtext.text} shopName={itemData.name} key={index}/>
            )
        }

        return itemArr;
    }

    popToHome(url){
        if (this.props.popToHomeView == null) return;
        this.props.popToHomeView(url)
    }

}
class ShopCenterItem extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

    static get defaultProps(){
        return {
            shopImage:'',
            shopSale:'',
            shopName:'',
            dataUrl:'',
            onClickListener:null,
        }
    }

    render(){
        return (
            <TouchableHighlight underlayColor='#dfdfdf' onPress={() => this.clickItem(this.props.dataUrl)}>
                <View style={styles.centerItem}>
                    <Image source={{uri:this.props.shopImage}} style={styles.shopImage}/>
                    <Text style={styles.shopSale}>{this.props.shopSale}</Text>
                    <Text style={styles.shopName}>{this.props.shopName}</Text>
                </View>
            </TouchableHighlight>
        )
    }
    clickItem(url){
        if(this.props.dataUrl == null) return;
        this.props.onClickListener(url);
    }
}

const styles = StyleSheet.create({
    container:{
        marginTop:16,
    },
    shopImage:{
        width:120,
        height:80,
        borderRadius:5,
    },
    scrollView:{
        flexDirection:'row',
        backgroundColor:'white',
        padding:5,
    },
    centerItem:{
        margin:3,

    },

    shopSale:{
        position:'absolute',
        left:0,
        bottom:30,
        backgroundColor:'red',
        color:'white',
        padding:3,

    },

    shopName:{
        marginTop:5,
    },

});

