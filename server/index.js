const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const postRoutes = require('./routes/posts')
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const CONNECTION_URL = process.env.CONNECTION_URL;

mongoose.connect(CONNECTION_URL).then(()=>{
    console.log("Connected to the Database Successfully");
}).catch(err=>{
    console.log(err.message);
})

app.use(bodyParser.urlencoded({limit:'30mb',extended:true}))
app.use(bodyParser.json({limit:'30mb',extended:true}))
app.use(cors());

app.use('/post',postRoutes)

app.get('/',(req,res)=>{
    res.send("This is Home Route.")
})

app.listen(5000,()=>{
    console.log("Server is Listening on Port 3000");
})
