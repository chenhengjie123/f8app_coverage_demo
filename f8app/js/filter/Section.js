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
 */'use strict';var cov_1ksgnjdmvl=function(){var path='filter/Section.js',hash='1c984a7e04b128e88cf47fbab86df097782a6464',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'filter/Section.js',statementMap:{'0':{start:{line:27,column:12},end:{line:27,column:28}},'1':{start:{line:28,column:17},end:{line:28,column:38}},'2':{start:{line:29,column:15},end:{line:29,column:32}},'3':{start:{line:30,column:11},end:{line:30,column:26}},'4':{start:{line:34,column:28},end:{line:34,column:38}},'5':{start:{line:35,column:4},end:{line:37,column:5}},'6':{start:{line:36,column:6},end:{line:36,column:18}},'7':{start:{line:38,column:4},end:{line:45,column:6}},'8':{start:{line:49,column:13},end:{line:60,column:2}},'9':{start:{line:62,column:0},end:{line:62,column:25}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:33,column:2},end:{line:33,column:3}},loc:{start:{line:33,column:11},end:{line:46,column:3}},line:33}},branchMap:{'0':{loc:{start:{line:35,column:4},end:{line:37,column:5}},type:'if',locations:[{start:{line:35,column:4},end:{line:37,column:5}},{start:{line:35,column:4},end:{line:37,column:5}}],line:35}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},f:{'0':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var React=(++cov_1ksgnjdmvl.s[0],require('React'));var StyleSheet=(++cov_1ksgnjdmvl.s[1],require('StyleSheet'));var{Text}=(++cov_1ksgnjdmvl.s[2],require('F8Text'));var View=(++cov_1ksgnjdmvl.s[3],require('View'));class Section extends React.Component{render(){++cov_1ksgnjdmvl.f[0];var{children,title}=(++cov_1ksgnjdmvl.s[4],this.props);++cov_1ksgnjdmvl.s[5];if(React.Children.count(children)===0){++cov_1ksgnjdmvl.b[0][0];++cov_1ksgnjdmvl.s[6];return null;}else{++cov_1ksgnjdmvl.b[0][1];}++cov_1ksgnjdmvl.s[7];return<View style={styles.container}>
        <Text style={styles.title}>
          {title.toUpperCase()}
        </Text>
        {children}
      </View>;}}var styles=(++cov_1ksgnjdmvl.s[8],StyleSheet.create({container:{marginBottom:50},title:{fontSize:12,letterSpacing:1,color:'#A0B7FF',textAlign:'center',margin:10}}));++cov_1ksgnjdmvl.s[9];module.exports=Section;