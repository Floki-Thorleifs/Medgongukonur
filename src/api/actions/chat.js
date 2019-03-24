export const CHAT_FETCH_REQUEST = 'CHAT_FETCH_REQUEST';
export const CHAT_FETCH_SUCCESS = 'CHAT_FETCH_SUCCESS';
export const CHAT_FETCH_ERROR = 'CHAT_FETCH_ERROR';

export const CHAT_ADD_REQUEST = 'CHAT_ADD_REQUEST';
export const CHAT_ADD_SUCCESS = 'CHAT_ADD_SUCCESS';
export const CHAT_ADD_ERROR = 'CHAT_ADD_ERROR';



export function fetchChatRequest() {
  return {
    type: CHAT_FETCH_REQUEST,
    isLoading: true,
    error: null,
  }
}

export function fetchChatSuccess(chat) {
  return {
    type: CHAT_FETCH_SUCCESS,
    isLoading: false,
    error: null,
    chat: chat,
  }
}

export function fetchChatError(error) {
  return {
    type: CHAT_FETCH_ERROR,
    isLoading: false,
    chat: [],
    error,
  }
}

export function createChatRequest() {
  return {
    type: CHAT_ADD_REQUEST,
    isLoading: true,
    error: null,
  }
}

export function createChatSuccess(chat) {
  return {
    type: CHAT_ADD_SUCCESS,
    isLoading: false,
    chat: chat,
    error: null,
  }
}

export function createChatError(error) {
  return {
    type: CHAT_ADD_ERROR,
    isLoading: false,
    chat: null,
    error: error,
  }
}
