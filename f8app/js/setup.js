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
 */'use strict';var cov_qohy1j3yo=function(){var path='setup.js',hash='a55fb96b967a3e2ccd8053210e77a1ab0d3b6fd4',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'setup.js',statementMap:{'0':{start:{line:27,column:12},end:{line:27,column:28}},'1':{start:{line:28,column:18},end:{line:28,column:40}},'2':{start:{line:29,column:12},end:{line:29,column:41}},'3':{start:{line:30,column:12},end:{line:30,column:28}},'4':{start:{line:31,column:12},end:{line:31,column:34}},'5':{start:{line:33,column:19},end:{line:33,column:41}},'6':{start:{line:34,column:21},end:{line:34,column:54}},'7':{start:{line:36,column:18},end:{line:36,column:34}},'8':{start:{line:39,column:2},end:{line:39,column:34}},'9':{start:{line:40,column:2},end:{line:40,column:38}},'10':{start:{line:41,column:2},end:{line:41,column:41}},'11':{start:{line:43,column:2},end:{line:43,column:21}},'12':{start:{line:44,column:2},end:{line:44,column:29}},'13':{start:{line:45,column:2},end:{line:50,column:4}},'14':{start:{line:59,column:6},end:{line:59,column:14}},'15':{start:{line:60,column:6},end:{line:63,column:8}},'16':{start:{line:62,column:36},end:{line:62,column:69}},'17':{start:{line:66,column:6},end:{line:68,column:7}},'18':{start:{line:67,column:8},end:{line:67,column:20}},'19':{start:{line:69,column:6},end:{line:73,column:8}},'20':{start:{line:77,column:2},end:{line:77,column:14}},'21':{start:{line:80,column:0},end:{line:85,column:2}},'22':{start:{line:81,column:2},end:{line:81,column:51}},'23':{start:{line:82,column:2},end:{line:82,column:23}},'24':{start:{line:83,column:2},end:{line:83,column:51}},'25':{start:{line:84,column:2},end:{line:84,column:31}},'26':{start:{line:88,column:0},end:{line:99,column:9}},'27':{start:{line:89,column:2},end:{line:98,column:4}},'28':{start:{line:97,column:4},end:{line:97,column:27}},'29':{start:{line:101,column:0},end:{line:101,column:23}}},fnMap:{'0':{name:'setup',decl:{start:{line:38,column:9},end:{line:38,column:14}},loc:{start:{line:38,column:33},end:{line:78,column:1}},line:38},'1':{name:'(anonymous_1)',decl:{start:{line:58,column:4},end:{line:58,column:5}},loc:{start:{line:58,column:18},end:{line:64,column:5}},line:58},'2':{name:'(anonymous_2)',decl:{start:{line:62,column:30},end:{line:62,column:31}},loc:{start:{line:62,column:36},end:{line:62,column:69}},line:62},'3':{name:'(anonymous_3)',decl:{start:{line:65,column:4},end:{line:65,column:5}},loc:{start:{line:65,column:13},end:{line:74,column:5}},line:65},'4':{name:'(anonymous_4)',decl:{start:{line:80,column:13},end:{line:80,column:14}},loc:{start:{line:80,column:26},end:{line:85,column:1}},line:80},'5':{name:'(anonymous_5)',decl:{start:{line:88,column:12},end:{line:88,column:13}},loc:{start:{line:88,column:23},end:{line:99,column:1}},line:88},'6':{name:'(anonymous_6)',decl:{start:{line:96,column:8},end:{line:96,column:9}},loc:{start:{line:96,column:19},end:{line:98,column:3}},line:96}},branchMap:{'0':{loc:{start:{line:66,column:6},end:{line:68,column:7}},type:'if',locations:[{start:{line:66,column:6},end:{line:68,column:7}},{start:{line:66,column:6},end:{line:68,column:7}}],line:66}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0,'21':0,'22':0,'23':0,'24':0,'25':0,'26':0,'27':0,'28':0,'29':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var F8App=(++cov_qohy1j3yo.s[0],require('F8App'));var FacebookSDK=(++cov_qohy1j3yo.s[1],require('FacebookSDK'));var Parse=(++cov_qohy1j3yo.s[2],require('parse/react-native'));var React=(++cov_qohy1j3yo.s[3],require('React'));var Relay=(++cov_qohy1j3yo.s[4],require('react-relay'));var{Provider}=(++cov_qohy1j3yo.s[5],require('react-redux'));var configureStore=(++cov_qohy1j3yo.s[6],require('./store/configureStore'));var{serverURL}=(++cov_qohy1j3yo.s[7],require('./env'));function setup():ReactClass<{}>{++cov_qohy1j3yo.f[0];++cov_qohy1j3yo.s[8];console.disableYellowBox=true;++cov_qohy1j3yo.s[9];Parse.initialize('oss-f8-app-2016');++cov_qohy1j3yo.s[10];Parse.serverURL=`${serverURL}/parse`;++cov_qohy1j3yo.s[11];FacebookSDK.init();++cov_qohy1j3yo.s[12];Parse.FacebookUtils.init();++cov_qohy1j3yo.s[13];Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer(`${serverURL}/graphql`,{fetchTimeout:30000,retryDelays:[5000,10000]}));class Root extends React.Component{state:{isLoading:boolean;store:any;};constructor(){++cov_qohy1j3yo.f[1];++cov_qohy1j3yo.s[14];super();++cov_qohy1j3yo.s[15];this.state={isLoading:true,store:configureStore(()=>{++cov_qohy1j3yo.f[2];++cov_qohy1j3yo.s[16];return this.setState({isLoading:false});})};}render(){++cov_qohy1j3yo.f[3];++cov_qohy1j3yo.s[17];if(this.state.isLoading){++cov_qohy1j3yo.b[0][0];++cov_qohy1j3yo.s[18];return null;}else{++cov_qohy1j3yo.b[0][1];}++cov_qohy1j3yo.s[19];return<Provider store={this.state.store}>
          <F8App/>
        </Provider>;}}++cov_qohy1j3yo.s[20];return Root;}++cov_qohy1j3yo.s[21];global.LOG=(...args)=>{++cov_qohy1j3yo.f[4];++cov_qohy1j3yo.s[22];console.log('/------------------------------\\');++cov_qohy1j3yo.s[23];console.log(...args);++cov_qohy1j3yo.s[24];console.log('\\------------------------------/');++cov_qohy1j3yo.s[25];return args[args.length-1];};// post window.__coverage__ to server every 2 seconds
++cov_qohy1j3yo.s[26];setInterval(function(){++cov_qohy1j3yo.f[5];++cov_qohy1j3yo.s[27];fetch('http://localhost:8889/coverage/client',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(window.__coverage__)}).then(function(){++cov_qohy1j3yo.f[6];++cov_qohy1j3yo.s[28];console.log("success!");});},2000);++cov_qohy1j3yo.s[29];module.exports=setup;