import { API_URL } from "../../constants";

interface apiFetchServiceProps {
  endpoint?:string,
  config?: object,
  options?: any
}

const apiFetchService = async (endpoint:apiFetchServiceProps["endpoint"], config:apiFetchServiceProps["config"])  => {

  let token = await localStorage.getItem("token");

  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      Accept: 'application/json, text/plain, */*',
      Authorization: `Bearer ${token}`
    }
  };


  return new Promise((resolve, reject) => {
    const options:apiFetchServiceProps["options"] = {
      ...defaultOptions,
      ...config
    };
    if (options.body) {
      options.body = JSON.stringify(options.body);
    }
    
    fetch(`${API_URL}${endpoint}`, options)
      .then(res => res.json() || {})
      .then(res => {
        if (res.status === 200 || res.status === 201 || res.status === 304) {
          return resolve(res);
        }
        return reject(res);
      })
      .catch(err => reject(err));
  });
};

export default apiFetchService;
