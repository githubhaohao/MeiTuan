/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
    } from 'react-native';
import Main from './component/main/Main.js'
import Launcher from './component/main/Launcher.js';

class MeiTuan extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render(){
        return (
            <Navigator
                initialRoute={{name:'启动页',component:Launcher}}
                configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                />
        );
    }
}

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
