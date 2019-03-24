const baseurl = 'http://pregnate.herokuapp.com';
//const baseurl = 'http://127.0.0.1:3070'
//todo gera get, delete, fetch, patch, post

export async function get(endpoint) {
  const token = window.localStorage.getItem('token');

  const url = `${baseurl}${endpoint}`;

  const options = {
    headers: {}
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, options);
  const result = await response.json();

  return { result, status: response.status };
}

export async function post2(endpoint, data) {
  const url = `${baseurl}${endpoint}`;

  const token = window.localStorage.getItem('token');
  const options = {
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  };

  if (token) {
    options.headers['Authorization'] = `Bearer ${token}`;
  }
  const response = await fetch(url, options);
  const result = await response.json();
  return { result, status: response.status };
}

export default {
  get,
  post2
};
