import dotenv from 'dotenv'
import connectDB from './db/index.js';

dotenv.config({
    path: './env'
})


connectDB()






























// Approach 2: Using async/await with an IIFE (Immediately Invoked Function Expression)
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



