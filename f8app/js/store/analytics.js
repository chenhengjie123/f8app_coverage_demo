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
 */'use strict';var cov_11o8zpo9hh=function(){var path='store/analytics.js',hash='ca3e38a4d99c5644815d5c14cef4ca25a2f01f71',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'store/analytics.js',statementMap:{'0':{start:{line:25,column:14},end:{line:25,column:32}},'1':{start:{line:27,column:0},end:{line:30,column:2}},'2':{start:{line:27,column:26},end:{line:30,column:1}},'3':{start:{line:27,column:34},end:{line:30,column:1}},'4':{start:{line:28,column:2},end:{line:28,column:16}},'5':{start:{line:29,column:2},end:{line:29,column:22}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:27,column:17},end:{line:27,column:18}},loc:{start:{line:27,column:26},end:{line:30,column:1}},line:27},'1':{name:'(anonymous_1)',decl:{start:{line:27,column:26},end:{line:27,column:27}},loc:{start:{line:27,column:34},end:{line:30,column:1}},line:27},'2':{name:'(anonymous_2)',decl:{start:{line:27,column:34},end:{line:27,column:35}},loc:{start:{line:27,column:44},end:{line:30,column:1}},line:27}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},f:{'0':0,'1':0,'2':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();const track=(++cov_11o8zpo9hh.s[0],require('./track'));++cov_11o8zpo9hh.s[1];module.exports=store=>{++cov_11o8zpo9hh.f[0];++cov_11o8zpo9hh.s[2];return next=>{++cov_11o8zpo9hh.f[1];++cov_11o8zpo9hh.s[3];return action=>{++cov_11o8zpo9hh.f[2];++cov_11o8zpo9hh.s[4];track(action);++cov_11o8zpo9hh.s[5];return next(action);};};};