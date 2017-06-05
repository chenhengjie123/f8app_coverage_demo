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
 */'use strict';var cov_tef739hhz=function(){var path='tabs/schedule/ProfileButton.js',hash='5f37af4098320f64f3a88f056ee84e6f14ffe992',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/schedule/ProfileButton.js',statementMap:{'0':{start:{line:26,column:14},end:{line:26,column:30}},'1':{start:{line:30,column:4},end:{line:30,column:27}},'2':{start:{line:35,column:4},end:{line:40,column:6}},'3':{start:{line:44,column:13},end:{line:50,column:2}},'4':{start:{line:52,column:0},end:{line:52,column:31}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:34,column:2},end:{line:34,column:3}},loc:{start:{line:34,column:11},end:{line:41,column:3}},line:34}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0},f:{'0':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();const React=(++cov_tef739hhz.s[0],require('react'));const{Image,StyleSheet}=(++cov_tef739hhz.s[1],require('react-native'));class ProfileButton extends React.Component{render(){++cov_tef739hhz.f[0];++cov_tef739hhz.s[2];return<Image source={{uri:`http://graph.facebook.com/${this.props.user.id}/picture`}}style={styles.profilePic}/>;}}var styles=(++cov_tef739hhz.s[3],StyleSheet.create({profilePic:{width:30,height:30,borderRadius:15}}));++cov_tef739hhz.s[4];module.exports=ProfileButton;