var express = require('express');
var path = require('path');
var config = require('./config');
var log = require('./libs/log')(module);
var app = express();
var http = require('http').Server(app);
var router = require('./routes/index');
var db = require('./libs/module_database');


app.engine('ejs', require('ejs-locals'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', router);

app.use(express.static(path.join(__dirname,'public')));


app.use(function(req, res, next) {
  res.status(404).render('error',{
    error:'404: Page Not Found',
  });
});

app.use(function(err, req, res, next) {
  res.status(500).render('error',{
    error:'500: Server Error',
  });
});


http.listen(config.get('port'),function(){
  log.info('Express server listening on port '+config.get('port'));
})
