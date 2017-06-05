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
 */'use strict';var cov_1rofted2l2=function(){var path='tabs/notifications/NotificationCell.js',hash='588354703981477be450400d6046d0a6a15f31ce',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/notifications/NotificationCell.js',statementMap:{'0':{start:{line:26,column:15},end:{line:26,column:34}},'1':{start:{line:27,column:20},end:{line:27,column:44}},'2':{start:{line:28,column:12},end:{line:28,column:28}},'3':{start:{line:29,column:17},end:{line:29,column:38}},'4':{start:{line:30,column:23},end:{line:30,column:50}},'5':{start:{line:31,column:15},end:{line:31,column:32}},'6':{start:{line:32,column:25},end:{line:32,column:54}},'7':{start:{line:33,column:11},end:{line:33,column:26}},'8':{start:{line:34,column:13},end:{line:34,column:30}},'9':{start:{line:36,column:18},end:{line:36,column:40}},'10':{start:{line:41,column:4},end:{line:51,column:5}},'11':{start:{line:42,column:6},end:{line:48,column:8}},'12':{start:{line:49,column:11},end:{line:51,column:5}},'13':{start:{line:50,column:6},end:{line:50,column:81}},'14':{start:{line:52,column:4},end:{line:66,column:6}},'15':{start:{line:70,column:13},end:{line:112,column:2}},'16':{start:{line:115,column:2},end:{line:118,column:4}},'17':{start:{line:121,column:0},end:{line:121,column:51}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:39,column:2},end:{line:39,column:3}},loc:{start:{line:39,column:11},end:{line:67,column:3}},line:39},'1':{name:'select',decl:{start:{line:114,column:9},end:{line:114,column:15}},loc:{start:{line:114,column:30},end:{line:119,column:1}},line:114}},branchMap:{'0':{loc:{start:{line:41,column:4},end:{line:51,column:5}},type:'if',locations:[{start:{line:41,column:4},end:{line:51,column:5}},{start:{line:41,column:4},end:{line:51,column:5}}],line:41},'1':{loc:{start:{line:49,column:11},end:{line:51,column:5}},type:'if',locations:[{start:{line:49,column:11},end:{line:51,column:5}},{start:{line:49,column:11},end:{line:51,column:5}}],line:49},'2':{loc:{start:{line:54,column:35},end:{line:54,column:70}},type:'binary-expr',locations:[{start:{line:54,column:35},end:{line:54,column:53}},{start:{line:54,column:57},end:{line:54,column:70}}],line:54}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0},f:{'0':0,'1':0},b:{'0':[0,0],'1':[0,0],'2':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var F8Colors=(++cov_1rofted2l2.s[0],require('F8Colors'));var F8SessionCell=(++cov_1rofted2l2.s[1],require('F8SessionCell'));var React=(++cov_1rofted2l2.s[2],require('React'));var StyleSheet=(++cov_1rofted2l2.s[3],require('StyleSheet'));var findSessionByURI=(++cov_1rofted2l2.s[4],require('findSessionByURI'));var{Text}=(++cov_1rofted2l2.s[5],require('F8Text'));var TouchableHighlight=(++cov_1rofted2l2.s[6],require('TouchableHighlight'));var View=(++cov_1rofted2l2.s[7],require('View'));var moment=(++cov_1rofted2l2.s[8],require('moment'));var{connect}=(++cov_1rofted2l2.s[9],require('react-redux'));class NotificationCell extends React.Component{render(){++cov_1rofted2l2.f[0];var attachment;++cov_1rofted2l2.s[10];if(this.props.session){++cov_1rofted2l2.b[0][0];++cov_1rofted2l2.s[11];attachment=<F8SessionCell style={styles.session}session={this.props.session}showStartEndTime={true}/>;}else{++cov_1rofted2l2.b[0][1];++cov_1rofted2l2.s[12];if(this.props.notification.url){++cov_1rofted2l2.b[1][0];++cov_1rofted2l2.s[13];attachment=<Text style={styles.url}>{this.props.notification.url}</Text>;}else{++cov_1rofted2l2.b[1][1];}}++cov_1rofted2l2.s[14];return<TouchableHighlight onPress={this.props.onPress}>
        <View style={[styles.cell,(++cov_1rofted2l2.b[2][0],!this.props.isSeen)&&(++cov_1rofted2l2.b[2][1],styles.unseen)]}>
          <Text style={styles.text}>
            {this.props.notification.text}
          </Text>
          {attachment}
          <View style={styles.footer}>
            <Text style={styles.time}>
              {moment(this.props.notification.time).fromNow()}
            </Text>
          </View>
        </View>
      </TouchableHighlight>;}}var styles=(++cov_1rofted2l2.s[15],StyleSheet.create({cell:{padding:15,backgroundColor:'white'},unseen:{paddingLeft:12,borderLeftWidth:3,borderLeftColor:'#4D99EF'},text:{fontSize:15,lineHeight:22,marginBottom:10},session:{paddingVertical:undefined,paddingHorizontal:undefined,paddingLeft:undefined,padding:10,marginBottom:10,borderWidth:1,borderRadius:4,borderColor:F8Colors.cellBorder,// overflow: 'hidden',
shadowOffset:{width:1,height:1},shadowColor:'#eee',shadowOpacity:1},footer:{flexDirection:'row'},url:{flex:1,color:F8Colors.actionText,fontSize:12,marginBottom:10},time:{color:F8Colors.lightText,fontSize:12}}));function select(store,props){++cov_1rofted2l2.f[1];++cov_1rofted2l2.s[16];return{session:findSessionByURI(store.sessions,props.notification.url),isSeen:store.notifications.seen[props.notification.id]};}++cov_1rofted2l2.s[17];module.exports=connect(select)(NotificationCell);