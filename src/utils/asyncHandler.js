//const asyncHandler = () => {} 
/* asyncHandler is a higher-order function that takes an asynchronous function
as an argument and returns a new function that wraps the original function
in a try-catch block. This allows you to handle errors in a consistent way
across your application.*/

//const asyncHandler = () => {
// const (func) => () => {}
// const (func) => async () => {}

    // try catch async Handler 

// const asyncHandler = (fn) => async(req,res,next) => {
//     try {
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

    // approach using promise

const asyncHandler = (requesthandler) => {
    return (req, res, next) => {
        Promise.resolve(requesthandler(req, res, next)).
        catch((err) => next(err))
    }
}

export default asyncHandler;


