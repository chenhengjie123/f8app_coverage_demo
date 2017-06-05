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
 * @providesModule F8Colors
 * @flow
 */'use strict';var cov_286hws8kdk=function(){var path='common/F8Colors.js',hash='f629aa27c754c7bd62b2542e0c3024613b7f9b4d',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'common/F8Colors.js',statementMap:{'0':{start:{line:28,column:24},end:{line:37,column:1}},'1':{start:{line:40,column:2},end:{line:42,column:3}},'2':{start:{line:41,column:4},end:{line:41,column:19}},'3':{start:{line:44,column:14},end:{line:44,column:53}},'4':{start:{line:45,column:2},end:{line:48,column:3}},'5':{start:{line:46,column:4},end:{line:46,column:56}},'6':{start:{line:47,column:4},end:{line:47,column:20}},'7':{start:{line:49,column:2},end:{line:49,column:15}},'8':{start:{line:53,column:14},end:{line:53,column:51}},'9':{start:{line:54,column:2},end:{line:54,column:33}},'10':{start:{line:57,column:0},end:{line:66,column:2}}},fnMap:{'0':{name:'colorForLocation',decl:{start:{line:39,column:9},end:{line:39,column:25}},loc:{start:{line:39,column:53},end:{line:50,column:1}},line:39},'1':{name:'colorForTopic',decl:{start:{line:52,column:9},end:{line:52,column:22}},loc:{start:{line:52,column:61},end:{line:55,column:1}},line:52}},branchMap:{'0':{loc:{start:{line:40,column:2},end:{line:42,column:3}},type:'if',locations:[{start:{line:40,column:2},end:{line:42,column:3}},{start:{line:40,column:2},end:{line:42,column:3}}],line:40},'1':{loc:{start:{line:45,column:2},end:{line:48,column:3}},type:'if',locations:[{start:{line:45,column:2},end:{line:48,column:3}},{start:{line:45,column:2},end:{line:48,column:3}}],line:45}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0},f:{'0':0,'1':0},b:{'0':[0,0],'1':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();const LOCATION_COLORS=(++cov_286hws8kdk.s[0],{'HERBST':'#00E3AD','HERBST A':'#00E3AD','HERBST B':'#00E3AD','HACKER X':'#4D99EF','HACKER Y':'#CF72B1','COWELL':'#6A6AD5','COWELL C':'#6A6AD5','FOOD TENT':'#FFCD3B'});function colorForLocation(location:?string):string{++cov_286hws8kdk.f[0];++cov_286hws8kdk.s[1];if(!location){++cov_286hws8kdk.b[0][0];++cov_286hws8kdk.s[2];return'black';}else{++cov_286hws8kdk.b[0][1];}var color=(++cov_286hws8kdk.s[3],LOCATION_COLORS[location.toUpperCase()]);++cov_286hws8kdk.s[4];if(!color){++cov_286hws8kdk.b[1][0];++cov_286hws8kdk.s[5];console.warn(`Location '${location}' has no color`);++cov_286hws8kdk.s[6];color='black';}else{++cov_286hws8kdk.b[1][1];}++cov_286hws8kdk.s[7];return color;}function colorForTopic(count:number,index:number):string{++cov_286hws8kdk.f[1];const hue=(++cov_286hws8kdk.s[8],Math.round(360*index/(count+1)));++cov_286hws8kdk.s[9];return`hsl(${hue}, 74%, 65%)`;}++cov_286hws8kdk.s[10];module.exports={actionText:'#3FB4CF',inactiveText:'#9B9B9B',darkText:'#032250',lightText:'#7F91A7',cellBorder:'#EEEEEE',darkBackground:'#183E63',colorForLocation,colorForTopic};