import {
    BLOOD_FETCH_REQUEST,
    BLOOD_FETCH_SUCCESS,
    BLOOD_FETCH_ERROR,
    BLOOD_ADD_REQUEST,
    BLOOD_ADD_SUCCESS,
    BLOOD_ADD_ERROR,

  } from '../actions/blood';
  
  const initialState = {
    isLoading: false,
    blood: {},
    error: null,
    errors: [],
    isAuthenticated: true,
  };
  
  export default (state = initialState, action) => {
    switch(action.type) {
      case BLOOD_FETCH_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
        };
  
      case BLOOD_FETCH_SUCCESS:
        return {
          ...state,
          isLoading: action.isLoading,
          blood: action.blood,
          error: action.error,
        };
  
      case BLOOD_FETCH_ERROR:
        return {
          ...state,
          isLoading: action.isLoading,
          blood: action.blood,
          error: action.error,
        }
  
      case BLOOD_ADD_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
        }
  
      case BLOOD_ADD_SUCCESS:
        return {
          ...state,
          isLoading: action.isLoading,
          blood: action.blood,
          error: action.error,
        }
      
      case BLOOD_ADD_ERROR:
        return {
          ...state,
          isLoading: action.isLoading,
          blood: action.blood,
          error: action.error,
        }

  
      default:
        return state;
    }
  };