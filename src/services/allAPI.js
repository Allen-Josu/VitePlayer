import { commonAPI } from "./API";
import { serverURL } from "./serverURL";

//API for uploading video

export const uploadVideoAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/video`, reqBody);
};

// API to get uploaded videos

export const getUploadedVideoAPI = async () => {
    return await commonAPI("GET", `${serverURL}/video`, "");
};

// API to delete videos

export const deleteVideoAPI = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/video/${id}`, {});
};

// API to add video into History

export const addToHistoy = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/history`, reqBody);
};

// API to get data from history

export const getVideoFromHistory = async () => {
    return await commonAPI("GET", `${serverURL}/history`, "");
};

// API to delete data from HIstory

export const deleteVideoHistory = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/history/${id}`, {});
};

// API to add a Category

export const addCategoryAPI = async (reqBody) => {
    return await commonAPI("POST", `${serverURL}/category`, reqBody);
};

//Api to get the category

export const getCategoryAPI = async () => {
    return await commonAPI("GET", `${serverURL}/category`, "");
};

// API to delete a Category

export const deleteCategoryAPI = async (id) => {
    return await commonAPI("DELETE", `${serverURL}/category/${id}`, {});
};

//API to get a single videos from Videos

export const getAVideos = async (id) => {
    return await commonAPI("GET", `${serverURL}/video/${id}`, "");
};

// API to update Category

export const updateCategory = async (id, reqBody) => {
    return await commonAPI("PUT", `${serverURL}/category/${id}`, reqBody);
};
