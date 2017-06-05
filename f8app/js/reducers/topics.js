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
 */'use strict';var cov_mfubm2wsu=function(){var path='reducers/topics.js',hash='a926d0258bbb9a8068e44f75872465e7e99b5d7c',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'reducers/topics.js',statementMap:{'0':{start:{line:31,column:2},end:{line:40,column:3}},'1':{start:{line:32,column:20},end:{line:32,column:39}},'2':{start:{line:33,column:4},end:{line:38,column:7}},'3':{start:{line:34,column:17},end:{line:34,column:42}},'4':{start:{line:35,column:6},end:{line:37,column:9}},'5':{start:{line:36,column:8},end:{line:36,column:30}},'6':{start:{line:39,column:4},end:{line:39,column:41}},'7':{start:{line:41,column:2},end:{line:41,column:15}},'8':{start:{line:44,column:0},end:{line:44,column:24}}},fnMap:{'0':{name:'topics',decl:{start:{line:30,column:9},end:{line:30,column:15}},loc:{start:{line:30,column:58},end:{line:42,column:1}},line:30},'1':{name:'(anonymous_1)',decl:{start:{line:33,column:24},end:{line:33,column:25}},loc:{start:{line:33,column:37},end:{line:38,column:5}},line:33},'2':{name:'(anonymous_2)',decl:{start:{line:35,column:19},end:{line:35,column:20}},loc:{start:{line:35,column:28},end:{line:37,column:7}},line:35}},branchMap:{'0':{loc:{start:{line:30,column:16},end:{line:30,column:33}},type:'default-arg',locations:[{start:{line:30,column:31},end:{line:30,column:33}}],line:30},'1':{loc:{start:{line:31,column:2},end:{line:40,column:3}},type:'if',locations:[{start:{line:31,column:2},end:{line:40,column:3}},{start:{line:31,column:2},end:{line:40,column:3}}],line:31},'2':{loc:{start:{line:34,column:17},end:{line:34,column:42}},type:'binary-expr',locations:[{start:{line:34,column:17},end:{line:34,column:36}},{start:{line:34,column:40},end:{line:34,column:42}}],line:34}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0},f:{'0':0,'1':0,'2':0},b:{'0':[0],'1':[0,0],'2':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();type State=Array<string>;type Action={type:string;list:Array<any>;};function topics(state:State=(++cov_mfubm2wsu.b[0][0],[]),action:Action):State{++cov_mfubm2wsu.f[0];++cov_mfubm2wsu.s[0];if(action.type==='LOADED_SESSIONS'){++cov_mfubm2wsu.b[1][0];var topicsMap=(++cov_mfubm2wsu.s[1],Object.create(null));++cov_mfubm2wsu.s[2];action.list.forEach(session=>{++cov_mfubm2wsu.f[1];var tags=(++cov_mfubm2wsu.s[3],(++cov_mfubm2wsu.b[2][0],session.get('tags'))||(++cov_mfubm2wsu.b[2][1],[]));++cov_mfubm2wsu.s[4];tags.forEach(tag=>{++cov_mfubm2wsu.f[2];++cov_mfubm2wsu.s[5];topicsMap[tag]=true;});});++cov_mfubm2wsu.s[6];return Object.keys(topicsMap).sort();}else{++cov_mfubm2wsu.b[1][1];}++cov_mfubm2wsu.s[7];return state;}++cov_mfubm2wsu.s[8];module.exports=topics;