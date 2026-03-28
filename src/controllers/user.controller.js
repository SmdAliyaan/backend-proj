import asyncHandler from '../utils/asyncHandler.js'
import {ApiError} from " ../utils/ApiError.js"
import { User} from "../models/user.model.js"
const registerUser = asyncHandler(async(req,res) => {
    // 1 get user details from frontend
    // 2 validation - not empty
    // 3 check if user already exists : username , email
    // 4 check for images ,check for avatar
    // 5 upload them to cloudinary , avatar
    // 6 create user object - creation entry in db
    // 7 remove password and refresh token field form reposnse
    // 8 check for user creation
    // 9 return res

    const{fullName , email , username , password} = req.body
    console.log("email: ",email)


    // Advance code 
    // 1

    if ([fullName , email , username , password].some((feild) => 
        field?.trim() ==="")
    ) {
        throw new ApiError(400,"All fields are required")
    }

    //2

    const existerUser = User.findOne({
        $or: [{ username } , { email }]
    })

    if (existedUser) {
        throw new ApiError(409,"User with email or username already exists")
    }


})


export { registerUser}