// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//     res.redirect('http://google.com')
// });
// app.get("/search/:search", function(req, res){
//     var search = req.params.search;
//     res.redirect('http://google.com/search?q=' + search)
// });
// app.get("/*", function(req, res){
    
//     res.status(404)
// });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });
function main() {
    var socket = io();
    var chatDiv = document.getElementById('chat');
    var input = document.getElementById('message');
    var button = document.getElementById('submit');
 
    function handleSubmit(evt) {
        var val = input.value;
        if (val != "") {
            socket.emit("send message", val);
        }
    }
    button.onclick = handleSubmit;
    function handleMessage(msg) {
        var p = document.createElement('p');
        p.innerText = msg;
        chatDiv.appendChild(p);
        input.value = "";
}

socket.on('display message', handleMessage);
} // main closing bracket

window.onload = main;   