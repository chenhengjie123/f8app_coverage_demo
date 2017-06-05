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
 */'use strict';var cov_1cjwgtzytw=function(){var path='tabs/notifications/PushNUXModal.js',hash='129d3d69307ce8dd1fbc8349b71416f649f57c91',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/notifications/PushNUXModal.js',statementMap:{'0':{start:{line:26,column:15},end:{line:26,column:34}},'1':{start:{line:27,column:15},end:{line:27,column:34}},'2':{start:{line:28,column:12},end:{line:28,column:28}},'3':{start:{line:29,column:12},end:{line:29,column:28}},'4':{start:{line:30,column:17},end:{line:30,column:38}},'5':{start:{line:31,column:11},end:{line:31,column:26}},'6':{start:{line:32,column:30},end:{line:32,column:47}},'7':{start:{line:41,column:4},end:{line:71,column:6}},'8':{start:{line:76,column:13},end:{line:114,column:2}},'9':{start:{line:116,column:0},end:{line:116,column:30}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:40,column:2},end:{line:40,column:3}},loc:{start:{line:40,column:11},end:{line:72,column:3}},line:40}},branchMap:{},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},f:{'0':0},b:{},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var F8Button=(++cov_1cjwgtzytw.s[0],require('F8Button'));var F8Colors=(++cov_1cjwgtzytw.s[1],require('F8Colors'));var Image=(++cov_1cjwgtzytw.s[2],require('Image'));var React=(++cov_1cjwgtzytw.s[3],require('React'));var StyleSheet=(++cov_1cjwgtzytw.s[4],require('StyleSheet'));var View=(++cov_1cjwgtzytw.s[5],require('View'));var{Heading1,Paragraph}=(++cov_1cjwgtzytw.s[6],require('F8Text'));class PushNUXModal extends React.Component{props:{onTurnOnNotifications:()=>void;onSkipNotifications:()=>void;};render(){++cov_1cjwgtzytw.f[0];++cov_1cjwgtzytw.s[7];return<View style={styles.container}>
        <View style={styles.inner}>
          <Image style={styles.image}source={require('./img/push-nux.png')}/>
          <View style={styles.content}>
            <Heading1>
              Don't miss out!
            </Heading1>
            <Paragraph style={styles.text}>
              Turn on push notifications to see what’s happening at F8. You can
              always see in-app updates on this tab.
            </Paragraph>
            <F8Button style={styles.button}type="primary"caption="Turn on push notifications"onPress={this.props.onTurnOnNotifications}/>
            <F8Button style={styles.button}type="secondary"caption="No thanks"onPress={this.props.onSkipNotifications}/>
          </View>
        </View>
      </View>;}}var styles=(++cov_1cjwgtzytw.s[8],StyleSheet.create({container:{position:'absolute',left:0,top:0,right:0,bottom:49,backgroundColor:'rgba(0, 0, 0, 0.66)',paddingHorizontal:20,justifyContent:'center'},inner:{overflow:'hidden',backgroundColor:'white',borderRadius:2},image:{alignSelf:'center'},content:{padding:20,paddingBottom:10,alignItems:'center'},text:{textAlign:'center',marginVertical:20},page:{borderTopWidth:1,borderTopColor:F8Colors.cellBorder,paddingTop:undefined,paddingBottom:0},button:{marginTop:10,alignSelf:'stretch'}}));++cov_1cjwgtzytw.s[9];module.exports=PushNUXModal;