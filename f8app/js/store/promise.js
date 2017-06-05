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
 */'use strict';var cov_2evgkwghoh=function(){var path='store/promise.js',hash='123443e777340b6562f6044f39858acc473e1b2c',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'store/promise.js',statementMap:{'0':{start:{line:26,column:2},end:{line:26,column:39}},'1':{start:{line:27,column:2},end:{line:27,column:14}},'2':{start:{line:30,column:0},end:{line:33,column:19}},'3':{start:{line:30,column:26},end:{line:33,column:18}},'4':{start:{line:30,column:34},end:{line:33,column:18}},'5':{start:{line:31,column:2},end:{line:33,column:18}}},fnMap:{'0':{name:'warn',decl:{start:{line:25,column:9},end:{line:25,column:13}},loc:{start:{line:25,column:21},end:{line:28,column:1}},line:25},'1':{name:'(anonymous_1)',decl:{start:{line:30,column:17},end:{line:30,column:18}},loc:{start:{line:30,column:26},end:{line:33,column:18}},line:30},'2':{name:'(anonymous_2)',decl:{start:{line:30,column:26},end:{line:30,column:27}},loc:{start:{line:30,column:34},end:{line:33,column:18}},line:30},'3':{name:'(anonymous_3)',decl:{start:{line:30,column:34},end:{line:30,column:35}},loc:{start:{line:31,column:2},end:{line:33,column:18}},line:31}},branchMap:{'0':{loc:{start:{line:26,column:15},end:{line:26,column:37}},type:'binary-expr',locations:[{start:{line:26,column:15},end:{line:26,column:28}},{start:{line:26,column:32},end:{line:26,column:37}}],line:26},'1':{loc:{start:{line:31,column:2},end:{line:33,column:18}},type:'cond-expr',locations:[{start:{line:32,column:6},end:{line:32,column:46}},{start:{line:33,column:6},end:{line:33,column:18}}],line:31}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0,'1':0,'2':0,'3':0},b:{'0':[0,0],'1':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();function warn(error){++cov_2evgkwghoh.f[0];++cov_2evgkwghoh.s[0];console.warn((++cov_2evgkwghoh.b[0][0],error.message)||(++cov_2evgkwghoh.b[0][1],error));++cov_2evgkwghoh.s[1];throw error;// To let the caller handle the rejection
}++cov_2evgkwghoh.s[2];module.exports=store=>{++cov_2evgkwghoh.f[1];++cov_2evgkwghoh.s[3];return next=>{++cov_2evgkwghoh.f[2];++cov_2evgkwghoh.s[4];return action=>{++cov_2evgkwghoh.f[3];++cov_2evgkwghoh.s[5];return typeof action.then==='function'?(++cov_2evgkwghoh.b[1][0],Promise.resolve(action).then(next,warn)):(++cov_2evgkwghoh.b[1][1],next(action));};};};