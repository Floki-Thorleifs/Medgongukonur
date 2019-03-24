import { get, post2 } from '../api';

import {
  fetchChatRequest,
  fetchChatSuccess,
  fetchChatError,
  createChatRequest,
  createChatSuccess,
  createChatError,
} from '../actions/chat';

export const fetchChat = (endpoint) => {
  return async (dispatch) => {

    dispatch(fetchChatRequest());
    let chat;

    try {
      chat = await get(endpoint);
      console.log(chat)
    } catch (e) {
      return dispatch(fetchChatError(e))
    }
    console.log(chat.result)
    dispatch(fetchChatSuccess(chat.result));
  }
}

export const createChat = (endpoint, data) => {
  return async (dispatch) => {

    dispatch(createChatRequest());
    let chat;

    try {
        console.log(data)
      chat = await post2(endpoint, data);
    } catch (e) {
      return dispatch(createChatError(e))
    }

    dispatch(createChatSuccess(chat.result));
  }
}



