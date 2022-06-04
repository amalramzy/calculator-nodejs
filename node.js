const express = require('express');
const app = express();
app.listen(3000,function(){
    console.log('server running port 3000')
});
app.get("/calc",function(req,res){
    res.sendFile(__dirname + "/calc.html")
})