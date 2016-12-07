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
    } from 'react-native';

import Main from '../main/Main.js';

export default class Launcher extends Component {
    render() {
        return (
            <Image source={require('../../images/launchimage.png')} style={styles.matchParent}/>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.props.navigator.replace({
                component:Main,
            })
        },100);
    }
}

const styles = StyleSheet.create({
    matchParent:{
        flex:1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('MeiTuan', () => MeiTuan);
