import { commonAPI } from "./API";
import { serverURL } from "./serverURL";

//API for uploading video

export const uploadVideoAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/video`, reqBody);
};

// API to get uploaded videos

export const getUploadedVideoAPI = async() =>{
    return await commonAPI("GET",`${serverURL}/video`,"")
}

