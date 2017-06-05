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
 */'use strict';var cov_1xenncs0yd=function(){var path='tabs/MenuItem.js',hash='29db1e0e72217facb5bb41248421373cea37266d',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/MenuItem.js',statementMap:{'0':{start:{line:27,column:15},end:{line:27,column:34}},'1':{start:{line:28,column:12},end:{line:28,column:28}},'2':{start:{line:29,column:11},end:{line:29,column:26}},'3':{start:{line:30,column:15},end:{line:30,column:32}},'4':{start:{line:31,column:18},end:{line:31,column:40}},'5':{start:{line:32,column:12},end:{line:32,column:28}},'6':{start:{line:33,column:17},end:{line:33,column:38}},'7':{start:{line:47,column:15},end:{line:47,column:78}},'8':{start:{line:48,column:29},end:{line:48,column:72}},'9':{start:{line:50,column:4},end:{line:58,column:5}},'10':{start:{line:51,column:6},end:{line:57,column:8}},'11':{start:{line:59,column:4},end:{line:69,column:6}},'12':{start:{line:73,column:13},end:{line:101,column:2}},'13':{start:{line:103,column:0},end:{line:103,column:26}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:46,column:2},end:{line:46,column:3}},loc:{start:{line:46,column:11},end:{line:70,column:3}},line:46}},branchMap:{'0':{loc:{start:{line:47,column:15},end:{line:47,column:78}},type:'cond-expr',locations:[{start:{line:47,column:37},end:{line:47,column:60}},{start:{line:47,column:63},end:{line:47,column:78}}],line:47},'1':{loc:{start:{line:48,column:29},end:{line:48,column:72}},type:'binary-expr',locations:[{start:{line:48,column:29},end:{line:48,column:48}},{start:{line:48,column:52},end:{line:48,column:72}}],line:48},'2':{loc:{start:{line:50,column:4},end:{line:58,column:5}},type:'if',locations:[{start:{line:50,column:4},end:{line:58,column:5}},{start:{line:50,column:4},end:{line:58,column:5}}],line:50}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0},f:{'0':0},b:{'0':[0,0],'1':[0,0],'2':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var F8Colors=(++cov_1xenncs0yd.s[0],require('F8Colors'));var React=(++cov_1xenncs0yd.s[1],require('React'));var View=(++cov_1xenncs0yd.s[2],require('View'));var{Text}=(++cov_1xenncs0yd.s[3],require('F8Text'));var F8Touchable=(++cov_1xenncs0yd.s[4],require('F8Touchable'));var Image=(++cov_1xenncs0yd.s[5],require('Image'));var StyleSheet=(++cov_1xenncs0yd.s[6],require('StyleSheet'));class MenuItem extends React.Component{props:{icon:number;selectedIcon:number;selected:boolean;title:string;badge:?string;onPress:()=>void;};render(){++cov_1xenncs0yd.f[0];var icon=(++cov_1xenncs0yd.s[7],this.props.selected?(++cov_1xenncs0yd.b[0][0],this.props.selectedIcon):(++cov_1xenncs0yd.b[0][1],this.props.icon));var selectedTitleStyle=(++cov_1xenncs0yd.s[8],(++cov_1xenncs0yd.b[1][0],this.props.selected)&&(++cov_1xenncs0yd.b[1][1],styles.selectedTitle));var badge;++cov_1xenncs0yd.s[9];if(this.props.badge){++cov_1xenncs0yd.b[2][0];++cov_1xenncs0yd.s[10];badge=<View style={styles.badge}>
          <Text style={styles.badgeText}>
            {this.props.badge}
          </Text>
        </View>;}else{++cov_1xenncs0yd.b[2][1];}++cov_1xenncs0yd.s[11];return<F8Touchable onPress={this.props.onPress}>
        <View style={styles.container}>
          <Image style={styles.icon}source={icon}/>
          <Text style={[styles.title,selectedTitleStyle]}>
            {this.props.title}
          </Text>
          {badge}
        </View>
      </F8Touchable>;}}var styles=(++cov_1xenncs0yd.s[12],StyleSheet.create({container:{flexDirection:'row',height:50,alignItems:'center',paddingHorizontal:20},icon:{marginRight:20},title:{flex:1,fontSize:17,color:F8Colors.lightText},selectedTitle:{color:F8Colors.darkText},badge:{backgroundColor:'#DC3883',paddingHorizontal:10,paddingVertical:2,borderRadius:10},badgeText:{fontSize:12,color:'white'}}));++cov_1xenncs0yd.s[13];module.exports=MenuItem;