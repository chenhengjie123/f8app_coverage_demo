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
 */'use strict';var cov_osoumrrru=function(){var path='tabs/schedule/EmptySchedule.js',hash='19923588903b9e325a91bc70a0e5bafcafe380c3',global=new Function('return this')(),gcv='__coverage__',coverageData={path:'tabs/schedule/EmptySchedule.js',statementMap:{'0':{start:{line:26,column:12},end:{line:26,column:28}},'1':{start:{line:27,column:12},end:{line:27,column:28}},'2':{start:{line:28,column:17},end:{line:28,column:38}},'3':{start:{line:29,column:30},end:{line:29,column:47}},'4':{start:{line:30,column:11},end:{line:30,column:26}},'5':{start:{line:42,column:18},end:{line:43,column:62}},'6':{start:{line:44,column:18},end:{line:45,column:66}},'7':{start:{line:47,column:4},end:{line:56,column:6}},'8':{start:{line:60,column:13},end:{line:79,column:2}},'9':{start:{line:81,column:0},end:{line:81,column:31}}},fnMap:{'0':{name:'(anonymous_0)',decl:{start:{line:41,column:2},end:{line:41,column:3}},loc:{start:{line:41,column:11},end:{line:57,column:3}},line:41}},branchMap:{'0':{loc:{start:{line:42,column:18},end:{line:43,column:62}},type:'binary-expr',locations:[{start:{line:42,column:18},end:{line:42,column:34}},{start:{line:43,column:6},end:{line:43,column:62}}],line:42},'1':{loc:{start:{line:44,column:18},end:{line:45,column:66}},type:'binary-expr',locations:[{start:{line:44,column:18},end:{line:44,column:34}},{start:{line:45,column:6},end:{line:45,column:66}}],line:44}},s:{'0':0,'1':0,'2':0,'3':0,'4':0,'5':0,'6':0,'7':0,'8':0,'9':0},f:{'0':0},b:{'0':[0,0],'1':[0,0]},_coverageSchema:'332fd63041d2c1bcb487cc26dd0d5f7d97098a6c'},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var Image=(++cov_osoumrrru.s[0],require('Image'));var React=(++cov_osoumrrru.s[1],require('React'));var StyleSheet=(++cov_osoumrrru.s[2],require('StyleSheet'));var{Paragraph,Heading1}=(++cov_osoumrrru.s[3],require('F8Text'));var View=(++cov_osoumrrru.s[4],require('View'));class EmptySchedule extends React.Component{props:{style?:any;title?:string;image?:number;text:string;children?:any;};render(){++cov_osoumrrru.f[0];const image=(++cov_osoumrrru.s[5],(++cov_osoumrrru.b[0][0],this.props.image)&&(++cov_osoumrrru.b[0][1],<Image style={styles.image}source={this.props.image}/>));const title=(++cov_osoumrrru.s[6],(++cov_osoumrrru.b[1][0],this.props.title)&&(++cov_osoumrrru.b[1][1],<Heading1 style={styles.title}>{this.props.title}</Heading1>));++cov_osoumrrru.s[7];return<View style={[styles.container,this.props.style]}>
        {image}
        {title}
        <Paragraph style={styles.text}>
          {this.props.text}
        </Paragraph>
        {this.props.children}
      </View>;}}var styles=(++cov_osoumrrru.s[8],StyleSheet.create({container:{flex:1,backgroundColor:'white',padding:30,paddingTop:75,alignItems:'center'},title:{textAlign:'center',marginBottom:10},image:{marginBottom:10},text:{textAlign:'center',marginBottom:35}}));++cov_osoumrrru.s[9];module.exports=EmptySchedule;