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
    Navigator,
    StatusBar,
    ToastAndroid,
    BackAndroid,
} from 'react-native';
//npm install react-native-tab-navigator --save
import TabNavigator from 'react-native-tab-navigator';
import Home from '../home/Home.js';
import Mine from '../mine/Mine.js';
import More from '../more/More.js';
import Shop from '../shop/Shop.js';

const tabBarHiddenStyle = {height:0,overflow:'hidden'};
const tabBatShowStyle = {height:56,backgroundColor:'#efefef'}
const {width,height} = require('Dimensions').get('window');

export default class Main extends Component {

  // 构造
    constructor(props) {
      super(props);
      // 初始状态
      this.state = {
        tabBarStyle:tabBatShowStyle,
        selectedTab:'home',
        isShowing:true,
      };
    }

  render() {
    if(this.state.isShowing){
       return this.showWelcomePage();
    } else {
       return this.showMainPage();
    }
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
          isShowing:false,
      });
    },2000);
  }

  showWelcomePage(){
    return (
        <View style={styles.matchParent}>
            <StatusBar
                backgroundColor="#f7f7f7"
                />
          <Image style={styles.largeImageStyle} source={require('../../images/welcome.png')}/>
        </View>
    );
  }

  showMainPage(){
    return (
        <TabNavigator
            tabBarStyle={this.state.tabBarStyle}
            sceneStyle={{ paddingBottom: this.state.tabBarStyle.height }}
            >
            <TabNavigator.Item
                selected={this.state.selectedTab === 'home'}
                title='首页'
                selectedTitleStyle={styles.selectedTextStyle}
                titleStyle={styles.textStyle}
                renderIcon={() => <Image source={require('../../images/icon_tabbar_homepage.png')} style={styles.icon}></Image>}
                renderSelectedIcon={() => <Image source={require('../../images/icon_tabbar_homepage_selected.png')} style={styles.icon}></Image>}
                onPress={() => this.setState({ selectedTab: 'home' })}>
                <Navigator
                    initialRoute={{name:'Home',component:Home}}
                    configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                    renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                    />
             </TabNavigator.Item>
             <TabNavigator.Item
                selected={this.state.selectedTab === 'shop'}
                title='商家'
                selectedTitleStyle={styles.selectedTextStyle}
                titleStyle={styles.textStyle}
                renderIcon={() => <Image source={require('../../images/icon_tabbar_merchant_normal.png')} style={styles.icon}></Image>}
                renderSelectedIcon={() => <Image source={require('../../images/icon_tabbar_merchant_selected.png')} style={styles.icon}></Image>}
                onPress={() => this.setState({ selectedTab: 'shop' })}>
                 <Navigator
                     initialRoute={{name:'Shop',component:Shop}}
                     configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                     renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                     />
             </TabNavigator.Item>
             <TabNavigator.Item
                selected={this.state.selectedTab === 'mine'}
                title='我的'
                selectedTitleStyle={styles.selectedTextStyle}
                titleStyle={styles.textStyle}
                renderIcon={() => <Image source={require('../../images/icon_tabbar_mine.png')} style={styles.icon}></Image>}
                renderSelectedIcon={() => <Image source={require('../../images/icon_tabbar_mine_selected.png')} style={styles.icon}></Image>}
                onPress={() => this.setState({ selectedTab: 'mine' })}
                badgeText="1"
                 >
                 <Navigator
                     initialRoute={{name:'Mine',component:Mine}}
                     configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                     renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                     />
             </TabNavigator.Item>
             <TabNavigator.Item
                selected={this.state.selectedTab === 'more'}
                title='更多'
                selectedTitleStyle={styles.selectedTextStyle}
                titleStyle={styles.textStyle}
                renderIcon={() => <Image source={require('../../images/icon_tabbar_misc.png')} style={styles.icon}></Image>}
                renderSelectedIcon={() => <Image source={require('../../images/icon_tabbar_misc_selected.png')} style={styles.icon}></Image>}
                onPress={() => this.setState({ selectedTab: 'more' })}>
                 <Navigator
                     initialRoute={{name:'More',component:More}}
                     configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                     renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                     />
             </TabNavigator.Item>

            {/*
             {this.renderTabNavigatorItem('首页',require('../../images/icon_tabbar_homepage.png'),require('../../images/icon_tabbar_homepage_selected.png'),'home','首页',Home)}
             {this.renderTabNavigatorItem('商家',require('../../images/icon_tabbar_merchant_normal.png'),require('../../images/icon_tabbar_merchant_selected.png'),'shop','商家',Shop)}
             {this.renderTabNavigatorItem('我的',require('../../images/icon_tabbar_mine.png'),require('../../images/icon_tabbar_mine_selected.png'),'mine','我的',Mine)}
             {this.renderTabNavigatorItem('更多',require('../../images/icon_tabbar_misc.png'),require('../../images/icon_tabbar_misc_selected.png'),'more','更多',More)}
            */}
        </TabNavigator>
    );
  }

  renderTabNavigatorItem(title, iconSource, selectedIconSource, selectedTab, componentName, component, badgeText){
      return (
          <TabNavigator.Item
              title={title}//传递变量，一定要加括号
              renderIcon={() => <Image source={iconSource}/>}
              renderSelectedIcon={() => <Image source={selectedIconSource}/>}
              selected={this.state.selectedTab === selectedTab}
              onPress={() => this.setState({ selectedTab: selectedTab })}>
              selectedTitleStyle={styles.selectedTextStyle}
              titleStyle={styles.textStyle}
              badgeText={badgeText}
              >
              <Navigator
                  initialRoute={{name:componentName,component:component}}
                  configureScene={()=>{
                             return Navigator.SceneConfigs.PushFromRight;
                        }}
                  renderScene={(route,navigator)=>{
                           let Component = route.component;
                           return <Component {...route.passProps} navigator={navigator}/>;
                        }}
                  />

          </TabNavigator.Item>
      )
  }
}

const styles = StyleSheet.create({
  matchParent:{
    flex:1,
  },
  largeImageStyle:{
    width:width,
    height:height,
  },
  icon:{
    width:28,
    height:28,
  },
  selectedTextStyle:{
    color:'red',
  },
  textStyle:{
      fontSize:13,
    color:'#999',
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
