import {
  createPostApi,
  deletePostApi,
  getAllPostApi,
  getPostBySearchApi,
  likePostApi,
  updatePostApi,
} from "../api";
const {
  CREATE_POST,
  FETCH_ALL_POST,
  UPDATE_POST,
  DELETE_POST,
  LIKE_POST,
  START_LOADING,
  END_LOADING,
} = require("./actionTypes");

export const createPost = ({ title, message, name, tags, selectedFile }) => {
  return async function (dispatch) {
    try {
      const { data } = await createPostApi({
        title,
        message,
        name,
        tags,
        selectedFile,
      });
      dispatch({ type: CREATE_POST, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchAllPost = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await getAllPostApi();
      console.log("data --fetchAllPost ", data.data);
      dispatch({ type: FETCH_ALL_POST, payload: data.data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchPostBySearch = (searchQuery) => {
  return async function (dispatch) {
    try {
      dispatch({ type: START_LOADING });
      const { data } = await getPostBySearchApi(searchQuery);
      console.log("data --fetchPostBySearch ", data.data);
      dispatch({ type: FETCH_ALL_POST, payload: data.data });
      dispatch({ type: END_LOADING });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePost = (updatedFormData) => {
  return async function (dispatch) {
    try {
      const { data } = await updatePostApi(
        updatedFormData._id,
        updatedFormData
      );
      dispatch({ type: UPDATE_POST, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePost = (id) => {
  return async function (dispatch) {
    try {
      await deletePostApi(id);
      dispatch({ type: DELETE_POST, payload: id });
    } catch (error) {
      console.log(error);
    }
  };
};
export const likePost = (id) => {
  return async function (dispatch) {
    try {
      const { data } = await likePostApi(id);
      dispatch({ type: LIKE_POST, payload: data.data });
    } catch (error) {
      console.log(error);
    }
  };
};
