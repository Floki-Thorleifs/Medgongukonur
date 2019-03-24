import { get, post2 } from '../api';

import {
  fetchLjosRequest,
  fetchLjosSuccess,
  fetchLjosError,
  createLjosRequest,
  createLjosSuccess,
  createLjosError,
} from '../actions/ljos';

export const fetchLjos = (endpoint) => {
  return async (dispatch) => {

    dispatch(fetchLjosRequest());
    let ljos;

    try {
      ljos = await get(endpoint);
      console.log(ljos)
    } catch (e) {
      return dispatch(fetchLjosError(e))
    }
    dispatch(fetchLjosSuccess(ljos.result));
  }
}

export const createLjos = (endpoint, data) => {
  return async (dispatch) => {

    dispatch(createLjosRequest());
    let ljos;

    try {
        console.log(data)
      ljos = await post2(endpoint, data);
    } catch (e) {
      return dispatch(createLjosError(e))
    }

    dispatch(createLjosSuccess(ljos.result));
  }
}

