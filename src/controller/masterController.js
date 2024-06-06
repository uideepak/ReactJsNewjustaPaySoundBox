import { BASE_API_URL, signupApi } from "../config/config";
import axios from "axios";

export const SignupApi = async (body) => {
  console.log("body in the controller", body);
  try {
    let { data } = await axios.post(BASE_API_URL + signupApi, body);
    return data;
  } catch (error) {
    throw error;
  }
};
