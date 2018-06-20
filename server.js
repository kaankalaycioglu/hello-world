var http = require('http');
var url = require('url');
var querystring = require('querystring');
var EventEmitter = require('events').EventEmitter;

var server = http.createServer()
var game = new EventEmitter();
game.on('gameover' , function(message){
	console.log(message);
});
server.on('request',function(req,res){
var page = url.parse(req.url).pathname;
var params = querystring.parse(url.parse(req.url).query);
res.writeHead(200, {"Content-Type" : "text/plain"});	
if('isim' in params && 'soyisim' in params){
	res.write('Isminiz' + ' ' + params['isim'] + ' ' +params['soyisim'] +' ' + 'tebrikler' + ' ');
}
if(page == '/'){
	res.write('selaminaluminyum');
}
else if(page == '/asd'){
	res.write('hayırdır kardes');
}
else if(page == '/asbc'){
	res.write('cik disari');
	game.emit('gameover' , 'You lose!');
}
else{
	res.write('nereye geldin kardes');
}
res.end();
});
server.listen(8080);
