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
 */'use strict';var cov_2ibu9xz50v=function(){var path='tabs/schedule/formatTime.js',hash='d954ab559deea326ac65ff79c126ff06fbf6e0b9',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/schedule/formatTime.js',statementMap:{'0':{start:{line:27,column:13},end:{line:27,column:27}},'1':{start:{line:28,column:14},end:{line:28,column:32}},'2':{start:{line:29,column:16},end:{line:29,column:36}},'3':{start:{line:30,column:13},end:{line:30,column:38}},'4':{start:{line:31,column:2},end:{line:31,column:21}},'5':{start:{line:32,column:2},end:{line:32,column:29}},'6':{start:{line:33,column:2},end:{line:33,column:51}},'7':{start:{line:34,column:16},end:{line:34,column:37}},'8':{start:{line:36,column:2},end:{line:36,column:30}},'9':{start:{line:39,column:0},end:{line:39,column:28}}},fnMap:{'0':{name:'formatTime',decl:{start:{line:26,column:9},end:{line:26,column:19}},loc:{start:{line:26,column:42},end:{line:37,column:1}},line:26}},branchMap:{'0':{loc:{start:{line:30,column:13},end:{line:30,column:38}},type:'cond-expr',locations:[{start:{line:30,column:27},end:{line:30,column:31}},{start:{line:30,column:34},end:{line:30,column:38}}],line:30},'1':{loc:{start:{line:32,column:10},end:{line:32,column:28}},type:'cond-expr',locations:[{start:{line:32,column:18},end:{line:32,column:23}},{start:{line:32,column:26},end:{line:32,column:28}}],line:32},'2':{loc:{start:{line:33,column:12},end:{line:33,column:50}},type:'cond-expr',locations:[{start:{line:33,column:27},end:{line:33,column:40}},{start:{line:33,column:43},end:{line:33,column:50}}],line:33}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function formatTime(unix:number):string{++cov_2ibu9xz50v.f[0];var date=(++cov_2ibu9xz50v.s[0],new Date(unix));var hours=(++cov_2ibu9xz50v.s[1],date.getUTCHours());var minutes=(++cov_2ibu9xz50v.s[2],date.getUTCMinutes());var ampm=(++cov_2ibu9xz50v.s[3],hours>=12?(++cov_2ibu9xz50v.b[0][0],'PM'):(++cov_2ibu9xz50v.b[0][1],'AM'));++cov_2ibu9xz50v.s[4];hours=hours%12;++cov_2ibu9xz50v.s[5];hours=hours?(++cov_2ibu9xz50v.b[1][0],hours):(++cov_2ibu9xz50v.b[1][1],12);++cov_2ibu9xz50v.s[6];minutes=minutes<10?(++cov_2ibu9xz50v.b[2][0],'0'+minutes):(++cov_2ibu9xz50v.b[2][1],minutes);var strTime=(++cov_2ibu9xz50v.s[7],hours+':'+minutes);++cov_2ibu9xz50v.s[8];return strTime+' '+ampm;}++cov_2ibu9xz50v.s[9];module.exports=formatTime;