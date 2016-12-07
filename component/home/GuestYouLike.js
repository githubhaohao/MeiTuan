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
    ListView,
    } from 'react-native';
const {width} = require('Dimensions').get('window');
import BottomCommonItem from './BottomCommonItem.js';
const networkData = require('../../LocalData/HomeGeustYouLike.json');

export default class GuestYouLike extends Component {
    static get defaultProps(){
        return {
            api_url:'http://api.meituan1.com/group/v2/recommend/homepage/city/20?userId=160495643&userid=160495643&__vhost=api.mobile.meituan.com&position=23.134643%2C113.373951&movieBundleVersion=100&utm_term=6.6&limit=40&wifi-mac=64%3A09%3A80%3A10%3A15%3A27&ci=20&__skcy=X6Jxu5SCaijU80yX5ioQuvCDKj4%3D&__skua=5657981d60b5e2d83e9c64b453063ada&__skts=1459731016.350255&wifi-name=Xiaomi_1526&client=iphone&uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&__skno=FEB757F5-6120-49EC-85B0-D1444A2C2E7B&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_source=AppStore&utm_medium=iphone&version_name=6.6&wifi-cur=0&wifi-strength=&offset=0&utm_campaign=AgroupBgroupD100H0&__skck=3c0cf64e4b039997339ed8fec4cddf05&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        }
    }

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state = {
            dataSource:ds,
            onClickItemListener:null,
        };
      }


    render() {
        return (
            <View style={styles.container}>
                <BottomCommonItem leftIcon='cnxh'
                                  leftTitle='猜你喜欢'
                    />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => this.renderRow(rowData)}
                    />
            </View>
        );
    }

    renderRow(rowData){
        return (
            <TouchableHighlight underlayColor='#dfdfdf' activeOpacity={0.5} onPress={() => this.itemClick(rowData.subTitle)}>
                <View style={styles.itemView}>
                    <Image source={{uri:this.dealWithImgUrl(rowData.imageUrl)}} style={styles.itemImage}/>
                    <View style={styles.rightView}>
                        <View style={styles.rightTopView}>
                            <Text style={{fontSize:18,fontWeight:'bold'}}>{rowData.title}</Text>
                            <Text>{rowData.topRightInfo}</Text>
                        </View>
                        <View style={styles.rightMiddleView}>
                            <Text style={{color:'#999',width:width-120-16}} numberOfLines={1}>{rowData.subTitle} </Text>
                        </View>

                        <View style={styles.rightBottomView}>
                            <Text style={{color:'red',fontSize:18,fontWeight:'bold'}}>{this.dealWithMessage(rowData.subMessage)}</Text>
                            <Text style={{fontWeight:'bold'}}>{rowData.bottomRightInfo}</Text>
                        </View>
                    </View>

                </View>

            </TouchableHighlight>
        )
    }

    itemClick(data){
        if(this.props.onClickItemListener == null) return;
        this.props.onClickItemListener(data);
    }

    dealWithMessage(msg){
        if(msg.search('门市价:') !== -1){
            return msg.replace('门市价:','');
        } else {
            return msg;
        }
    }



    dealWithImgUrl(url){
        if(url.search('w.h') !== -1) {
            return url.replace('w.h','120.90');
        } else {
            return url;
        }
    }

    componentDidMount() {
        this.loadDataFromNetwork();
    }

    loadDataFromNetwork(){
        console.log('loadDataFromNetwork');
        {/*
         fetch(this.props.api_url).then(
         (data) => data.json()
         ).then(
         (response) => {
         console.log(response);
         }
         ).catch((error) => console.error(error));
        */}
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(networkData.data),
        })

    }

}

const styles = StyleSheet.create({
    container:{
        marginTop:16,
        backgroundColor:'white',
    },
    itemImage:{
        width:120,
        height:90,
        borderRadius:3,
    },
    itemView:{
        flexDirection:'row',
        height:106,
        padding:8,
        borderBottomWidth:0.5,
        borderBottomColor:'#888',
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightView:{
        flex:1,
        marginLeft:8,
    },

    rightTopView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    },

    rightMiddleView:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    },

    rightBottomView:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
    }



});

