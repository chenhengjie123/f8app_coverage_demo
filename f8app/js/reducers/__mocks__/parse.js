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
 */'use strict';var cov_abyx3k7l7=function(){var path='reducers/__mocks__/parse.js',hash='3a0d2dc991056794c1b58490190f1c8c33269f85',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'reducers/__mocks__/parse.js',statementMap:{'0':{start:{line:33,column:4},end:{line:33,column:26}},'1':{start:{line:34,column:4},end:{line:34,column:63}},'2':{start:{line:35,column:4},end:{line:35,column:32}},'3':{start:{line:39,column:4},end:{line:39,column:30}},'4':{start:{line:47,column:4},end:{line:47,column:20}},'5':{start:{line:51,column:4},end:{line:51,column:21}},'6':{start:{line:55,column:0},end:{line:58,column:2}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:32,column:2},end:{line:32,column:3}},loc:{start:{line:32,column:30},end:{line:36,column:3}},line:32},'1':{name:'(anonymous_1)',decl:{start:{line:38,column:2},end:{line:38,column:3}},loc:{start:{line:38,column:25},end:{line:40,column:3}},line:38},'2':{name:'(anonymous_2)',decl:{start:{line:46,column:2},end:{line:46,column:3}},loc:{start:{line:46,column:27},end:{line:48,column:3}},line:46},'3':{name:'(anonymous_3)',decl:{start:{line:50,column:2},end:{line:50,column:3}},loc:{start:{line:50,column:16},end:{line:52,column:3}},line:50}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0,'1':0,'2':0,'3':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();class ParseObjectMock{id:string;createdAt:Date;_fields:Object;constructor(fields:Object){++cov_abyx3k7l7.f[0];++cov_abyx3k7l7.s[0];this._fields=fields;++cov_abyx3k7l7.s[1];this.id=Math.ceil(Math.random()*0xFFFFFF).toString(16);++cov_abyx3k7l7.s[2];this.createdAt=new Date();}get(name:string):any{++cov_abyx3k7l7.f[1];++cov_abyx3k7l7.s[3];return this._fields[name];}}class ParseFileMock{_url:string;constructor(url:string){++cov_abyx3k7l7.f[2];++cov_abyx3k7l7.s[4];this._url=url;}url():string{++cov_abyx3k7l7.f[3];++cov_abyx3k7l7.s[5];return this._url;}}++cov_abyx3k7l7.s[6];module.exports={Object:ParseObjectMock,File:ParseFileMock};