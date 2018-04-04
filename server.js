/*var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});
*/




var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];
var fs = require('fs');  //ֆայլերի մեջ գրել և կարդալու համար
var express = require('express'); //սերվեր
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var statData = []; //ստատիստիկան պահպանող օբյեկտների զանգվածը

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
   for(var i in messages) {
     io.sockets.emit("display message", messages[i]);
   }
   socket.on("send message", function (data) {
       messages.push(data);
       io.sockets.emit("display message", data);
   })
});

//եթե ֆայլը կա
if (fs.existsSync("public/data.json")) {
    //կարդում ենք ֆայլից և անմիջապես դարձնում օբյեկտ 
    var statData = require("./public/data.json");
}

//սահմանում ենք, ստատիկ ֆայլերի դիրեկտորիան
app.use(express.static("public"));
//սահմանում ենք կլիենտին անհրաժեշտ javascript-ների դիրեկտորիաները, տես index.html-ում
app.use('/socket', express.static(__dirname + '/node_modules/socket.io-client/dist/'));
app.use('/p5', express.static(__dirname + '/node_modules/p5/lib/'));

//արմատի շավիղը (rout-ը)
app.get('/', function (req, res) {
    res.redirect('index.html');
});
//ստատիստիկայի շավիղը
app.get('/stats', function (req, res) {
    res.redirect('stats.html');
});

server.listen(4444);

io.on('connection', function (socket) {
    socket.on("send data", function (data) {
        statData.push(data); //ավելացնում ենք նոր տվյալը զանգվածում
        fs.writeFile('public/data.json', JSON.stringify(statData)); //գրում ենք ստատսիտկայի տվյալները ֆայլի մեջ
    })

    socket.on("get stats", function () { //երբ կլիենտը ուղարկում է "get stats" 
        //կարդում ենք ստատիստիկայի ֆայլը
        fs.readFile('public/data.json', "utf8", function(err, statisticsFromFile) {
            //և ուղարկում ենք այն "send stats" պիտակով
            socket.emit("send stats",statisticsFromFile);    
        });
        
    })
    

});
