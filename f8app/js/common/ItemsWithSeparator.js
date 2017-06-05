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
 */'use strict';var cov_2maqg97dkq=function(){var path='common/ItemsWithSeparator.js',hash='c30c9fffbe8a1b2539a03c3ba797caed7df17ffa',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'common/ItemsWithSeparator.js',statementMap:{'0':{start:{line:26,column:17},end:{line:26,column:38}},'1':{start:{line:27,column:12},end:{line:27,column:28}},'2':{start:{line:28,column:17},end:{line:28,column:38}},'3':{start:{line:29,column:11},end:{line:29,column:26}},'4':{start:{line:39,column:19},end:{line:39,column:21}},'5':{start:{line:40,column:17},end:{line:40,column:58}},'6':{start:{line:41,column:4},end:{line:54,column:6}},'7':{start:{line:44,column:8},end:{line:44,column:29}},'8':{start:{line:45,column:8},end:{line:52,column:9}},'9':{start:{line:46,column:10},end:{line:51,column:12}},'10':{start:{line:55,column:4},end:{line:59,column:6}},'11':{start:{line:63,column:13},end:{line:68,column:2}},'12':{start:{line:70,column:0},end:{line:70,column:36}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:38,column:2},end:{line:38,column:3}},loc:{start:{line:38,column:11},end:{line:60,column:3}},line:38},'1':{name:'(anonymous_1)',decl:{start:{line:43,column:6},end:{line:43,column:7}},loc:{start:{line:43,column:21},end:{line:53,column:7}},line:43}},branchMap:{'0':{loc:{start:{line:45,column:8},end:{line:52,column:9}},type:'if',locations:[{start:{line:45,column:8},end:{line:52,column:9}},{start:{line:45,column:8},end:{line:52,column:9}}],line:45}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0},f:{'0':0,'1':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var PixelRatio=(++cov_2maqg97dkq.s[0],require('PixelRatio'));var React=(++cov_2maqg97dkq.s[1],require('React'));var StyleSheet=(++cov_2maqg97dkq.s[2],require('StyleSheet'));var View=(++cov_2maqg97dkq.s[3],require('View'));class ItemsWithSeparator extends React.Component{props:{style?:any;separatorStyle?:any;children?:any;};render(){++cov_2maqg97dkq.f[0];var children=(++cov_2maqg97dkq.s[4],[]);var length=(++cov_2maqg97dkq.s[5],React.Children.count(this.props.children));++cov_2maqg97dkq.s[6];React.Children.forEach(this.props.children,(child,ii)=>{++cov_2maqg97dkq.f[1];++cov_2maqg97dkq.s[7];children.push(child);++cov_2maqg97dkq.s[8];if(ii!==length-1){++cov_2maqg97dkq.b[0][0];++cov_2maqg97dkq.s[9];children.push(<View key={'separator-'+ii}style={[styles.separator,this.props.separatorStyle]}/>);}else{++cov_2maqg97dkq.b[0][1];}});++cov_2maqg97dkq.s[10];return<View style={this.props.style}>
        {children}
      </View>;}}var styles=(++cov_2maqg97dkq.s[11],StyleSheet.create({separator:{backgroundColor:'#0322500A',height:1/PixelRatio.get()}}));++cov_2maqg97dkq.s[12];module.exports=ItemsWithSeparator;