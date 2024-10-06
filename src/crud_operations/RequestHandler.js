import axios from "axios";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
// import { getAuthTokenFromCookies } from "../Utils/authTokenUtils";
// import { globalVarible } from "../Utils/identitySettings";

// Global auth header
const defaultAuthHeader = {
  headers: {
    Authorization: `` // Replace with your actual token
    // Authorization: getAuthTokenFromCookies(globalVarible.authToken) // Replace with your actual token
  }
};

// GET request
async function getRequest(url, customHeaders = null) {
  try {
    const headers = customHeaders ? customHeaders : defaultAuthHeader; // Use custom headers if provided, otherwise global
    const response = await axios.get(`${baseUrl}${url}`, headers);
    return response.data; // Return the full response object
  } catch (error) {
    return error.response ? error.response : { message: error.message }; // Return the full error response or message
  }
}

// POST request
async function postRequest(url, model, customHeaders = null) {
  try {
    const headers = customHeaders ? customHeaders : defaultAuthHeader; // Use custom headers if provided, otherwise global
    const response = await axios.post(`${baseUrl}${url}`, model, headers);
    return response.data; // Return the full response object
  } catch (error) {
    return error.response ? error.response : { message: error.message }; // Return the full error response or message
  }
}

// PUT request
async function putRequest(url, model, customHeaders = null) {
  try {
    const headers = customHeaders ? customHeaders : defaultAuthHeader; // Use custom headers if provided, otherwise global
    const response = await axios.put(`${baseUrl}${url}`, model, headers);
    return response.data; // Return the full response object
  } catch (error) {
    return error.response ? error.response : { message: error.message }; // Return the full error response or message
  }
}

// PATCH request
async function patchRequest(url, model, customHeaders = null) {
  try {
    const headers = customHeaders ? customHeaders : defaultAuthHeader; // Use custom headers if provided, otherwise global
    const response = await axios.patch(`${baseUrl}${url}`, model, headers);
    return response.data; // Return the full response object
  } catch (error) {
    return error.response ? error.response : { message: error.message }; // Return the full error response or message
  }
}

// DELETE request
async function deleteRequest(url, model, customHeaders = null) {
  try {
    const headers = customHeaders ? customHeaders : defaultAuthHeader; // Use custom headers if provided, otherwise global
    const response = await axios.delete(`${baseUrl}${url}`, {
      data: model, // Include model in the body for DELETE, if needed
      ...headers
    });
    return response.data; // Return the full response object
  } catch (error) {
    return error.response ? error.response : { message: error.message }; // Return the full error response or message
  }
}

export { getRequest, postRequest, putRequest, patchRequest, deleteRequest };
