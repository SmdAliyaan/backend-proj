import mongoose from 'mongoose';
import { DB_NAME} from './constants.js';
import express from 'express';

// Approach 1: Using async/await with an IIFE (Immediately Invoked Function Expression)
/*
(async () => {
    try{
        mongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`);
        app.on("error",(error) => {
            console.log("ERROR: ", error);
            throw error 
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    } catch (error){
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}) ()

*/

