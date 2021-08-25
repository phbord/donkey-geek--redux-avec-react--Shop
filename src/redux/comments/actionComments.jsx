import axios from "axios";

import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from "./type";

const loadApiComment = () => {
  return {
    type: LOAD_COMMENTS,
  }
}

const loadCommentSuccess = comments => {
  return {
    type: LOAD_COMMENTS_SUCCESS,
    payload: comments
  }
}

const loadCommentError = error => {
  return {
    type: LOAD_COMMENTS_ERROR,
    payload: error
  }
}

export const apiCall = (dispatch) => {
  return () => {
    dispatch(loadApiComment())
    axios.get('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(res => {
        console.log('res.data: ', res.data)
        dispatch(loadCommentSuccess(res.data))
      })
      .catch(err => {
        dispatch(loadCommentError(err.message))
        console.log('err.message: ', err.message)
      })
  }
}