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

export default class CommonItem extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isOpen:false,
        };
      }
    static get defaultProps(){
        return {
            title:'',
            onClickCallBack:null,
            onSwitchValueChange:() => {},
            isSwitch:false,
            isClearCache:false,
            cache:'',
        }
    }

    render() {
        return (
            <TouchableHighlight style={styles.container} onPress={() => this.onClick(this.props.title)} underlayColor='#666'>
                <View style={styles.itemView}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                    {this.renderRightView()}
                </View>
            </TouchableHighlight>
        );
    }

    renderRightView(){
        if(this.props.isSwitch){
            return (
                <Switch value={this.state.isOpen} onValueChange={() =>{this.setState({isOpen:!this.state.isOpen})}}/>
            );
        } else if(this.props.isClearCache){
            return (
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Text style={{color:'red'}}>{this.props.cache}</Text>
                    <Image source={{uri:'icon_cell_rightarrow'}} style={[styles.icon,{marginLeft:4}]}/>
                </View>

            );
        } else {
            return (
                <Image source={{uri:'icon_cell_rightarrow'}} style={styles.icon}/>
            );

        }
    }

    onClick(data){
        if(this.props.onClickCallBack == null) return;
        this.props.onClickCallBack(data);

    }
}

const styles = StyleSheet.create({
    container:{
        height:48,
    },

    itemView: {
        flex:1,
        paddingLeft:20,
        paddingRight:20,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth:0.5,
        borderBottomColor:'#ddd',
        backgroundColor:'white',
    },
    icon:{
        width:8,
        height:13,
    },

    titleText:{
        fontSize:15,
        color:'#333',
    },
});
