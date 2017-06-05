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
 */'use strict';var cov_1b2u282t9g=function(){var path='common/Carousel.js',hash='775b980326035ad60dbb724b0d891e7f99ac4936',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'common/Carousel.js',statementMap:{'0':{start:{line:26,column:14},end:{line:26,column:30}},'1':{start:{line:27,column:18},end:{line:27,column:40}},'2':{start:{line:28,column:19},end:{line:28,column:42}},'3':{start:{line:42,column:16},end:{line:42,column:18}},'4':{start:{line:43,column:47},end:{line:43,column:57}},'5':{start:{line:45,column:4},end:{line:51,column:5}},'6':{start:{line:46,column:20},end:{line:46,column:24}},'7':{start:{line:47,column:6},end:{line:49,column:7}},'8':{start:{line:48,column:8},end:{line:48,column:32}},'9':{start:{line:50,column:6},end:{line:50,column:26}},'10':{start:{line:52,column:4},end:{line:56,column:6}},'11':{start:{line:60,column:13},end:{line:68,column:2}},'12':{start:{line:70,column:0},end:{line:70,column:26}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:41,column:2},end:{line:41,column:3}},loc:{start:{line:41,column:11},end:{line:57,column:3}},line:41}},branchMap:{'0':{loc:{start:{line:47,column:6},end:{line:49,column:7}},type:'if',locations:[{start:{line:47,column:6},end:{line:49,column:7}},{start:{line:47,column:6},end:{line:49,column:7}}],line:47}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0},f:{'0':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();const React=(++cov_1b2u282t9g.s[0],require('react'));const ViewPager=(++cov_1b2u282t9g.s[1],require('./ViewPager'));const StyleSheet=(++cov_1b2u282t9g.s[2],require('F8StyleSheet'));type Props={count:number;selectedIndex:number;onSelectedIndexChange?:(index:number)=>void;renderCard:(index:number)=>ReactElement;style?:any;};class Carousel extends React.Component{props:Props;render(){++cov_1b2u282t9g.f[0];let cards=(++cov_1b2u282t9g.s[3],[]);const{count,selectedIndex,renderCard}=(++cov_1b2u282t9g.s[4],this.props);++cov_1b2u282t9g.s[5];for(let i=0;i<count;i++){let content=(++cov_1b2u282t9g.s[6],null);++cov_1b2u282t9g.s[7];if(Math.abs(i-selectedIndex)<2){++cov_1b2u282t9g.b[0][0];++cov_1b2u282t9g.s[8];content=renderCard(i);}else{++cov_1b2u282t9g.b[0][1];}++cov_1b2u282t9g.s[9];cards.push(content);}++cov_1b2u282t9g.s[10];return<ViewPager style={styles.carousel}{...this.props}bounces={true}>
        {cards}
      </ViewPager>;}}var styles=(++cov_1b2u282t9g.s[11],StyleSheet.create({carousel:{ios:{margin:10,overflow:'visible',backgroundColor:'black'}}}));++cov_1b2u282t9g.s[12];module.exports=Carousel;