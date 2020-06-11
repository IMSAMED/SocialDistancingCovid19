const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db')


// load env variabals 
dotenv.config({ path: './config/config.env'})

//connect to database
connectDB();

const app = express();

// body parser 
app.use(express.json());

//Enable cors 
app.use(cors());

// Routes
app.use('/covidProjectApi/participants',require('./routes/participants'))

const PORT =process.env.PORT || 5200 ;

app.listen(PORT, ()=> console.log(`server run in ${process.env.NODE_ENV} mode in port ${PORT} `));