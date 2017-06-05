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
 */'use strict';var cov_2e4ttxwvis=function(){var path='tabs/notifications/RateSessionsCell.js',hash='0d576392c72009635d54d9cfff7f6a8ee16404e0',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/notifications/RateSessionsCell.js',statementMap:{'0':{start:{line:26,column:15},end:{line:26,column:34}},'1':{start:{line:27,column:12},end:{line:27,column:28}},'2':{start:{line:28,column:17},end:{line:28,column:38}},'3':{start:{line:29,column:15},end:{line:29,column:32}},'4':{start:{line:30,column:23},end:{line:30,column:50}},'5':{start:{line:31,column:11},end:{line:31,column:26}},'6':{start:{line:32,column:12},end:{line:32,column:28}},'7':{start:{line:40,column:23},end:{line:40,column:56}},'8':{start:{line:41,column:2},end:{line:59,column:4}},'9':{start:{line:62,column:13},end:{line:93,column:2}},'10':{start:{line:95,column:0},end:{line:95,column:34}}},fnMap:{'0':{name:'RateSessionsCell',decl:{start:{line:39,column:9},end:{line:39,column:25}},loc:{start:{line:39,column:62},end:{line:60,column:1}},line:39}},branchMap:{'0':{loc:{start:{line:40,column:23},end:{line:40,column:56}},type:'cond-expr',locations:[{start:{line:40,column:48},end:{line:40,column:50}},{start:{line:40,column:53},end:{line:40,column:56}}],line:40}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0},f:{'0':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var F8Colors=(++cov_2e4ttxwvis.s[0],require('F8Colors'));var React=(++cov_2e4ttxwvis.s[1],require('React'));var StyleSheet=(++cov_2e4ttxwvis.s[2],require('StyleSheet'));var{Text}=(++cov_2e4ttxwvis.s[3],require('F8Text'));var TouchableOpacity=(++cov_2e4ttxwvis.s[4],require('TouchableOpacity'));var View=(++cov_2e4ttxwvis.s[5],require('View'));var Image=(++cov_2e4ttxwvis.s[6],require('Image'));type Props={numberOfSessions:number;onPress:()=>void;};function RateSessionsCell({numberOfSessions,onPress}:Props){++cov_2e4ttxwvis.f[0];const pluralSuffix=(++cov_2e4ttxwvis.s[7],numberOfSessions===1?(++cov_2e4ttxwvis.b[0][0],''):(++cov_2e4ttxwvis.b[0][1],'s'));++cov_2e4ttxwvis.s[8];return<View style={styles.cell}>
      <Image style={styles.star}source={require('../../rating/img/full-star.png')}/>
      <Text style={styles.text}>
        You have {numberOfSessions} session{pluralSuffix} to review
      </Text>

      <TouchableOpacity accessibilityTraits="button"onPress={onPress}>
        <View style={styles.button}>
          <Text style={styles.caption}>
            REVIEW
          </Text>
        </View>
      </TouchableOpacity>
    </View>;}var styles=(++cov_2e4ttxwvis.s[9],StyleSheet.create({cell:{flexDirection:'row',alignItems:'center',padding:15,backgroundColor:'white'},star:{width:20,height:20,marginRight:8,marginBottom:2},text:{fontSize:15,color:F8Colors.darkText,flex:1},button:{backgroundColor:'#6F86D9',height:30,paddingHorizontal:20,borderRadius:15,alignItems:'center',justifyContent:'center'},caption:{color:'white',letterSpacing:1,fontSize:12}}));++cov_2e4ttxwvis.s[10];module.exports=RateSessionsCell;