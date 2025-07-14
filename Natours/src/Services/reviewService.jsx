import axios from "../Utils/axiosInstance";

export const deleteReview = async (reviewId,) => {
  try {
    console.log(reviewId, "Review ID in service");
    const res = await axios.delete(`/reviews/${reviewId}`);
    return res.data;
  } catch (error) {
    console.error("Error deleting review:", error);
    throw error;
  }
};


export const editReview = async(reviewid, text, rating)=>{
  const res = await axios.patch(`/reviews/${reviewid}`,{rating,review:text});
  return res.data
   
}
export const addReview = async (id ,text,rating)=>{
  const res = await axios.post(`/tours/${id}/reviews`,{
    rating,
    review:text
  })
  return res.data
}
