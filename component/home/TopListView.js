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
    ListView,
    } from 'react-native';
const {width} = require('Dimensions').get('window');
const column = 5,itemWidth = 70;
const margin = (width - column * itemWidth) / (column+1);

export default class TopListView extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        let ds = new ListView.DataSource({rowHasChanged:(r1,r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(this.props.dataArr),

        };
    }
    static get defaultProps(){
        return {
            dataArr:[],
            onClickCallBack:null,
        }
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={(rowData) => this.renderRow(rowData)}
                contentContainerStyle={styles.contentContainerStyle}
                scrollEnabled={false}
                />

        );
    }

    renderRow(rowData){
        let data = rowData.title;
        return (
            <TouchableHighlight underlayColor='#cfcfcf' onPress={() => this.onItemClickListener(data)} style={styles.item}>
                <View style={styles.center}>
                    <Image source={{uri:rowData.image}} style={styles.itemIcon}/>
                    <Text style={styles.itemText}>{rowData.title}</Text>
                </View>
            </TouchableHighlight>
        )
    }

    onItemClickListener(data){
        if(this.props.onClickCallBack == null) return;
        this.props.onClickCallBack(data);

    }


}

const styles = StyleSheet.create({
    item:{
        width:itemWidth,
        height:itemWidth,
        justifyContent:'center',
        alignItems:'center',
        marginTop:10,
        marginLeft:margin,

    },

    center:{
        justifyContent:'center',
        alignItems:'center',
    },

    itemIcon:{
        width:52,
        height:52,
    },

    itemText:{

    },

    contentContainerStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        width:width,
    },


});
