const express = require('express')
const mongoose=require('mongoose')
require('dotenv').config({path:'config/.env'})
const app= express();
const connectDB = require ("./Helper/connectDB");
// const Router =express.Router();
connectDB();

app.use(express.json({extended: false}));
app.use('/api', require('./routes/person'))


app.listen(5000,()=>{
    console.log('server connected')
})