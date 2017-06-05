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
 */'use strict';var cov_25jfpi0ec6=function(){var path='tabs/info/Section.js',hash='b9adfab8ee5c0392acbe7537cae1fdbf469f1284',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/info/Section.js',statementMap:{'0':{start:{line:26,column:12},end:{line:26,column:28}},'1':{start:{line:27,column:17},end:{line:27,column:38}},'2':{start:{line:28,column:15},end:{line:28,column:32}},'3':{start:{line:29,column:11},end:{line:29,column:26}},'4':{start:{line:39,column:4},end:{line:48,column:6}},'5':{start:{line:52,column:13},end:{line:68,column:2}},'6':{start:{line:70,column:0},end:{line:70,column:25}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:38,column:2},end:{line:38,column:3}},loc:{start:{line:38,column:11},end:{line:49,column:3}},line:38}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0},f:{'0':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var React=(++cov_25jfpi0ec6.s[0],require('React'));var StyleSheet=(++cov_25jfpi0ec6.s[1],require('StyleSheet'));var{Text}=(++cov_25jfpi0ec6.s[2],require('F8Text'));var View=(++cov_25jfpi0ec6.s[3],require('View'));class Section extends React.Component{props:{title:string;children?:any;style?:any;};render(){++cov_25jfpi0ec6.f[0];++cov_25jfpi0ec6.s[4];return<View style={[styles.container,this.props.style]}>
        <View style={styles.header}>
          <Text style={styles.title}>
            {this.props.title}
          </Text>
        </View>
        {this.props.children}
      </View>;}}var styles=(++cov_25jfpi0ec6.s[5],StyleSheet.create({container:{paddingTop:60,paddingBottom:0,backgroundColor:'white'},header:{flexDirection:'row',alignItems:'center',justifyContent:'center',marginBottom:30},title:{fontSize:24,fontWeight:'bold'}}));++cov_25jfpi0ec6.s[6];module.exports=Section;