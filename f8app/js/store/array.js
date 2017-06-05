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
 */'use strict';var cov_d4zay1tvt=function(){var path='store/array.js',hash='a17e1694629defd12f37a216b80f0f5680e28e8f',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'store/array.js',statementMap:{'0':{start:{line:25,column:0},end:{line:28,column:19}},'1':{start:{line:25,column:26},end:{line:28,column:18}},'2':{start:{line:25,column:34},end:{line:28,column:18}},'3':{start:{line:26,column:2},end:{line:28,column:18}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:25,column:17},end:{line:25,column:18}},loc:{start:{line:25,column:26},end:{line:28,column:18}},line:25},'1':{name:'(anonymous_1)',decl:{start:{line:25,column:26},end:{line:25,column:27}},loc:{start:{line:25,column:34},end:{line:28,column:18}},line:25},'2':{name:'(anonymous_2)',decl:{start:{line:25,column:34},end:{line:25,column:35}},loc:{start:{line:26,column:2},end:{line:28,column:18}},line:26}},branchMap:{'0':{loc:{start:{line:26,column:2},end:{line:28,column:18}},type:'cond-expr',locations:[{start:{line:27,column:6},end:{line:27,column:22}},{start:{line:28,column:6},end:{line:28,column:18}}],line:26}},s:{'0':0,'1':0,'2':0,'3':0},f:{'0':0,'1':0,'2':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();++cov_d4zay1tvt.s[0];module.exports=store=>{++cov_d4zay1tvt.f[0];++cov_d4zay1tvt.s[1];return next=>{++cov_d4zay1tvt.f[1];++cov_d4zay1tvt.s[2];return action=>{++cov_d4zay1tvt.f[2];++cov_d4zay1tvt.s[3];return Array.isArray(action)?(++cov_d4zay1tvt.b[0][0],action.map(next)):(++cov_d4zay1tvt.b[0][1],next(action));};};};