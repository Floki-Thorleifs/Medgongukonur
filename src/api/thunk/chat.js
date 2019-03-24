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
    } catch (e) {
      return dispatch(fetchChatError(e))
    }
    dispatch(fetchChatSuccess(chat.result));
  }
}

export const createChat = (endpoint, data) => {
    return async (dispatch) => {
  
      dispatch(createChatRequest());
      let chat;
  
      try {
        chat = await post2(endpoint, data);
      } catch (e) {
        return dispatch(createChatError(e))
      }
  
      dispatch(createChatSuccess(chat.result));
    }
  }



