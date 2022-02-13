const express=require('express'); //using express frame work
const app=express(); //initializng app
const dotenv = require('dotenv').config(); //add dot env to get info from .env

app.use(express.urlencoded({extended: true}));//parse the formdata

app.use('/',require('./router'));//application level middleware for routing

//fires the server
app.listen(process.env.PORT,function(err){
    if(err)
    {
        console.log(err);
        return;
    }
    console.log('server is up and running');
})