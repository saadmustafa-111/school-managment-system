"use client";
import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
// import { signIn } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/authSlice";
import { Formik, Form, Field } from "formik";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import * as Yup from "yup";
const Signup = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [successmessage, setsuccessmessage] = useState("");
  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Name is Required"),
    email: Yup.string().email("invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "password must be at least 6 character")
      .required("password is required"),
    confirmpassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match ")
      .required("Confirm password is required"),
  });
  //   const handleGoogleauth = () => {
  //     signIn("google");
  //   };
  //   const handleSignup = async (
  //     values,
  //     { setSubmitting, setErrors, resetForm }
  //   ) => {
  //     try {
  //       const response = await fetch("/api/register", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name: values.name,
  //           email: values.email,
  //           password: values.password,
  //         }),
  //       });
  //       const data = await response.json();
  //       if (!response.ok) {
  //         setErrors({ api: data.message });
  //         setSubmitting(false);
  //         return;
  //       }
  //       dispatch(setUser({ name: values.name, email: values.email }));
  //       setsuccessmessage("Account Created Successfully");
  //       resetForm();
  //       router.push("/login");
  //     } catch (err) {
  //       console.error("Error:", err);
  //       setErrors({ api: "Something went wrong" });
  //     }
  //     setSubmitting(fals

  return (
    <div>
      <div
        style={{
          background: "black",
          backdropFilter: "blur(2xl)",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {" "}
        <div
          style={{
            background: "rgba(255, 255, 255, 1)",
            backdropFilter: "blur(20px)",
          }}
          className="mt-3 p-8 rounded-lg shadow-2xl w-full max-w-md "
        >
          <h1 className="text-[30px] flex justify-center text-black">
            Sign up{" "}
          </h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              confirmpassword: "",
            }}
            validationSchema={SignupSchema}
            // onSubmit={handleSignup}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form className="space-y-4">
                {errors.api && <p className="text-red-500">{errors.api}</p>}
                <div>
                  <label htmlFor="" className="mt-3 text-md text-black ">
                    Name
                  </label>
                  <Field
                    name="name"
                    as="input"
                    type="text"
                    placeholder="Enter Your User Name"
                    className=" border border-gray-400 text-black mt-3 mb-3 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.name && touched.name && (
                    <p className="text-red-500">{errors.name}</p>
                  )}
                  <label htmlFor="" className="mt-3 text-md text-black ">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    as="input"
                    placeholder="Your @email.com"
                    className="border border-gray-400 text-black mt-3 mb-3 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.email && touched.email && (
                    <p className="text-red-500">{errors.email}</p>
                  )}
                  <label htmlFor="" className="mt-3  text-md  text-black">
                    Password
                  </label>
                  <Field
                    name="password"
                    type="password"
                    as="input"
                    placeholder="password "
                    className="  border border-gray-400 text-black mt-3 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.password && touched.password && (
                    <p className="text-red-500">{errors.password}</p>
                  )}
                  <label htmlFor="" className="mt-3  text-md  text-black">
                    Confirm Password
                  </label>
                  <Field
                    name="confirmpassword"
                    type="password"
                    as="input"
                    placeholder="Retype Password "
                    className=" border border-gray-400  text-black mt-3 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  />
                  {errors.confirmpassword && touched.confirmpassword && (
                    <p className="text-red-500">{errors.confirmpassword}</p>
                  )}
                  <a
                    href="#"
                    className="text-sm text-blue-500 hover:underline mt-2 block "
                  >
                    Forget password
                  </a>
                  <div className="flex justify-center p-3 mt-6 ">
                    {/* <Button
                      type="submit"
                      disabled={isSubmitting}
                      variant="contained"
                      fullWidth
                    >
                      {isSubmitting ? "signing up ....." : "Sign up"}
                    </Button> */}
                    <Button>Signup</Button>
                  </div>
                  <div className="flex justify-center ga-3 text-sm ">
                    <p className=""> Already have an account?</p>
                    <Link href="/login" className="underline  ">
                      Login{" "}
                    </Link>
                  </div>
                  <div className="flex flex-col gap-5  text-white">
                    <div className="flex items-center justify-center my-4">
                      <hr className="flex-grow border-t border-gray-400" />
                      <span className="px-3 text-gray-500">or</span>
                      <hr className="flex-grow border-t border-gray-400" />
                    </div>
                    <Button className="bg-blue-400">
                      Continue with Facebook
                    </Button>
                    <Button>Continue with Google</Button>
                    {/* <Button
                      variant="outlined"
                      fullWidth
                      startIcon={<GoogleIcon />}
                      onClick={handleGoogleauth}
                      sx={{
                        color: "black",
                        borderColor: "#4285F4",
                        textTransform: "none",
                      }}
                    >
                      Continue With Google{" "}
                    </Button>
                    <Button
                      variant="outlined"
                      fullWidth
                      href="/dashboard"
                      startIcon={<FacebookIcon />}
                      sx={{
                        color: "#4285F4",
                        borderColor: "#4285F4",
                        textTransform: "none",
                      }}
                    >
                      Continue With Facebook{" "}
                    </Button> */}
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
