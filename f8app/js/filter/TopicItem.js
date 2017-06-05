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
 */'use strict';var cov_epp47djxr=function(){var path='filter/TopicItem.js',hash='b35ec392bc30ae97c72de77186bed85b46e5a78e',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'filter/TopicItem.js',statementMap:{'0':{start:{line:27,column:12},end:{line:27,column:28}},'1':{start:{line:32,column:4},end:{line:32,column:27}},'2':{start:{line:33,column:15},end:{line:33,column:32}},'3':{start:{line:44,column:48},end:{line:44,column:58}},'4':{start:{line:45,column:18},end:{line:47,column:44}},'5':{start:{line:48,column:32},end:{line:48,column:42}},'6':{start:{line:49,column:4},end:{line:51,column:5}},'7':{start:{line:50,column:6},end:{line:50,column:43}},'8':{start:{line:52,column:4},end:{line:63,column:6}},'9':{start:{line:67,column:13},end:{line:67,column:15}},'10':{start:{line:69,column:13},end:{line:87,column:2}},'11':{start:{line:89,column:0},end:{line:89,column:27}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:43,column:2},end:{line:43,column:3}},loc:{start:{line:43,column:11},end:{line:64,column:3}},line:43}},branchMap:{'0':{loc:{start:{line:45,column:18},end:{line:47,column:44}},type:'cond-expr',locations:[{start:{line:46,column:8},end:{line:46,column:32}},{start:{line:47,column:8},end:{line:47,column:44}}],line:45},'1':{loc:{start:{line:49,column:4},end:{line:51,column:5}},type:'if',locations:[{start:{line:49,column:4},end:{line:51,column:5}},{start:{line:49,column:4},end:{line:51,column:5}}],line:49}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var React=(++cov_epp47djxr.s[0],require('react'));var{StyleSheet,View,TouchableOpacity}=(++cov_epp47djxr.s[1],require('react-native'));var{Text}=(++cov_epp47djxr.s[2],require('F8Text'));class TopicItem extends React.Component{props:{topic:string;color:string;isChecked:boolean;onToggle:(value:boolean)=>void;};render(){++cov_epp47djxr.f[0];const{topic,color,isChecked,onToggle}=(++cov_epp47djxr.s[3],this.props);const style=(++cov_epp47djxr.s[4],isChecked?(++cov_epp47djxr.b[0][0],{backgroundColor:color}):(++cov_epp47djxr.b[0][1],{borderColor:color,borderWidth:1}));const accessibilityTraits=(++cov_epp47djxr.s[5],['button']);++cov_epp47djxr.s[6];if(isChecked){++cov_epp47djxr.b[1][0];++cov_epp47djxr.s[7];accessibilityTraits.push('selected');}else{++cov_epp47djxr.b[1][1];}++cov_epp47djxr.s[8];return<TouchableOpacity accessibilityTraits={accessibilityTraits}activeOpacity={0.8}style={styles.container}onPress={onToggle}>
        <View style={[styles.checkbox,style]}/>
        <Text style={styles.title}>
          {topic}
        </Text>
      </TouchableOpacity>;}}const SIZE=(++cov_epp47djxr.s[9],24);var styles=(++cov_epp47djxr.s[10],StyleSheet.create({container:{paddingVertical:12,flexDirection:'row',alignItems:'center',justifyContent:'space-between'},checkbox:{width:SIZE,height:SIZE,borderRadius:SIZE/2,marginRight:10},title:{fontSize:17,color:'white',flex:1}}));++cov_epp47djxr.s[11];module.exports=TopicItem;