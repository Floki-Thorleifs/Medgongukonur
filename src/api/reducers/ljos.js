import {
    LJOS_FETCH_REQUEST,
    LJOS_FETCH_SUCCESS,
    LJOS_FETCH_ERROR,
    LJOS_ADD_REQUEST,
    LJOS_ADD_SUCCESS,
    LJOS_ADD_ERROR,

  } from '../actions/ljos';
  
  const initialState = {
    isLoading: false,
    ljos: {},
    error: null,
    errors: [],
    isAuthenticated: true,
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case LJOS_FETCH_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
        };
  
      case LJOS_FETCH_SUCCESS:
        return {
          ...state,
          isLoading: action.isLoading,
          ljos: action.ljos,
          error: action.error,
        };
  
      case LJOS_FETCH_ERROR:
        return {
          ...state,
          isLoading: action.isLoading,
          ljos: action.ljos,
          error: action.error,
        }
  
      case LJOS_ADD_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
        }
  
      case LJOS_ADD_SUCCESS:
        return {
          ...state,
          isLoading: action.isLoading,
          ljos: action.ljos,
          error: action.error,
        }
      
      case LJOS_ADD_ERROR:
        return {
          ...state,
          isLoading: action.isLoading,
          ljos: action.ljos,
          error: action.error,
        }

  
      default:
        return state;
    }
  };