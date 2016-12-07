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

export default class More extends Component {
  render() {
    return (
        <View style={styles.matchParent}>
          {this.renderToolBar()}
          <ScrollView style={styles.scrollView}>
            <View style={{marginTop:16,}}>
              <CommonItem title='扫一扫'/>
            </View>

            <View style={{marginTop:16,}}>
              <CommonItem title='省流量模式' isSwitch={true}/>
              <CommonItem title='消息提醒' onClickCallBack={(data) => alert(data)}/>
              <CommonItem title='友情好友' onClickCallBack={(data) => alert(data)}/>
              <CommonItem title='清空缓存' cache='12.3M' isClearCache={true} onClickCallBack={(data) => alert(data)}/>
            </View>

            <View style={{marginTop:16,}}>
              <CommonItem title='意见反馈' onClickCallBack={(data) => alert(data)}/>
              <CommonItem title='问卷调查' onClickCallBack={(data) => alert(data)}/>
              <CommonItem title='支付帮助' onClickCallBack={(data) => alert(data)}/>
              <CommonItem title='网络诊断' onClickCallBack={(data) => alert(data)}/>
              <CommonItem title='关于美团' onClickCallBack={(data) => alert(data)}/>
              <CommonItem title='我要应聘' onClickCallBack={(data) => alert(data)}/>
            </View>

            <View style={{marginTop:16,}}>
              <CommonItem title='精品应用' onClickCallBack={(data) => alert(data)}/>
            </View>

          </ScrollView>
        </View>

    );
  }

  renderToolBar(){
    return (
        <View style={styles.toolBarStyle}>
          <Text style={styles.toolBarTitleText}>更多</Text>
          <TouchableHighlight style={styles.toolBarRightView} underlayColor='rgba(200,90,22,0.6)' onPress={() => {}} >
            <Image source={require('../../images/icon_mine_setting.png')} style={styles.toolBarIcon}/>
          </TouchableHighlight>
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
    alignItems:'center',
    justifyContent:'center',
  },

  toolBarTitleText:{
    fontSize:16,
    fontWeight:'bold',
    color:'white',
  },

  toolBarRightView:{
    width:46,
    height:46,
    position:'absolute',
    bottom:4,
    right:4,
    alignItems:'center',
    justifyContent:'center',
  },

  toolBarIcon:{
    width:30,height:30
  },

  matchParent:{
    flex:1,
  },
  scrollView:{
    backgroundColor:'#dfdfdf'
  },
});

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
