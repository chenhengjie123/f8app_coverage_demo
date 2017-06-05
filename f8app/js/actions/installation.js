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
 */'use strict';var cov_rwc4o10f3=function(){var path='actions/installation.js',hash='e9eac40cad6e43bdf0c4717ebbe92b4144ebc9c2',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'actions/installation.js',statementMap:{'0':{start:{line:27,column:17},end:{line:27,column:36}},'1':{start:{line:28,column:14},end:{line:28,column:43}},'2':{start:{line:31,column:25},end:{line:31,column:57}},'3':{start:{line:32,column:2},end:{line:38,column:5}},'4':{start:{line:42,column:23},end:{line:42,column:50}},'5':{start:{line:43,column:2},end:{line:43,column:35}},'6':{start:{line:46,column:0},end:{line:46,column:61}}},fnMap:{'0':{name:'currentInstallation',decl:{start:{line:30,column:15},end:{line:30,column:34}},loc:{start:{line:30,column:66},end:{line:39,column:1}},line:30},'1':{name:'updateInstallation',decl:{start:{line:41,column:15},end:{line:41,column:33}},loc:{start:{line:41,column:71},end:{line:44,column:1}},line:41}},branchMap:{'0':{loc:{start:{line:37,column:19},end:{line:37,column:80}},type:'cond-expr',locations:[{start:{line:37,column:43},end:{line:37,column:60}},{start:{line:37,column:63},end:{line:37,column:80}}],line:37},'1':{loc:{start:{line:41,column:34},end:{line:41,column:54}},type:'default-arg',locations:[{start:{line:41,column:52},end:{line:41,column:54}}],line:41}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0,'1':0},b:{'0':[0,0],'1':[0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();const Platform=(++cov_rwc4o10f3.s[0],require('Platform'));const Parse=(++cov_rwc4o10f3.s[1],require('parse/react-native'));async function currentInstallation():Promise<Parse.Installation>{++cov_rwc4o10f3.f[0];const installationId=(++cov_rwc4o10f3.s[2],await Parse._getInstallationId());++cov_rwc4o10f3.s[3];return new Parse.Installation({installationId,appName:'F8',deviceType:Platform.OS,// TODO: Get this information from the app itself
appIdentifier:Platform.OS==='ios'?(++cov_rwc4o10f3.b[0][0],'com.facebook.f8'):(++cov_rwc4o10f3.b[0][1],'com.facebook.f8')});}async function updateInstallation(updates:Object=(++cov_rwc4o10f3.b[1][0],{})):Promise<void>{++cov_rwc4o10f3.f[1];const installation=(++cov_rwc4o10f3.s[4],await currentInstallation());++cov_rwc4o10f3.s[5];await installation.save(updates);}++cov_rwc4o10f3.s[6];module.exports={currentInstallation,updateInstallation};