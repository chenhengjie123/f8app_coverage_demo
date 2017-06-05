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
 * @providesModule F8SpeakerProfile
 */'use strict';var cov_1sic3dlcv7=function(){var path='tabs/schedule/F8SpeakerProfile.js',hash='ece7e978476b592cc0421d18e0ee3a44ef17f6c5',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/schedule/F8SpeakerProfile.js',statementMap:{'0':{start:{line:28,column:15},end:{line:28,column:34}},'1':{start:{line:29,column:12},end:{line:29,column:28}},'2':{start:{line:30,column:12},end:{line:30,column:28}},'3':{start:{line:31,column:17},end:{line:31,column:38}},'4':{start:{line:32,column:15},end:{line:32,column:32}},'5':{start:{line:33,column:11},end:{line:33,column:26}},'6':{start:{line:35,column:23},end:{line:48,column:2}},'7':{start:{line:37,column:18},end:{line:37,column:36}},'8':{start:{line:38,column:4},end:{line:46,column:6}},'9':{start:{line:50,column:13},end:{line:50,column:15}},'10':{start:{line:52,column:13},end:{line:78,column:2}},'11':{start:{line:80,column:0},end:{line:80,column:34}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:36,column:10},end:{line:36,column:11}},loc:{start:{line:36,column:21},end:{line:47,column:3}},line:36}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0},f:{'0':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var F8Colors=(++cov_1sic3dlcv7.s[0],require('F8Colors'));var Image=(++cov_1sic3dlcv7.s[1],require('Image'));var React=(++cov_1sic3dlcv7.s[2],require('React'));var StyleSheet=(++cov_1sic3dlcv7.s[3],require('StyleSheet'));var{Text}=(++cov_1sic3dlcv7.s[4],require('F8Text'));var View=(++cov_1sic3dlcv7.s[5],require('View'));var F8SpeakerProfile=(++cov_1sic3dlcv7.s[6],React.createClass({render:function(){++cov_1sic3dlcv7.f[0];var speaker=(++cov_1sic3dlcv7.s[7],this.props.speaker);++cov_1sic3dlcv7.s[8];return<View style={styles.row}>
        <Image style={styles.picture}source={{uri:speaker.pic}}/>
        <View style={styles.info}>
          <Text style={styles.name}>{speaker.name}</Text>
          <Text style={styles.title}>{speaker.title}</Text>
        </View>
      </View>;}}));const SIZE=(++cov_1sic3dlcv7.s[9],76);var styles=(++cov_1sic3dlcv7.s[10],StyleSheet.create({row:{flexDirection:'row',paddingBottom:14,alignItems:'center'},picture:{width:SIZE,height:SIZE,borderRadius:SIZE/2},info:{paddingLeft:20,flex:1},name:{fontSize:15,marginBottom:2,color:F8Colors.darkText,fontWeight:'bold'},title:{fontSize:12,lineHeight:16,color:F8Colors.darkText}}));++cov_1sic3dlcv7.s[11];module.exports=F8SpeakerProfile;