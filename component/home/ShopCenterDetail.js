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
    WebView,
    } from 'react-native';

export default class ShopCenterDetail extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            detailUrl: this.props.url + '?uuid=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&utm_term=6.6&utm_source=AppStore&utm_content=5C7B6342814C7B496D836A69C872202B5DE8DB689A2D777DFC717E10FC0B4271&version_name=6.6&userid=160495643&utm_medium=iphone&lat=23.134709&utm_campaign=AgroupBgroupD100Ghomepage_shoppingmall_detailH0&token=b81UqRVf6pTL4UPLLBU7onkvyQoAAAAAAQIAACQVmmlv_Qf_xR-hBJVMtIlq7nYgStcvRiK_CHFmZ5Gf70DR47KP2VSP1Fu5Fc1ndA&lng=113.373890&f=iphone&ci=20&msid=0FA91DDF-BF5B-4DA2-B05D-FA2032F30C6C2016-04-04-08-38594'
        };
      }

    static get defaultProps(){
        return{
        }
    }

    render() {
        return (
            <View style={styles.matchParent}>
                {this.renderToolBar()}
                <WebView
                    automaticallyAdjustContentInsets={true}
                    source={{uri: this.state.detailUrl}}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    startInLoadingState={true}
                    />
            </View>
        );
    }

    renderToolBar(){
        return (
            <View style={styles.toolBarView}>
                <TouchableHighlight underlayColor='rgba(200,90,22,0.6)' style={styles.toolBarIconView} onPress={() => {this.props.navigator.pop()}}>
                    <Image style={styles.toolBarIcon} source={{uri:'icon_camera_back_normal'}}/>
                </TouchableHighlight>
                <Text style={styles.titleText}>购物中心</Text>
                <TouchableHighlight underlayColor='rgba(200,90,22,0.6)' onPress={() => {}} style={styles.toolBarIconView} >
                    <Image style={styles.toolBarIcon} source={{uri:'icon_mine_setting'}}/>
                </TouchableHighlight>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    matchParent:{
        flex:1,
    },

    toolBarView:{
        flexDirection:'row',
        height:54,
        padding:4,
        paddingLeft:6,
        paddingRight:6,
        backgroundColor:'rgba(255,96,0,1.0)',
        alignItems:'center',
        justifyContent:'space-between',
    },

    titleText:{
        fontSize:16,
        fontWeight:'bold',
        color:'white',
    },

    toolBarIcon:{
        width:26,
        height:26,
    },

    toolBarIconView:{
        width:46,
        height:46,
        justifyContent:'center',
        alignItems:'center',
    },


});

