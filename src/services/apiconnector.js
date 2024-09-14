// services mei api calls hai
// handle HTTP requests from the React front-end to the Node.js/Express back-end.


import axios from "axios"
// create method is used
export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    return axiosInstance({
        method:`${method}`,
        url:`${url}`,
        data: bodyData ? bodyData : null,
        headers: headers ? headers: null,
        params: params ? params : null,
    });
}