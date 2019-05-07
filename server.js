'use strict'
const http = require('http')
    , express = require('express')
    , app = express()
    , server = http.createServer(app);
	
var count = 0;

app.use(function(req, res, next) {
 	res.header("Access-Control-Allow-Origin", "*");
 	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 	next();
});

app.use(express.static('./public/'));

app.get('/count',(req,res)=>{
  console.log(count);
  res.send({count: count});
});

app.get('/inc',(req,res)=>{
  ++count;
  console.log(count);
  res.send({count: count});
});
 app.get('/dec',(req,res)=>{
  --count;
  res.send({count: count});
});
app.get('/reset',(req,res)=>{
  count=0;
  res.send({count: count});
});
//App server ---------->
server.listen(process.env.PORT || 1100, err => {
  if(err){
    throw err
  }
  console.log('Server running on 1100')
})
