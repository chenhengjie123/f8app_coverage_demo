var express = require('express'),
    im = require('istanbul-middleware'),
    isCoverageEnabled = true,
    app = express(),
    port = 8889;

// add the coverage handler
console.log('Coverage reporting at /coverage');
app.use('/coverage', im.createHandler({ verbose: true, resetOnGet: true }));

console.log('Starting server at: http://localhost:' + port);
app.listen(port);
