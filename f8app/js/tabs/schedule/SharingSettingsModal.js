/**
 * Copyright 2016 Facebook, Inc.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * @flow
 */'use strict';var cov_23s9nfmkbq=function(){var path='tabs/schedule/SharingSettingsModal.js',hash='4c37b5d5e229dba0a575897d5883ce6978104373',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/schedule/SharingSettingsModal.js',statementMap:{'0':{start:{line:26,column:15},end:{line:26,column:34}},'1':{start:{line:27,column:12},end:{line:27,column:28}},'2':{start:{line:28,column:17},end:{line:28,column:38}},'3':{start:{line:29,column:11},end:{line:29,column:26}},'4':{start:{line:30,column:16},end:{line:30,column:36}},'5':{start:{line:31,column:22},end:{line:31,column:50}},'6':{start:{line:32,column:28},end:{line:32,column:62}},'7':{start:{line:34,column:28},end:{line:34,column:52}},'8':{start:{line:35,column:18},end:{line:35,column:40}},'9':{start:{line:44,column:4},end:{line:61,column:6}},'10':{start:{line:52,column:27},end:{line:52,column:54}},'11':{start:{line:57,column:27},end:{line:57,column:55}},'12':{start:{line:65,column:4},end:{line:65,column:52}},'13':{start:{line:66,column:4},end:{line:66,column:31}},'14':{start:{line:70,column:13},end:{line:89,column:2}},'15':{start:{line:91,column:0},end:{line:91,column:49}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:43,column:2},end:{line:43,column:3}},loc:{start:{line:43,column:11},end:{line:62,column:3}},line:43},'1':{name:'(anonymous_1)',decl:{start:{line:52,column:21},end:{line:52,column:22}},loc:{start:{line:52,column:27},end:{line:52,column:54}},line:52},'2':{name:'(anonymous_2)',decl:{start:{line:57,column:21},end:{line:57,column:22}},loc:{start:{line:57,column:27},end:{line:57,column:55}},line:57},'3':{name:'(anonymous_3)',decl:{start:{line:64,column:2},end:{line:64,column:3}},loc:{start:{line:64,column:37},end:{line:67,column:3}},line:64}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0},f:{'0':0,'1':0,'2':0,'3':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var F8Button=(++cov_23s9nfmkbq.s[0],require('F8Button'));var React=(++cov_23s9nfmkbq.s[1],require('React'));var StyleSheet=(++cov_23s9nfmkbq.s[2],require('StyleSheet'));var View=(++cov_23s9nfmkbq.s[3],require('View'));var Navigator=(++cov_23s9nfmkbq.s[4],require('Navigator'));var FriendsUsingApp=(++cov_23s9nfmkbq.s[5],require('./FriendsUsingApp'));var SharingSettingsCommon=(++cov_23s9nfmkbq.s[6],require('./SharingSettingsCommon'));var{setSharingEnabled}=(++cov_23s9nfmkbq.s[7],require('../../actions'));var{connect}=(++cov_23s9nfmkbq.s[8],require('react-redux'));class SharingSettingsModal extends React.Component{props:{navigator:Navigator;dispatch:()=>void;};render(){++cov_23s9nfmkbq.f[0];++cov_23s9nfmkbq.s[9];return<View style={styles.container}>
        <View style={styles.content}>
          <SharingSettingsCommon style={{marginTop:-50}}/>
          <FriendsUsingApp/>
          <F8Button style={styles.button}caption="OK!"onPress={()=>{++cov_23s9nfmkbq.f[1];++cov_23s9nfmkbq.s[10];return this.handleSetSharing(true);}}/>
          <F8Button type="secondary"caption="Not now"onPress={()=>{++cov_23s9nfmkbq.f[2];++cov_23s9nfmkbq.s[11];return this.handleSetSharing(false);}}/>
        </View>
      </View>;}handleSetSharing(enabled:boolean){++cov_23s9nfmkbq.f[3];++cov_23s9nfmkbq.s[12];this.props.dispatch(setSharingEnabled(enabled));++cov_23s9nfmkbq.s[13];this.props.navigator.pop();}}var styles=(++cov_23s9nfmkbq.s[14],StyleSheet.create({container:{flex:1,backgroundColor:'rgba(0, 0, 0, 0.2)',justifyContent:'center',padding:20},content:{backgroundColor:'white',borderRadius:3,alignItems:'center',overflow:'hidden'},button:{marginTop:20,marginBottom:10,marginHorizontal:20,alignSelf:'stretch'}}));++cov_23s9nfmkbq.s[15];module.exports=connect()(SharingSettingsModal);