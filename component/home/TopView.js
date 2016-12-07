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
    Switch,
    ScrollView,
    } from 'react-native';
const {width} = require('Dimensions').get('window');
const TopMenu = require('../../LocalData/TopMenu.json');
import TopListView from './TopListView.js';




export default class TopView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            activePage:0,

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
                <ScrollView horizontal={true}
                            pagingEnabled={true}
                            showsHorizontalScrollIndicator={false}
                            onMomentumScrollEnd={(e) => this.onScrollAnimationEnd(e)}
                    >
                    {this.renderScrollItems()}
                </ScrollView>
                <View style={styles.indicatorView}>
                    {this.renderIndicator()}
                </View>
            </View>

        );
    }

    renderScrollItems(){
        let itemArr = [],dataArr = TopMenu.data;
        for(let i = 0;i<dataArr.length;i++){
            itemArr.push(
                <TopListView dataArr={dataArr[i]} key={i} onClickCallBack={(data) => this.passDataToHome(data)}/>
            )
        }

        return itemArr;
    }

    renderIndicator(){
        let indicatorArr =[],style;
        for(let i=0;i<2;i++){
            style = (i === this.state.activePage) ? {color:'orange'}:{color:'gray'};
            indicatorArr.push(
                <Text key={i} style={[{fontSize:28},style]}>&bull;</Text>
            )
        }

        return indicatorArr;
    }

    onScrollAnimationEnd(e) {
        //current page
        let currentPage = Math.floor(e.nativeEvent.contentOffset.x / width);//偏移值除以屏幕宽度,取整
         this.setState({
             activePage:currentPage,
         })
    }

    passDataToHome(data){
        if(this.props.onClickListener == null) return;
        this.props.onClickListener(data);

    }



}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
    },

    indicatorView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    },

});
