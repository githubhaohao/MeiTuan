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
const bottomData = require('../../LocalData/XMG_Home_D4.json');
import MiddleCommonView from './MiddleCommonView.js';
const itemsData = bottomData.data;


export default class MiddleBottomView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
    }
    static get defaultProps(){
        return {
            onClickListener:null,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<View style={styles.topView}></View>*/}

                <View style={styles.bottomView}>
                    {this.renderBottomViewItem(itemsData[0])}
                    {this.renderBottomViewItem(itemsData[1])}
                </View>
                <View style={styles.bottomView}>
                    {this.renderBottomViewItem(itemsData[2])}
                    {this.renderBottomViewItem(itemsData[3])}
                </View>
            </View>
        );
    }

    renderBottomView(){
        let itemArr = [],dataArr = bottomData.data;
        for(let i = 0;i< dataArr.length;i++){
            let itemData = dataArr[i];
            console.log(itemData);
            let url = this.dealWithImgUrl(itemData.imageurl);
            itemArr.push(
                <MiddleCommonView title={itemData.maintitle}
                                  subtitle={itemData.deputytitle}
                                  rightIcon={url}
                                  titleColor={itemData.typeface_color}
                                  key={i}
                                  isRedefine={true}
                                  rightIconWidth={30}
                                  rightIconHeight={30}
                    />
            )
        }

        return itemArr;
    }

    renderBottomViewItem(itemData){
        let url = this.dealWithImgUrl(itemData.imageurl);
        return (
            <MiddleCommonView title={itemData.maintitle}
                              subtitle={itemData.deputytitle}
                              rightIcon={url}
                              titleColor={itemData.typeface_color}
                              onClickCallBack={(data) => this.commonViewClick(data)}
                />
        )
    }

    commonViewClick(data){
        if(this.props.onClickListener == null) return;
        this.props.onClickListener(data);

    }

    dealWithImgUrl(url){
        if(url.search('w.h') == -1) {
            return url;
        } else {
            return url.replace('w.h','120.90');
        }

    }

}

const styles = StyleSheet.create({
    container:{
        marginTop:16,
    },

    topView:{

    },

    bottomView:{
        flexDirection:'row',
        flexWrap:'wrap',

    },

});
