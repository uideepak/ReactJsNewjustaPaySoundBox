import {
  BASE_API_URL,
  signupApi,
  loginApi,
  contactFormApi,
  addBlogApi,
  AllblogList,
  BlogUpdate,
  DeleteBlog,
  ContactList,
  blog,
  profiledata,
  SubSignup,
  SubuserList,
  SubuserDelete,
  userEdit,
  leadFilter,
  forgot,
  OtpVerify,
  changepassword,
} from "../config/config";

import axios from "axios";
const token = JSON.parse(localStorage.getItem("Token"));
console.log(token, "tttttttttttttttttt");
export const SignupApi = async (body) => {
  // console.log("body in the controller", body);
  try {
    let { data } = await axios.post(BASE_API_URL + signupApi, body);
    return data;
  } catch (err) {
    throw err;
  }
};

export const LoginApi = async (body) => {
  console.log("body in the controller", body);
  try {
    let { data } = await axios.post(BASE_API_URL + loginApi, body);
    return data;
  } catch (err) {
    throw err;
  }
};

export const contactForm = async (body) => {
  console.log("body in the controller", body);
  try {
    let { data } = await axios.post(BASE_API_URL + contactFormApi, body);
    return data;
  } catch (err) {
    throw err;
  }
};

export const blogAPi = async (body) => {
  console.log("body in the controller", body);
  try {
    let { data } = await axios.post(BASE_API_URL + addBlogApi, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export const allblogList = async (body) => {
  try {
    let data = await axios.get(BASE_API_URL + AllblogList);
    console.log("data", data);
    return data;
  } catch (err) {
    throw err;
  }
};

export const contactLeads = async (body) => {
  try {
    let data = await axios.get(BASE_API_URL + ContactList);
    console.log("data", data);
    return data;
  } catch (err) {
    throw err;
  }
};

export const blogUpdates = async (body) => {
  try {
    let data = await axios.put(BASE_API_URL + BlogUpdate, body);
    console.log("data", data);
    return data;
  } catch (err) {
    throw err;
  }
};

export const blogDelete = async (body) => {
  try {
    let data = await axios.delete(BASE_API_URL + DeleteBlog + `?id=${body}`);
    console.log("data", data);
    return data;
  } catch (err) {
    throw err;
  }
};

export const blogs = async (id) => {
  console.log(id);
  try {
    let data = await axios.get(BASE_API_URL + blog, { params: { id: id } });
    console.log("data", data);
    return data;
  } catch (err) {
    throw err;
  }
};

// export const userLogout = async () => {
//   try {
//     let data = await axios.delete(BASE_API_URL + logout );
//     console.log("data", data);
//     return data;
//   } catch (err) {
//     throw err;
//   }
// };

export const userProfile = async (body) => {
  try {
    let userdata = await axios.get(BASE_API_URL + profiledata, body);
    console.log("data", userdata);
    return userdata;
  } catch (err) {
    throw err;
  }
};

export const SubUserSignup = async (body) => {
  // console.log("body in the controller", body);
  try {
    let { data } = await axios.post(BASE_API_URL + SubSignup, body);
    return data;
  } catch (err) {
    throw err;
  }
};

export const subuserList = async (body) => {
  try {
    let data = await axios.get(BASE_API_URL + SubuserList);
    console.log("data", data);
    return data;
  } catch (err) {
    throw err;
  }
};

export const SubUserDel = async (body) => {
  try {
    let data = await axios.delete(BASE_API_URL + SubuserDelete + `?id=${body}`);
    console.log("data", data);
    return data;
  } catch (err) {
    throw err;
  }
};

export const empUpdate = async (body) => {
  try {
    let data = await axios.put(BASE_API_URL + userEdit, body);
    console.log("data", data);
    return data;
  } catch (err) {
    throw err;
  }
};

export const ContactLeadsFilter = async (params) => {
  try {
    let data = await axios.get(BASE_API_URL + leadFilter, { params });
    console.log("data", data);
    return data;
  } catch (err) {
    throw err;
  }
};

export const forgotEmail = async (body) => {
  // console.log("body in the controller", body);
  try {
    let { data } = await axios.post(BASE_API_URL + forgot, body);
    return data;
  } catch (err) {
    throw err;
  }
};

export const passwordVerify = async (body) => {
  // console.log("body in the controller", body);
  try {
    let { data } = await axios.post(BASE_API_URL + OtpVerify, body);
    return data;
  } catch (err) {
    throw err;
  }
};

export const newpassword = async (body) => {
  // console.log("body in the controller", body);
  try {
    let { data } = await axios.post(BASE_API_URL + changepassword, body);
    return data;
  } catch (err) {
    throw err;
  }
};
