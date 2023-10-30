import { baseUrl } from "./baseurl"
import { commonRequest } from "./commonrequest";

// add video  http://localhost:5000
export const addVideo=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/videos`,body)
}

//get all videos
export const getAllVideos=async()=>{
    return await commonRequest('GET',`${baseUrl}/videos`,{})
}

//delete single video
export const deleteVideo=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
}

//add category
export const addCategory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/categories`,body)
}

//get all category
export const getAllCats=async()=>{
    return await commonRequest('GET',`${baseUrl}/categories`,{})
}

// category delete
export const deleteCat=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/categories/${id}`,{})
}
// add history
export const addHistory=async(body)=>{
    return await commonRequest('POST',`${baseUrl}/histories`,body)
}


//get all histry
export const getAllHistory=async()=>{
    return await commonRequest('GET',`${baseUrl}/histories`,{})
}

//delete history
export const deletehistory=async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/histories/${id}`,{})
}
//drag and drop

// access single video
export const getVideo=async(id)=>{
    return await commonRequest('GET',`${baseUrl}/videos/${id}`,{})
}


// update category

export const updateCategory=async(id,body)=>{
    return await commonRequest('PUT',`${baseUrl}/categories/${id}`,body)
}


  // delete single video from category
  
  export const deleteSingleCat= async(id)=>{
    return await commonRequest('DELETE',`${baseUrl}/videos/${id}`,{})
  }
  // update category
  
 
  export const getAllVideosInCat=async(id)=>{
    return await commonRequest('GET',`${baseUrl}/categories/${id}`,{})
}
