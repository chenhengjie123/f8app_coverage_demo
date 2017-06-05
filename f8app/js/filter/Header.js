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
 */'use strict';var cov_2kjvm3vc58=function(){var path='filter/Header.js',hash='f4878afd28f172cad486c8d8b755b1ed5d3d6889',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'filter/Header.js',statementMap:{'0':{start:{line:27,column:12},end:{line:27,column:28}},'1':{start:{line:28,column:17},end:{line:28,column:38}},'2':{start:{line:29,column:15},end:{line:29,column:32}},'3':{start:{line:30,column:25},end:{line:30,column:52}},'4':{start:{line:31,column:13},end:{line:31,column:28}},'5':{start:{line:35,column:4},end:{line:49,column:6}},'6':{start:{line:53,column:4},end:{line:55,column:5}},'7':{start:{line:54,column:6},end:{line:54,column:18}},'8':{start:{line:57,column:4},end:{line:63,column:6}},'9':{start:{line:67,column:24},end:{line:67,column:26}},'10':{start:{line:68,column:20},end:{line:68,column:56}},'11':{start:{line:70,column:13},end:{line:103,column:2}},'12':{start:{line:106,column:0},end:{line:106,column:24}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:34,column:2},end:{line:34,column:3}},loc:{start:{line:34,column:11},end:{line:50,column:3}},line:34},'1':{name:'(anonymous_1)',decl:{start:{line:52,column:2},end:{line:52,column:3}},loc:{start:{line:52,column:49},end:{line:64,column:3}},line:52}},branchMap:{'0':{loc:{start:{line:53,column:4},end:{line:55,column:5}},type:'if',locations:[{start:{line:53,column:4},end:{line:55,column:5}},{start:{line:53,column:4},end:{line:55,column:5}}],line:53}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0},f:{'0':0,'1':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var React=(++cov_2kjvm3vc58.s[0],require('React'));var StyleSheet=(++cov_2kjvm3vc58.s[1],require('StyleSheet'));var{Text}=(++cov_2kjvm3vc58.s[2],require('F8Text'));const TouchableOpacity=(++cov_2kjvm3vc58.s[3],require('TouchableOpacity'));const View=(++cov_2kjvm3vc58.s[4],require('View'));class Header extends React.Component{render(){++cov_2kjvm3vc58.f[0];++cov_2kjvm3vc58.s[5];return<View style={[styles.header,this.props.style]}>
        <View style={styles.leftItem}>
          {this.renderItem(this.props.leftItemTitle,this.props.onLeftItemPress)}
        </View>
        <View style={styles.centerItem}>
          <Text style={[styles.titleText,this.props.titleStyle]}>
            {this.props.title}
          </Text>
        </View>
        <View style={styles.rightItem}>
          {this.renderItem(this.props.rightItemTitle,this.props.onRightItemPress)}
        </View>
      </View>;}renderItem(title:string,onPress:()=>void){++cov_2kjvm3vc58.f[1];++cov_2kjvm3vc58.s[6];if(!title){++cov_2kjvm3vc58.b[0][0];++cov_2kjvm3vc58.s[7];return null;}else{++cov_2kjvm3vc58.b[0][1];}++cov_2kjvm3vc58.s[8];return<TouchableOpacity onPress={onPress}style={styles.itemWrapper}>
        <Text style={styles.itemTitle}>
          {title.toUpperCase()}
        </Text>
      </TouchableOpacity>;}}var STATUS_BAR_HEIGHT=(++cov_2kjvm3vc58.s[9],20);var HEADER_HEIGHT=(++cov_2kjvm3vc58.s[10],STATUS_BAR_HEIGHT+/* toolbar */44);var styles=(++cov_2kjvm3vc58.s[11],StyleSheet.create({header:{backgroundColor:'transparent',paddingTop:STATUS_BAR_HEIGHT,height:HEADER_HEIGHT,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},titleText:{color:'white',fontSize:17},leftItem:{flex:1,alignItems:'flex-start'},centerItem:{flex:2,alignItems:'center'},rightItem:{flex:1,alignItems:'flex-end'},itemWrapper:{padding:11},itemTitle:{letterSpacing:1,fontSize:12,color:'white'}}));++cov_2kjvm3vc58.s[12];module.exports=Header;