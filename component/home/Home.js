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
  TouchableOpacity,
  TextInput,
    Platform,
    Image,
    StatusBar,
    ScrollView,
} from 'react-native';
const {width,height,size} = require('Dimensions').get('window');

import TopView from './TopView.js';
import MiddleView from './MiddleView.js';
import MiddleBottomView from './MiddleBottomView.js'
import ShopCenter from './ShopCenter.js';
import ShopCenterDetail from './ShopCenterDetail.js'
import GuestYouLike from './GuestYouLike.js';

export default class Home extends Component {
  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {};
    }
  render() {
    return (
        <View style={[styles.matchParent,{backgroundColor:'#efefef'}]}>
          <StatusBar
              backgroundColor='rgba(255,96,0,1.0)'
              barStyle="light-content"
              />
          {this.renderToolBar()}
          <ScrollView style={styles.matchParent} >
            <TopView onClickListener={(data) => {alert(data)}}/>
            <MiddleView/>
            <MiddleBottomView onClickListener={(data) => {alert(data)}}/>
            {/*购物中心*/}
            <ShopCenter popToHomeView={(url) => this.startShopCenterDetail(url)}/>
            <GuestYouLike onClickItemListener={(data) => alert(data)}/>
          </ScrollView>
        </View>

    );
  }

  startShopCenterDetail(url){
    //alert(url);
    this.props.navigator.push({
      component:ShopCenterDetail,
      name:'ShopCenterDetail',
      passProps:{'url':this.dealWithUrl(url)},
    })
  }

  dealWithUrl(url){

    return url.replace('imeituan://www.meituan.com/web/?url=','');

  }

  renderToolBar(){
    return (
        <View style={styles.toolBarStyle}>
          <View style={styles.locationView}>
              <TouchableOpacity activeOpacity={0.5}>
                  <Text style={styles.location}>杭州</Text>
              </TouchableOpacity>
          </View>
          <View style={styles.inputView}>
              <TextInput returnKeyType='search'  placeholder="输入商家, 品类, 商圈" style={styles.textInput} underlineColorAndroid='white'/>
          </View>
          <View style={styles.rightView}>
              <TouchableOpacity activeOpacity={0.5} style={styles.iconView}>
                <Image source={require('../../images/icon_homepage_message.png')} style={styles.toolBarIcon}/>
              </TouchableOpacity>
              <TouchableOpacity activeOpacity={0.5} style={styles.iconView}>
                <Image source={require('../../images/icon_homepage_scan.png')} style={styles.toolBarIcon}/>
              </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  toolBarStyle:{
    flexDirection:'row',
    height:54,
    padding:4,
    backgroundColor:'rgba(255,96,0,1.0)',
  },
  center:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationView:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  location:{
    color:'white',
    fontSize:14,
  },
  inputView:{
    flex:1,
    marginLeft:10,
  },
  textInput:{
    width:width*0.7,
    height:40,
    backgroundColor:'white',
    borderRadius:18,
    paddingLeft:14,
  },
  rightView:{
    flexDirection:'row',
    marginLeft:10,
  },
  toolBarIcon:{
    width:30,
    height:30,
  },
  iconView:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  matchParent:{
    flex:1
  },

});

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
