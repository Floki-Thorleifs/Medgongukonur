export const LJOS_FETCH_REQUEST = 'LJOS_FETCH_REQUEST';
export const LJOS_FETCH_SUCCESS = 'LJOS_FETCH_SUCCESS';
export const LJOS_FETCH_ERROR = 'LJOS_FETCH_ERROR';

export const LJOS_ADD_REQUEST = 'LJOS_ADD_REQUEST';
export const LJOS_ADD_SUCCESS = 'LJOS_ADD_SUCCESS';
export const LJOS_ADD_ERROR = 'LJOS_ADD_ERROR';



export function fetchLjosRequest() {
  return {
    type: LJOS_FETCH_REQUEST,
    isLoading: true,
    error: null,
  }
}

export function fetchLjosSuccess(ljos) {
  return {
    type: LJOS_FETCH_SUCCESS,
    isLoading: false,
    error: null,
    ljos: ljos,
  }
}

export function fetchLjosError(error) {
  return {
    type: LJOS_FETCH_ERROR,
    isLoading: false,
    ljos: [],
    error,
  }
}

export function createLjosRequest() {
  return {
    type: LJOS_ADD_REQUEST,
    isLoading: true,
    error: null,
  }
}

export function createLjosSuccess(ljos) {
  return {
    type: LJOS_ADD_SUCCESS,
    isLoading: false,
    ljos: ljos,
    error: null,
  }
}

export function createLjosError(error) {
  return {
    type: LJOS_ADD_ERROR,
    isLoading: false,
    ljos: null,
    error: error,
  }
}
