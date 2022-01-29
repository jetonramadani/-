// First we need to import axios.js
import axios from "axios";

function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie); //to be careful
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res
}


// Next we make an 'instance' of it
const instance = axios.create({
  // .. where we make our configurations
  baseURL: "https://mapedonija-backend.herokuapp.com/",
  headers: {
    loginToken: `${getCookie("loginToken")}`,
  }
});

// Where you would set stuff like your 'Authorization' header, etc ...
// # instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Also add/ configure interceptors && all the other cool stuff

// # instance.interceptors.request...
export default instance;
