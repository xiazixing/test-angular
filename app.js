var express = require('express');
var cookieParser = require('cookie-parser')
var util = require('util');
var app = express();



//让client目录下的文件可以直接被访问到
app.use(express.static('./client'));
app.use('/libs',express.static('./node_modules'));


app.use(cookieParser())

app.get('/list', function (req, res) {
  res.send('Hello World!');
  console.log("Cookies: " + util.inspect(req.cookies));
});

var server = app.listen(3000,  (error)=>{
  if(error) throw error
  var host = server.address().address;
  var port = server.address().port;
  console.log('server is ready');
  console.log('Example app listening at http://%s:%s', host, port);

});
