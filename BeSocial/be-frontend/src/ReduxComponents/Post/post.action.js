import { api } from "../../config/api";
import { 
  CREATE_COMMENT_FAILURE,
  CREATE_COMMENT_REQUEST,
  CREATE_COMMENT_SUCCESS,
  CREATE_POST_FAILURE,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  GET_ALL_POST_REQUEST,
  GET_ALL_POST_SUCCESS,
  GET_USERS_POST_FAILURE,
  GET_USERS_POST_REQUEST,
  GET_USERS_POST_SUCCESS,
  LIKE_POST_FAILURE,
  LIKE_POST_REQUEST,
  LIKE_POST_SUCCESS,
} from "./post.actionType";

export const createPostAction = (postData) => async (dispatch) => {
  dispatch({ type: CREATE_POST_REQUEST });
  try {
    const { data } = await api.post("/api/posts/user", postData);
    dispatch({ type: CREATE_POST_SUCCESS, payload: data });
    console.log("post created",data);
  } catch (error) {
    console.log("error in creating post", error);
    dispatch({ type: CREATE_POST_FAILURE, payload: error });
  }
};


export const getAllPostAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POST_REQUEST });
  try {
    const { data } = await api.get("/posts/all");
    dispatch({ type: GET_ALL_POST_SUCCESS, payload: data });
    console.log("get all post successfully",data);
  } catch (error) {
    console.log("error in fetching post", error);
    dispatch({ type: GET_USERS_POST_FAILURE, payload: error });
  }
};

export const getUsersPostAction = () => async (dispatch) => {
  dispatch({ type: GET_USERS_POST_REQUEST});
  try {
    const { data } = await api.get("/posts/user");
    dispatch({ type: GET_USERS_POST_SUCCESS, payload: data });
    console.log("get users post successfully".data);
  } catch (error) {
    console.log("error in fetching users post", error);
    dispatch({ type: GET_USERS_POST_FAILURE, payload: error });
  }
};

export const likePostAction = (postId) => async (dispatch) => {
  dispatch({ type: LIKE_POST_REQUEST});
  try {
    const { data } = await api.put(`/posts/like/${postId}`);
    dispatch({ type:LIKE_POST_SUCCESS, payload: data });
    console.log("post liked..",data);
  } catch (error) {
    console.log("error liked post..", error);
    dispatch({ type: LIKE_POST_FAILURE, payload: error });
  }
};


export const createCommentAction = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_COMMENT_REQUEST });
  try {
    const { data } = await api.post(`/api/posts/${reqData.postId}/comment`, reqData.data);
    dispatch({ type: CREATE_COMMENT_SUCCESS, payload: data });
    console.log("comment created",data);
  } catch (error) {
    console.log("error in creating comment", error);
    dispatch({ type: CREATE_COMMENT_FAILURE, payload: error });
  }
};