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
 */'use strict';var cov_vviwn2tq6=function(){var path='tabs/schedule/FilterHeader.js',hash='fbd121b9b452cba0dfc09ec3cd7209a63af02f70',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/schedule/FilterHeader.js',statementMap:{'0':{start:{line:27,column:12},end:{line:27,column:28}},'1':{start:{line:28,column:17},end:{line:28,column:38}},'2':{start:{line:29,column:13},end:{line:29,column:28}},'3':{start:{line:30,column:25},end:{line:30,column:52}},'4':{start:{line:31,column:13},end:{line:31,column:28}},'5':{start:{line:32,column:14},end:{line:32,column:30}},'6':{start:{line:35,column:18},end:{line:35,column:40}},'7':{start:{line:36,column:22},end:{line:36,column:46}},'8':{start:{line:40,column:17},end:{line:40,column:47}},'9':{start:{line:41,column:4},end:{line:43,column:5}},'10':{start:{line:42,column:6},end:{line:42,column:18}},'11':{start:{line:45,column:4},end:{line:61,column:6}},'12':{start:{line:65,column:13},end:{line:86,column:2}},'13':{start:{line:89,column:2},end:{line:91,column:4}},'14':{start:{line:95,column:2},end:{line:97,column:4}},'15':{start:{line:96,column:25},end:{line:96,column:48}},'16':{start:{line:100,column:0},end:{line:100,column:56}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:39,column:2},end:{line:39,column:3}},loc:{start:{line:39,column:11},end:{line:62,column:3}},line:39},'1':{name:'select',decl:{start:{line:88,column:9},end:{line:88,column:15}},loc:{start:{line:88,column:23},end:{line:92,column:1}},line:88},'2':{name:'actions',decl:{start:{line:94,column:9},end:{line:94,column:16}},loc:{start:{line:94,column:27},end:{line:98,column:1}},line:94},'3':{name:'(anonymous_3)',decl:{start:{line:96,column:19},end:{line:96,column:20}},loc:{start:{line:96,column:25},end:{line:96,column:48}},line:96}},branchMap:{'0':{loc:{start:{line:41,column:4},end:{line:43,column:5}},type:'if',locations:[{start:{line:41,column:4},end:{line:43,column:5}},{start:{line:41,column:4},end:{line:43,column:5}}],line:41}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0},f:{'0':0,'1':0,'2':0,'3':0},b:{'0':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var React=(++cov_vviwn2tq6.s[0],require('React'));var StyleSheet=(++cov_vviwn2tq6.s[1],require('StyleSheet'));const Text=(++cov_vviwn2tq6.s[2],require('Text'));const TouchableOpacity=(++cov_vviwn2tq6.s[3],require('TouchableOpacity'));const View=(++cov_vviwn2tq6.s[4],require('View'));const Image=(++cov_vviwn2tq6.s[5],require('Image'));// TODO: Pull redux connection up
const{connect}=(++cov_vviwn2tq6.s[6],require('react-redux'));const{clearFilter}=(++cov_vviwn2tq6.s[7],require('../../actions'));class FilterHeader extends React.Component{render(){++cov_vviwn2tq6.f[0];var topics=(++cov_vviwn2tq6.s[8],Object.keys(this.props.filter));++cov_vviwn2tq6.s[9];if(topics.length===0){++cov_vviwn2tq6.b[0][0];++cov_vviwn2tq6.s[10];return null;}else{++cov_vviwn2tq6.b[0][1];}++cov_vviwn2tq6.s[11];return<View style={styles.container}>
        <Text style={styles.text}numberOfLines={1}>
          {'Filters: '}
          <Text style={styles.filters}>
            {topics.join(', ')}
          </Text>
        </Text>
        <TouchableOpacity accessibilityLabel="Clear filter"accessibilityTraits="button"style={styles.clear}onPress={this.props.onClearFilter}>
          <Image source={require('../../common/img/x-white.png')}/>
        </TouchableOpacity>
      </View>;}}var styles=(++cov_vviwn2tq6.s[12],StyleSheet.create({container:{height:36,flexDirection:'row',alignItems:'center',backgroundColor:'#12336B',paddingLeft:16},text:{flex:1,fontSize:12,color:'white'},clear:{paddingHorizontal:16,alignSelf:'stretch',justifyContent:'center'},filters:{color:'rgba(255, 255, 255, 0.65)'}}));function select(store){++cov_vviwn2tq6.f[1];++cov_vviwn2tq6.s[13];return{filter:store.filter};}function actions(dispatch){++cov_vviwn2tq6.f[2];++cov_vviwn2tq6.s[14];return{onClearFilter:()=>{++cov_vviwn2tq6.f[3];++cov_vviwn2tq6.s[15];return dispatch(clearFilter());}};}++cov_vviwn2tq6.s[16];module.exports=connect(select,actions)(FilterHeader);