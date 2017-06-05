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
 */'use strict';var cov_2o70edphpl=function(){var path='filter/FriendsList.js',hash='40aad287a64679bd8920ddc04a0ae47c541098db',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'filter/FriendsList.js',statementMap:{'0':{start:{line:27,column:12},end:{line:27,column:35}},'1':{start:{line:34,column:4},end:{line:34,column:9}},'2':{start:{line:48,column:4},end:{line:56,column:5}},'3':{start:{line:49,column:6},end:{line:55,column:8}},'4':{start:{line:57,column:4},end:{line:67,column:6}},'5':{start:{line:60,column:10},end:{line:64,column:12}},'6':{start:{line:63,column:27},end:{line:63,column:53}},'7':{start:{line:78,column:21},end:{line:78,column:36}},'8':{start:{line:79,column:20},end:{line:79,column:38}},'9':{start:{line:80,column:4},end:{line:90,column:6}},'10':{start:{line:94,column:13},end:{line:94,column:15}},'11':{start:{line:96,column:13},end:{line:122,column:2}},'12':{start:{line:124,column:0},end:{line:124,column:29}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:47,column:2},end:{line:47,column:3}},loc:{start:{line:47,column:11},end:{line:68,column:3}},line:47},'1':{name:'(anonymous_1)',decl:{start:{line:59,column:32},end:{line:59,column:33}},loc:{start:{line:60,column:10},end:{line:64,column:12}},line:60},'2':{name:'(anonymous_2)',decl:{start:{line:63,column:21},end:{line:63,column:22}},loc:{start:{line:63,column:27},end:{line:63,column:53}},line:63},'3':{name:'(anonymous_3)',decl:{start:{line:77,column:2},end:{line:77,column:3}},loc:{start:{line:77,column:11},end:{line:91,column:3}},line:77}},branchMap:{'0':{loc:{start:{line:48,column:4},end:{line:56,column:5}},type:'if',locations:[{start:{line:48,column:4},end:{line:56,column:5}},{start:{line:48,column:4},end:{line:56,column:5}}],line:48}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0},f:{'0':0,'1':0,'2':0,'3':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var React=(++cov_2o70edphpl.s[0],require('react-native'));var{Image,StyleSheet,Text,TouchableOpacity,View}=(++cov_2o70edphpl.s[1],React);type Friend={id:string;name:string;};class FriendsList extends React.Component{props:{friends:Array<Friend>;onPress:(friend:Friend)=>void;};render(){++cov_2o70edphpl.f[0];++cov_2o70edphpl.s[2];if(this.props.friends.length===0){++cov_2o70edphpl.b[0][0];++cov_2o70edphpl.s[3];return<View style={[styles.container,styles.noFriends]}>
          <Text style={styles.text}>
            No friends have shared their schedule.
          </Text>
        </View>;}else{++cov_2o70edphpl.b[0][1];}++cov_2o70edphpl.s[4];return<View style={styles.container}>
        {this.props.friends.map(friend=>{++cov_2o70edphpl.f[1];++cov_2o70edphpl.s[5];return<UserPog user={friend}key={friend.id}onPress={()=>{++cov_2o70edphpl.f[2];++cov_2o70edphpl.s[6];return this.props.onPress(friend);}}/>;})}
      </View>;}}class UserPog extends React.Component{props:{user:Friend;onPress:()=>void;};render(){++cov_2o70edphpl.f[3];var{id,name}=(++cov_2o70edphpl.s[7],this.props.user);var firstName=(++cov_2o70edphpl.s[8],name.split(' ')[0]);// TODO: problems with i18n
++cov_2o70edphpl.s[9];return<TouchableOpacity style={styles.pog}onPress={this.props.onPress}>
        <Image style={styles.profilePic}source={{uri:`http://graph.facebook.com/${id}/picture`}}/>
        <Text style={styles.text}>
          {firstName}
        </Text>
      </TouchableOpacity>;}}const SIZE=(++cov_2o70edphpl.s[10],50);var styles=(++cov_2o70edphpl.s[11],StyleSheet.create({container:{flexDirection:'row',alignItems:'center',justifyContent:'center'},noFriends:{height:SIZE,borderRadius:SIZE/2,backgroundColor:'rgba(3, 34, 80, 0.15)'},pog:{alignItems:'center',margin:6},profilePic:{marginBottom:6,width:SIZE,height:SIZE,borderRadius:SIZE/2},text:{color:'white',fontSize:12,textAlign:'center'}}));++cov_2o70edphpl.s[12];module.exports=FriendsList;