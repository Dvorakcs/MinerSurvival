const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const mongoose = require('mongoose');
const db = require('../context/db')
const app = express();

app.use(cors({origin: process.env.CORS_ORIGIN || '*'}));

app.use(helmet());

app.use(express.json());

app.use(morgan('dev'));

app.get('/login',async (req,res,next) => {
    try {
        const docs = await db.findAll();
        console.log(docs)
    } catch (error) {
            next(error)
    }
}) 

module.exports = app