const express = require('express');
var app = new express();

const resumedata = require('./src/model/user');


const fetch = require("node-fetch")
const cors = require('cors');//for angular

var port = process.env.PORT||3000;



app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
res.send("succes")
})
app.get('/fetch',async(req,res)=>{
    const url=`https://www.freetogame.com/api/games`;
    const options={
        "method":"GET",
    };
    const response=await fetch(url,options)
    .then(res=>res.json());
    // catch(e=>{
    //     console.error({error:e,});
    // });

console.log(response);
res.send(response.url)

});





app.listen(port,()=>{console.log("server Ready at"+port)});
