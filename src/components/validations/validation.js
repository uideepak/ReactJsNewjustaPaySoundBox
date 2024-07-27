import { max } from "moment";
import * as Yup from "yup";

export const SignUpValidations = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-z A-Z]+$/, "Only alphabetic characters are allowed")
    .required(" Name field is required"),
  email: Yup.string()
    .required("Email field is required.")
    .email("Invalid email."),
  mobile: Yup.string()
    .matches(/^\d+$/, "Only numeric characters are allowed")
    .required("Phone no. field is required")
    .min(10, "  minimum 10 digits phone number")
    .max(10, "  maximum 10 digits phone number"),

  password: Yup.string()
    .required("Password field is required")
    .min(8, "minimun 8 character required"),
});

export const LoginValidations = Yup.object().shape({
  email: Yup.string()
    .required("Email field is required.")
    .email("Invalid email."),
  password: Yup.string().required("Password field is required"),
});

export const ContactValidations = Yup.object().shape({
  first_Name: Yup.string()
    .required(" Name field is required")
    .matches(/^[a-z A-Z]+$/, "Only alphabetic characters are allowed"),
  email: Yup.string()
    .required("Email field is required.")
    .email("Invalid email."),
  phone: Yup.string()
    .matches(/^\d+$/, "Only numeric characters are allowed")
    .required("Phone no. field is required")
    .min(10, "  minimum 10 digits phone number")
    .max(10, "  miximum 10 digits phone number"),

  device: Yup.string().required("Device field is required"),

  message: Yup.string().required("message field is required"),
});

export const AddBlogValidations = Yup.object().shape({
  blog_title: Yup.string().required(" title field is required"),
  blog_image: Yup.string().required("image field is required"),
  // description: Yup.string().required("description field is required"),
});

export const SubUserValidations = Yup.object().shape({
  name: Yup.string()
    .required(" Name field is required")
    .matches(/^[a-z A-Z]+$/, "Only alphabetic characters are allowed"),
  email: Yup.string()
    .required("Email field is required.")
    .email("Invalid email."),
  phone: Yup.string()
    .matches(/^\d+$/, "Only numeric characters are allowed")
    .required("Phone no. field is required")
    .min(10, "  minimum 10 digits phone number")
    .max(10, "  miximum 10 digits phone number"),

  role: Yup.string().required("role field is required"),

  password: Yup.string()
    .required("Password field is required")
    .min(8, "minimun 8 character required"),
});

export const SubUserEditValidations = Yup.object().shape({
  name: Yup.string()
    .required(" Name field is required")
    .matches(/^[a-z A-Z]+$/, "Only alphabetic characters are allowed"),
  email: Yup.string()
    .required("Email field is required.")
    .email("Invalid email."),
  phone: Yup.string()
    .matches(/^\d+$/, "Only numeric characters are allowed")
    .required("Phone no. field is required")
    .min(10, "  minimum 10 digits phone number")
    .max(10, "  miximum 10 digits phone number"),

  role: Yup.string().required("role field is required"),

  password: Yup.string()
    .required("Password field is required")
    .min(8, "minimun 8 character required"),
});

export const SarchFilter = Yup.object().shape({
  startDate: Yup.string().required(" startDate require"),
  endDate: Yup.string().required("endate Require"),
});
