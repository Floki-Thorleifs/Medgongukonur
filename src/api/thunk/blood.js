import { get, post } from '../api';

import {
  fetchBloodRequest,
  fetchBloodSuccess,
  fetchBloodError,
  createBloodRequest,
  createBloodSuccess,
  createBloodError,
} from '../actions/blood';

export const fetchBlood = (endpoint) => {
  return async (dispatch) => {

    dispatch(fetchBloodRequest());
    let blood;

    try {
      blood = await get(endpoint);
    } catch (e) {
      return dispatch(fetchBloodError(e))
    }
    dispatch(fetchBloodSuccess(blood.result));
  }
}

export const createBlood = (endpoint, data) => {
  return async (dispatch) => {

    dispatch(createBloodRequest());
    let blood;

    try {
      event = await post(endpoint, data);
    } catch (e) {
      return dispatch(createBloodError(e))
    }

    dispatch(createBloodSuccess(blood.result));
  }
}



