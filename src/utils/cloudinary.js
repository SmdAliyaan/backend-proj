import { v2 as cloudinary} from 'cloudinary';
import fs from 'fs' 

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        //upload
        const response =  await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded sucessfull
        console.log("File is uploaded on cloudinary",response.url);
        return response;
    } catch (error) {
        // Help debugging: log the real Cloudinary error reason.
        // This file path is the temp file created by multer.
        console.error("Cloudinary upload failed:", {
            localFilePath,
            error: error?.message || error
        });
        // Remove the locally saved temp file as the upload operation got failed.
        try {
            if (fs.existsSync(localFilePath)) fs.unlinkSync(localFilePath);
        } catch (unlinkErr) {
            // Don't hide the original cloudinary error.
            console.error("Failed to delete temp file after upload failure:", unlinkErr?.message || unlinkErr);
        }
        return null;
    }
}

export { uploadOnCloudinary }