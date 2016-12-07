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
    ScrollView,
    Image,
} from 'react-native';

import CommonMyItem from '../common/CommonMyItem.js';
import MiddleView from './MiddleView.js';
import SmallMiddleView from './SmallMiddleView.js';

export default class Mine extends Component {
  render() {
    return (
      <View style={styles.matchParent}>
        <View style={styles.header}>
          <View style={styles.headerLeftView}>
            <Image source={require('../../images/lover.jpg')} style={styles.headerIcon}/>
            <Text style={styles.headerTitle}>美团电商</Text>
            <Image source={{uri:'avatar_vip'}} style={styles.headerLeftSmallIcon}/>
          </View>
          <Image source={require('../../images/icon_cell_rightarrow.png')} style={styles.headerRightSmallIcon}/>
        </View>
        <SmallMiddleView />
        <ScrollView style={styles.scrollView}>
          <View>
            <CommonMyItem leftTitle='我的订单' leftIconName='collect' rightTitle='查看全部订单'/>
            <MiddleView />
          </View>
          <View style={{marginTop:16,}}>
            <CommonMyItem leftTitle='我的钱包' leftIconName='pay' rightTitle='帐户余额：&yen;8452'/>
            <CommonMyItem leftTitle='抵用券' leftIconName='card' rightIconName='icon_hot'/>
          </View>

          <View style={{marginTop:16,}}>
            <CommonMyItem leftTitle='积分商城' leftIconName='card'/>
          </View>

          <View style={{marginTop:16,}}>
            <CommonMyItem leftTitle='今日推荐' leftIconName='like' rightIconName='icon_hot'/>
          </View>

          <View style={{marginTop:16,}}>
            <CommonMyItem leftTitle='我要合作' leftIconName='new_friend' rightTitle='轻松开店,招财进宝'/>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  matchParent:{
    flex:1,
  },
  scrollView:{
    backgroundColor:'#dfdfdf'
  },
  header:{
    height:96,
    flexDirection:'row',
    paddingLeft:16,
    paddingRight:16,
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'rgba(255,96,0,1.0)',
  },
  headerLeftView:{
    height:96,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },

  headerIcon:{
    width:80,
    height:80,
    borderRadius:40,
    borderWidth:3,
    borderColor:'white',
  },

  headerTitle:{
    fontSize:18,
    fontWeight:'bold',
    color:'white',
    marginLeft:10,
  },

  headerLeftSmallIcon:{
    width:25,height:25,marginLeft:4
  },

  headerRightSmallIcon:{
    width:8,
    height:13,
  }
});

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
