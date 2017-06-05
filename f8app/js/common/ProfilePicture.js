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
 */'use strict';var cov_1radl9x4nn=function(){var path='common/ProfilePicture.js',hash='7d5ebb9f054a1bab75f5a236a876aa6aa2366365',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'common/ProfilePicture.js',statementMap:{'0':{start:{line:26,column:12},end:{line:26,column:28}},'1':{start:{line:27,column:12},end:{line:27,column:28}},'2':{start:{line:28,column:17},end:{line:28,column:38}},'3':{start:{line:37,column:27},end:{line:37,column:37}},'4':{start:{line:38,column:23},end:{line:38,column:46}},'5':{start:{line:39,column:16},end:{line:39,column:102}},'6':{start:{line:40,column:4},end:{line:49,column:6}},'7':{start:{line:53,column:0},end:{line:53,column:32}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:36,column:2},end:{line:36,column:3}},loc:{start:{line:36,column:11},end:{line:50,column:3}},line:36}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0},f:{'0':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var Image=(++cov_1radl9x4nn.s[0],require('Image'));var React=(++cov_1radl9x4nn.s[1],require('React'));var PixelRatio=(++cov_1radl9x4nn.s[2],require('PixelRatio'));class ProfilePicture extends React.Component{props:{userID:string;size:number;};render(){++cov_1radl9x4nn.f[0];const{userID,size}=(++cov_1radl9x4nn.s[3],this.props);const scaledSize=(++cov_1radl9x4nn.s[4],size*PixelRatio.get());const uri=(++cov_1radl9x4nn.s[5],`http://graph.facebook.com/${userID}/picture?width=${scaledSize}&height=${scaledSize}`);++cov_1radl9x4nn.s[6];return<Image source={{uri}}style={{width:size,height:size,borderRadius:size/2}}/>;}}++cov_1radl9x4nn.s[7];module.exports=ProfilePicture;