var express = require('express');
var app = express();
var vars = require('./vars.json');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;
const subs = require('./server/subscribe');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/templates');
app.use('/static', express.static(__dirname + '/public'));
app.locals.vars = vars;

app.get('/', function(req, res) {
	res.render('index');
});

app.get('/readme', function(req, res) {
	res.render('readme');
});

subs.subscribe(io);

http.listen(PORT, () => {
	console.log(`listening on *:${PORT}`);
});