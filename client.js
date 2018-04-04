var socket = io.connect('http://localhost:4444');
var statistics = {
    "timestamp": "",
    "grass die ": 0,
    "grass mul": 0,
    "eatgrass eat": 0,
    "eatgrass die": 0,
    "eatgrass mul ": 0,
    "gishatich eat": 0,
    "gishatich die": 0,
    "gishatich mul": 0,
    "gevorg eat": 0,
    "gevorg die": 0,
    "gevorg mul": 0,
}

function setup() {
    var cnv = createCanvas(600, 600);
    frameRate(20);
}

function draw() {
    if (frameCount % 500 === 0) {
        statistics.timestamp = (new Date()).toString();
        statistics.framecount = frameCount;
        socket.emit("send data", statistics);
    }
}
function changeView(stat) {
    var a = document.getElementById("grass die");
    var b = document.getElementById("grass mul");
    var c = document.getElementById("eatgrass eat");
    var d = document.getElementById("eatgrass die");
    var e  = document.getElementById("eatgrass mul");
    var f = document.getElementById("gishatich eat");
    var g = document.getElementById("gishatich  die");
    var h = document.getElementById("gishatich mul");
    var i = document.getElementById("gevorg eat");
    var g = document.getElementById("gevorg die");
    var k = document.getElementById("gevorg mul");
    c.innerHTML = stat.clicks;
    k.innerHTML = stat.keypresses;
    d.innerHTML = stat.dbclicks;
}