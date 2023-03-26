import React from 'react';
import axios from 'axios';

const PROD_URL = "";
const DEV_URL = "";

export const login = (formData) => {
  return axios.post(`${DEV_URL}/api/auth/login`,formData);
}
export const signup = (formData) =>{
  return axios.post(`${DEV_URL}/api/auth/signup`,formData);
}