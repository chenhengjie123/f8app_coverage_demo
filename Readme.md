# React-Native Instegration Test Coverage Collector Demo

React-Native 集成测试覆盖率收集 Demo

# 用法

1. 把代码仓库 clone 到本地
2. 参照 [React Native 代码覆盖率获取探索 (一)](https://testerhome.com/topics/8230) 的步骤，搭建好 f8app 的开发环境。
3. 启动 middleware 服务：

```
$ cd f8app_coverage_middleware && npm install &&./start_middleware.sh
```

4. 启动 rn 应用（以 ios 为例）

```
$ cd f8app && react-native run-ios
```

启动后，等待约5秒，然后打开 <http://localhost:8889/coverage> 即可查看覆盖率报告。覆盖率报告每隔2秒会自动更新。

# 已知问题

由于 middleware 默认识别相对路径，会造成查看具体文件行级别覆盖率时报类似如下的错误：

```
Error: ENOENT: no such file or directory, open 'actions/installation.js'
    at Error (native)
    at Object.fs.openSync (fs.js:549:18)
    at Object.fs.readFileSync (fs.js:397:15)
    ...
```

原因：middleware 文件解析是根据 url 中的 p 参数值进行解析的。由于 client 只会回传相对路径，因此 middleware 会找不到对应文件。将其生成 html 页面时使用的路径改为绝对路径即可。

解决方法：
打开 `f8app_coverage_middleware/node_modules/istanbul-middleware/lib/core.js` ，添加下面 + 号开头的代码（实际添加时不需要加上这个 + 号）：

```
        fileCoverage = coverage[outputNode.fullPath()];

+       // 临时修复 `no such file or directory` 报错问题
+       var path = require('path');
+       fileCoverage.path = path.resolve(__dirname, '..', '..', '..', fileCoverage.path);
        
        utils.addDerivedInfoForFile(fileCoverage);
        report.writeDetailPage(res, outputNode, fileCoverage);
```