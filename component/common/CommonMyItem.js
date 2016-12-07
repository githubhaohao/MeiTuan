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

    } from 'react-native';

export default class CommonMyItem extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        //require('../../images/avatar_enterprise_vip.png');
        this.state = {

        };
    }
    static get defaultProps(){
        return {
            leftTitle:'',
            leftIconName:'avatar_enterprise_vip',
            rightTitle:'',
            rightIconName:'me_new',
            onClick:() => {}
        }
    }

    render() {
        return (
            <TouchableHighlight style={styles.container} onPress={() => this.props.onClick()} underlayColor='#666'>
                <View style={styles.itemView}>
                    <View style={styles.leftView}>
                        <Image source={{uri:this.props.leftIconName}} style={styles.leftIcon}/>
                        <Text style={styles.leftTitle}>{this.props.leftTitle}</Text>
                    </View>
                    <View style={styles.rightView}>
                        {this.renderRightView()}
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    renderRightView(){
        return (
            <View style={[styles.rightView,{flex:1}]}>
                {this.rightRenderContent()}
                <Image source={require('../../images/icon_cell_rightarrow.png')} style={[styles.icon,{marginLeft:4}]}/>
            </View>

        );
    }

    rightRenderContent(){
        if(this.props.rightTitle.length == 0) {
            return (
                <Image style={styles.rightIcon} source={{uri:this.props.rightIconName}}/>
            );
        } else {
            return (
                <Text>{this.props.rightTitle}</Text>
            );
        }
    }
}

const styles = StyleSheet.create({
    container:{
        height:54,
    },

    itemView: {
        flex:1,
        paddingLeft:10,
        paddingRight:10,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:0.5,
        borderBottomColor:'#ddd',
        backgroundColor:'white',
    },

    leftView:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    leftIcon:{
        width:34,
        height:34,
        borderRadius:17,
    },

    leftTitle:{
        fontSize:16,
        fontWeight:'bold',
        color:'black',
        marginLeft:10,
    },

    rightView:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    icon:{
        width:8,
        height:13,
        marginLeft:10,
    },

    rightIcon:{
        width:24,height:13,
    },

    rightTitle:{
        fontSize:12,
        color:'#666',
    },
});
