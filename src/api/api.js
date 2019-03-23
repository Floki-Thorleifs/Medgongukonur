const baseurl = process.env.REACT_APP_SERVICE_URL;

//todo gera get, delete, fetch, patch, post

export async function get(endpoint) {
    const token = window.localStorage.getItem('token');
  
    const url = `${baseurl}${endpoint}`;
  
    const options = {
      headers: {},
    };
  
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }
  
    const response = await fetch(url, options);
    const result = await response.json();
  
    return { result, status: response.status };
  }


  export async function post2(endpoint) {
    const url = `${baseurl}${endpoint}`;
  
    const token = window.localStorage.getItem('token');
    const options = {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    };
  
    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }
    const response = await fetch(url, options); 
    const result = await response;
    return result;
  }
  

export default {
 //allt
  };