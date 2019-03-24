export const BLOOD_FETCH_REQUEST = 'BLOOD_FETCH_REQUEST';
export const BLOOD_FETCH_SUCCESS = 'BLOOD_FETCH_SUCCESS';
export const BLOOD_FETCH_ERROR = 'BLOOD_FETCH_ERROR';

export const BLOOD_ADD_REQUEST = 'BLOOD_ADD_REQUEST';
export const BLOOD_ADD_SUCCESS = 'BLOOD_ADD_SUCCESS';
export const BLOOD_ADD_ERROR = 'BLOOD_ADD_ERROR';



export function fetchBloodRequest() {
  return {
    type: BLOOD_FETCH_REQUEST,
    isLoading: true,
    error: null,
  }
}

export function fetchBloodSuccess(blood) {
  return {
    type: BLOOD_FETCH_SUCCESS,
    isLoading: false,
    error: null,
    blood: blood,
  }
}

export function fetchBloodError(error) {
  return {
    type: BLOOD_FETCH_ERROR,
    isLoading: false,
    blood: [],
    error,
  }
}

export function createBloodRequest() {
  return {
    type: BLOOD_ADD_REQUEST,
    isLoading: true,
    error: null,
  }
}

export function createBloodSuccess(blood) {
  return {
    type: BLOOD_ADD_SUCCESS,
    isLoading: false,
    blood: blood,
    error: null,
  }
}

export function createBloodError(error) {
  return {
    type: BLOOD_ADD_ERROR,
    isLoading: false,
    blood: null,
    error: error,
  }
}
