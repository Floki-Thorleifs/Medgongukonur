import {
    CHAT_FETCH_REQUEST,
    CHAT_FETCH_SUCCESS,
    CHAT_FETCH_ERROR,
    CHAT_ADD_REQUEST,
    CHAT_ADD_SUCCESS,
    CHAT_ADD_ERROR,

  } from '../actions/chat';
  
  const initialState = {
    isLoading: false,
    chat: {},
    error: null,
    errors: [],
    isAuthenticated: true,
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case CHAT_FETCH_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
        };
  
      case CHAT_FETCH_SUCCESS:
        return {
          ...state,
          isLoading: action.isLoading,
          chat: action.chat,
          error: action.error,
        };
  
      case CHAT_FETCH_ERROR:
        return {
          ...state,
          isLoading: action.isLoading,
          chat: action.chat,
          error: action.error,
        }
  
      case CHAT_ADD_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
        }
  
      case CHAT_ADD_SUCCESS:
        return {
          ...state,
          isLoading: action.isLoading,
          chat: action.chat,
          error: action.error,
        }
      
      case CHAT_ADD_ERROR:
        return {
          ...state,
          isLoading: action.isLoading,
          chat: action.chat,
          error: action.error,
        }

  
      default:
        return state;
    }
  };