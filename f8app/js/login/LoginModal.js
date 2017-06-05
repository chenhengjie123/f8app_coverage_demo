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
 */'use strict';var cov_2a8b27lonz=function(){var path='login/LoginModal.js',hash='50a82e0e5c3408d0e69f622debac8377ff137f12',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'login/LoginModal.js',statementMap:{'0':{start:{line:26,column:18},end:{line:26,column:50}},'1':{start:{line:27,column:15},end:{line:27,column:34}},'2':{start:{line:28,column:12},end:{line:28,column:28}},'3':{start:{line:29,column:12},end:{line:29,column:28}},'4':{start:{line:30,column:17},end:{line:30,column:38}},'5':{start:{line:31,column:15},end:{line:31,column:32}},'6':{start:{line:32,column:11},end:{line:32,column:26}},'7':{start:{line:33,column:15},end:{line:33,column:34}},'8':{start:{line:34,column:16},end:{line:34,column:36}},'9':{start:{line:43,column:4},end:{line:63,column:6}},'10':{start:{line:54,column:41},end:{line:54,column:56}},'11':{start:{line:59,column:27},end:{line:59,column:53}},'12':{start:{line:67,column:4},end:{line:67,column:31}},'13':{start:{line:68,column:4},end:{line:68,column:25}},'14':{start:{line:72,column:13},end:{line:109,column:2}},'15':{start:{line:111,column:0},end:{line:111,column:28}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:42,column:2},end:{line:42,column:3}},loc:{start:{line:42,column:11},end:{line:64,column:3}},line:42},'1':{name:'(anonymous_1)',decl:{start:{line:54,column:35},end:{line:54,column:36}},loc:{start:{line:54,column:41},end:{line:54,column:56}},line:54},'2':{name:'(anonymous_2)',decl:{start:{line:59,column:21},end:{line:59,column:22}},loc:{start:{line:59,column:27},end:{line:59,column:53}},line:59},'3':{name:'(anonymous_3)',decl:{start:{line:66,column:2},end:{line:66,column:3}},loc:{start:{line:66,column:13},end:{line:69,column:3}},line:66}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0},f:{'0':0,'1':0,'2':0,'3':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var LoginButton=(++cov_2a8b27lonz.s[0],require('../common/LoginButton'));var F8Colors=(++cov_2a8b27lonz.s[1],require('F8Colors'));var Image=(++cov_2a8b27lonz.s[2],require('Image'));var React=(++cov_2a8b27lonz.s[3],require('React'));var StyleSheet=(++cov_2a8b27lonz.s[4],require('StyleSheet'));var{Text}=(++cov_2a8b27lonz.s[5],require('F8Text'));var View=(++cov_2a8b27lonz.s[6],require('View'));var F8Button=(++cov_2a8b27lonz.s[7],require('F8Button'));var Navigator=(++cov_2a8b27lonz.s[8],require('Navigator'));class LoginModal extends React.Component{props:{navigator:Navigator;onLogin:()=>void;};render(){++cov_2a8b27lonz.f[0];++cov_2a8b27lonz.s[9];return<View style={styles.container}>
        <Image style={styles.content}source={require('./img/login-background.png')}>
          <Text style={styles.h1}>
            Log in with Facebook
          </Text>
          <Text style={styles.h2}>
            to save sessions to{'\n'}your schedule.
          </Text>
          <LoginButton onLoggedIn={()=>{++cov_2a8b27lonz.f[1];++cov_2a8b27lonz.s[10];return this.loggedIn();}}/>
          <F8Button type="secondary"caption="Not Now"source="Modal"onPress={()=>{++cov_2a8b27lonz.f[2];++cov_2a8b27lonz.s[11];return this.props.navigator.pop();}}/>
        </Image>
      </View>;}loggedIn(){++cov_2a8b27lonz.f[3];++cov_2a8b27lonz.s[12];this.props.navigator.pop();++cov_2a8b27lonz.s[13];this.props.onLogin();}}var styles=(++cov_2a8b27lonz.s[14],StyleSheet.create({container:{flex:1,backgroundColor:'rgba(0, 0, 0, 0.2)',justifyContent:'center',padding:20},content:{padding:30,backgroundColor:'transparent',borderRadius:3,alignItems:'center',// Image's source contains explicit size, but we want
// it to prefer flex: 1
width:undefined,height:undefined},h1:{fontSize:22,fontWeight:'bold',color:F8Colors.darkText,textAlign:'center',marginTop:130},h2:{fontSize:18,lineHeight:22,color:F8Colors.darkText,textAlign:'center',marginBottom:120},notNowButton:{padding:20},notNowLabel:{color:F8Colors.lightText}}));++cov_2a8b27lonz.s[15];module.exports=LoginModal;