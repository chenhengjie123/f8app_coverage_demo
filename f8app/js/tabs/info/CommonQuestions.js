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
 */'use strict';var cov_18itl4nade=function(){var path='tabs/info/CommonQuestions.js',hash='b6613ec98e7f484b2e2792e829c6ffb3bc01fe39',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/info/CommonQuestions.js',statementMap:{'0':{start:{line:26,column:25},end:{line:26,column:67}},'1':{start:{line:27,column:22},end:{line:27,column:48}},'2':{start:{line:28,column:12},end:{line:28,column:28}},'3':{start:{line:29,column:14},end:{line:29,column:34}},'4':{start:{line:30,column:17},end:{line:30,column:38}},'5':{start:{line:31,column:15},end:{line:31,column:32}},'6':{start:{line:32,column:18},end:{line:32,column:40}},'7':{start:{line:33,column:11},end:{line:33,column:26}},'8':{start:{line:37,column:18},end:{line:39,column:5}},'9':{start:{line:38,column:7},end:{line:38,column:65}},'10':{start:{line:40,column:4},end:{line:46,column:6}},'11':{start:{line:61,column:4},end:{line:61,column:12}},'12':{start:{line:62,column:4},end:{line:62,column:37}},'13':{start:{line:67,column:4},end:{line:75,column:5}},'14':{start:{line:68,column:6},end:{line:74,column:8}},'15':{start:{line:76,column:4},end:{line:90,column:6}},'16':{start:{line:78,column:36},end:{line:78,column:49}},'17':{start:{line:94,column:4},end:{line:94,column:73}},'18':{start:{line:95,column:4},end:{line:95,column:52}},'19':{start:{line:99,column:13},end:{line:125,column:2}},'20':{start:{line:127,column:0},end:{line:127,column:33}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:36,column:2},end:{line:36,column:3}},loc:{start:{line:36,column:11},end:{line:47,column:3}},line:36},'1':{name:'(anonymous_1)',decl:{start:{line:37,column:38},end:{line:37,column:39}},loc:{start:{line:38,column:7},end:{line:38,column:65}},line:38},'2':{name:'(anonymous_2)',decl:{start:{line:60,column:2},end:{line:60,column:3}},loc:{start:{line:60,column:16},end:{line:63,column:3}},line:60},'3':{name:'(anonymous_3)',decl:{start:{line:65,column:2},end:{line:65,column:3}},loc:{start:{line:65,column:11},end:{line:91,column:3}},line:65},'4':{name:'(anonymous_4)',decl:{start:{line:78,column:30},end:{line:78,column:31}},loc:{start:{line:78,column:36},end:{line:78,column:49}},line:78},'5':{name:'(anonymous_5)',decl:{start:{line:93,column:2},end:{line:93,column:3}},loc:{start:{line:93,column:11},end:{line:96,column:3}},line:93}},branchMap:{'0':{loc:{start:{line:67,column:4},end:{line:75,column:5}},type:'if',locations:[{start:{line:67,column:4},end:{line:75,column:5}},{start:{line:67,column:4},end:{line:75,column:5}}],line:67},'1':{loc:{start:{line:81,column:15},end:{line:81,column:51}},type:'cond-expr',locations:[{start:{line:81,column:37},end:{line:81,column:45}},{start:{line:81,column:48},end:{line:81,column:51}}],line:81}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0,'10':0,'11':0,'12':0,'13':0,'14':0,'15':0,'16':0,'17':0,'18':0,'19':0,'20':0},f:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0},b:{'0':[0,0],'1':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var ItemsWithSeparator=(++cov_18itl4nade.s[0],require('../../common/ItemsWithSeparator'));var LayoutAnimation=(++cov_18itl4nade.s[1],require('LayoutAnimation'));var React=(++cov_18itl4nade.s[2],require('React'));var Section=(++cov_18itl4nade.s[3],require('./Section'));var StyleSheet=(++cov_18itl4nade.s[4],require('StyleSheet'));var{Text}=(++cov_18itl4nade.s[5],require('F8Text'));var F8Touchable=(++cov_18itl4nade.s[6],require('F8Touchable'));var View=(++cov_18itl4nade.s[7],require('View'));class CommonQuestions extends React.Component{render(){++cov_18itl4nade.f[0];let content=(++cov_18itl4nade.s[8],this.props.faqs.map(({question,answer})=>{++cov_18itl4nade.f[1];++cov_18itl4nade.s[9];return<Row question={question}answer={answer}key={question}/>;}));++cov_18itl4nade.s[10];return<Section title="Common questions">
        <ItemsWithSeparator separatorStyle={styles.separator}>
          {content}
        </ItemsWithSeparator>
      </Section>;}}class Row extends React.Component{props:{question:string;answer:string;};state:{expanded:boolean};constructor(){++cov_18itl4nade.f[2];++cov_18itl4nade.s[11];super();++cov_18itl4nade.s[12];this.state={expanded:false};}render(){++cov_18itl4nade.f[3];var answer;++cov_18itl4nade.s[13];if(this.state.expanded){++cov_18itl4nade.b[0][0];++cov_18itl4nade.s[14];answer=<View style={styles.answer}>
          <Text style={styles.text}>
            {this.props.answer}
          </Text>
        </View>;}else{++cov_18itl4nade.b[0][1];}++cov_18itl4nade.s[15];return<View style={styles.row}>
        <F8Touchable onPress={()=>{++cov_18itl4nade.f[4];++cov_18itl4nade.s[16];return this.toggle();}}>
          <View style={styles.question}>
            <Text style={styles.symbol}>
              {this.state.expanded?(++cov_18itl4nade.b[1][0],'\u2212'):(++cov_18itl4nade.b[1][1],'+')}
            </Text>
            <Text style={styles.text}>
              {this.props.question}
            </Text>
          </View>
        </F8Touchable>
        {answer}
      </View>;}toggle(){++cov_18itl4nade.f[5];++cov_18itl4nade.s[17];LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);++cov_18itl4nade.s[18];this.setState({expanded:!this.state.expanded});}}var styles=(++cov_18itl4nade.s[19],StyleSheet.create({separator:{marginHorizontal:20},question:{paddingVertical:14,paddingHorizontal:20,flexDirection:'row',backgroundColor:'white'},symbol:{fontSize:15,lineHeight:21,width:22,color:'#99A7B9'},answer:{padding:14,paddingLeft:20+22},text:{fontSize:15,lineHeight:21,color:'#002350',flex:1}}));++cov_18itl4nade.s[20];module.exports=CommonQuestions;