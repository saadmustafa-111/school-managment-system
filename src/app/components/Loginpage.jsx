"use client";
import React, { useState } from "react";
// import Button from "@mui/material/Button";
// import GoogleIcon from "@mui/icons-material/Google";
// import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
// import { setUser } from "../../../redux/authSlice";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});
const Login = () => {
  //   const router = useRouter();
  //   const dispatch = useDispatch();

  //   const handleLogin = async (values, { setSubmitting, setErrors }) => {
  //     const email = values.email;
  //     const password = values.password;
  //     try {
  //       const response = await fetch("/api/login", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email, password }),
  //       });
  //       const data = await response.json();
  //       if (!response.ok) {
  //         setErrors({ api: data.message });

  //         setSubmitting(false);
  //         return;
  //       }
  //       // now dispatch  the user to the redux
  //       dispatch(setUser({ name: data.name, email: data.email }));
  //       router.push("/dashboard");
  //     } catch (error) {
  //       console.log("Login error", error);
  //       setErrors({ api: "Something went wrong " });
  //       setSubmitting(false);
  //     }
  //   };
  return (
    <div
      style={{
        background: "black",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "rgba(255, 255, 255, 1)",
          backdropFilter: "blur(20px)",
        }}
        className=" p-8 rounded-lg shadow-2xl w-full max-w-md "
      >
        <h1 className="text-[30px] flex justify-center text-black">Login </h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={LoginSchema}
          //   onSubmit={handleLogin}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-4">
              {errors.api && <p className="text-red-500">{errors.api}</p>}
              <div>
                <label htmlFor="email" className="mt-3 text-md text-black">
                  Email
                </label>
                <Field
                  name="email"
                  type="text"
                  placeholder="Your @email.com"
                  className="border border-gray-400 bg-white ca text-black mt-3 mb-3 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {errors.email && touched.email && (
                  <p className="text-red-500">{errors.email}</p>
                )}
                <label htmlFor="password" className="mt-3 text-md text-black">
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  placeholder="password"
                  className="border border-gray-400  bg-white  text-black mt-3 block w-full px-3 py-2 rounded-md shadow-md focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {errors.password && touched.password && (
                  <p className="text-red-500">{errors.password}</p>
                )}
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:underline mt-2 block"
                >
                  Forget password
                </a>
                <div className="flex justify-center p-3 mt-6">
                  {/* <Button
                    type="submit"
                    disabled={isSubmitting}
                    variant="contained"
                    fullWidth
                  >
                    {isSubmitting ? "Logging in..." : "Login"}
                  </Button> */}
                </div>
                <div className="flex justify-center gap-3 text-sm">
                  <p className=""> Don't have an account?</p>
                  <Link href="/signup" className="underline ">
                    Sign up
                  </Link>
                </div>
                <div className="flex flex-col gap-5 ">
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
                    sx={{
                      color: "black",
                      borderColor: "#4285F4",
                      textTransform: "none",
                    }}
                  >
                    Continue With Google
                  </Button>
                  <Button
                    variant="outlined"
                    fullWidth
                    startIcon={<FacebookIcon />}
                    sx={{
                      color: "#4285F4",
                      borderColor: "#4285F4",
                      textTransform: "none",
                    }}
                  >
                    Continue With Facebook
                  </Button> */}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
