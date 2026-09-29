const express = require('express');

// server is created  but it will not staart 

const app=express()// varible mai store kare and 
// app.listen commnad se server ko start kara samjh rha hai bhai 

app.get("/", (req, res)=>{
    res.send("hello world ")
})

app.get("/about", (req, res)=>{
    res.send('About page')
})
app.listen(3000()=>{
    console.log('server is running on port 3000');
});

