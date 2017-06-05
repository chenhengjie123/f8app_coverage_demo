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
 */'use strict';var cov_2gyoy9of6q=function(){var path='reducers/index.js',hash='94683ab9014be8bfcee5f901e016a458eb34f4b1',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'reducers/index.js',statementMap:{'0':{start:{line:27,column:26},end:{line:27,column:42}},'1':{start:{line:29,column:0},end:{line:41,column:3}}},fnMap:{},branchMap:{},s:{'0':0,'1':0},f:{},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var{combineReducers}=(++cov_2gyoy9of6q.s[0],require('redux'));++cov_2gyoy9of6q.s[1];module.exports=combineReducers({config:require('./config'),notifications:require('./notifications'),maps:require('./maps'),sessions:require('./sessions'),user:require('./user'),schedule:require('./schedule'),topics:require('./topics'),filter:require('./filter'),navigation:require('./navigation'),friendsSchedules:require('./friendsSchedules'),surveys:require('./surveys')});