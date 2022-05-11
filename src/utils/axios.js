// axios
import axios from "axios";
// react-toastify
import { toast } from "react-toastify";
// jwt

// ----------------------------------------------------------------------
const successToast = (message) => {
  if (message) {
    //toast.success(message);
  }
};
const errorToast = (isError, Messages) => {
  if (isError) {
    toast.error(Messages[0]);
  }
};
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT || "",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.config.parse) {
      // perform the manipulation here and change the response object
    }
    const { message } = response.data;
    successToast(message);

    return (response || {}).data || undefined;
  },
  (error) => {
    const { isError } = error.response.data;
    const { StatusCode, Messages } =
      error.response.data.responseException.exceptionMessage;
    errorToast(isError, Messages);

    return Promise.reject(error.message);
  }
);

export default axiosInstance;
