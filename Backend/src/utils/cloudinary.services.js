import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

          
cloudinary.config({ 
  cloud_name: 'dg5dyc1ga', 
  api_key: '926996221165974', 
  api_secret: '7IYK83dPewD69Zh4y77JzqoVh-Q' 
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //   upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //   file has been uploaded successfully
    console.log(
      "SUCCESS :: File Uploaded :: File has been uploaded successfull on cloudinary :: ",
      response.url
    );
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file after upload
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
    console.error(
      "FAILD :: File Not Uploaded :: File has not been uploaded on cloudinary :: ",
      error
    );
    return null;
  }
};

export { uploadOnCloudinary };
