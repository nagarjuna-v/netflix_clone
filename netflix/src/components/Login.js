import React, { useState, useRef } from "react";
import Header from "./Header";
import { Validate } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMAGE } from "./Constants";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const email = useRef();
  const password = useRef();
  const displayName = useRef()
  const dispatch = useDispatch()

  const handleButtonClick = () => {
    const emailId = email.current.value;
    const passwordValue = password.current.value;
    const displayFullName = isSignUp ? displayName.current.value : '';
    const message = Validate(emailId, passwordValue);
    setErrorMessage(message);
    if (message) return;

    if (isSignUp) {
      createUserWithEmailAndPassword(auth, emailId, passwordValue, displayFullName)
        .then((userCredential) => {
          const user = userCredential.user;
          dispatch(addUser({uid: user.uid, email: emailId, displayName: displayFullName}))
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, emailId, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMAGE}
          alt="bg-img"
        />
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="absolute w-4/12 bg-black p-10 mt-28 mx-auto right-0 left-0 rounded-lg  bg-opacity-80"
      >
        <h1 className="font-bold text-2xl text-white p-2">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {isSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-2 m-2 rounded-lg bg-gray-300"
            ref={displayName}
          ></input>
        )}
        <input
          type="email"
          placeholder="Email or Phone Number"
          className="w-full p-2 m-2 rounded-lg bg-gray-300"
          ref={email}
        ></input>
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 m-2 rounded-lg bg-gray-300"
          ref={password}
        ></input>
        {errorMessage && (
          <p className="text-red-500 ps-2 text-sm">{errorMessage}</p>
        )}
        <button
          className="w-full p-2  mx-2 mt-6 bg-red-500  rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
        <div className="flex justify-between py-1">
          <div className="flex items-center">
            <input type="checkbox" checked className="p-2 m-2 w-4 h-4" />
            <label className="text-white text-sm ">Remember me</label>
          </div>
          <div className="text-white text-sm my-2 cursor-pointer hover:underline">
            Need help?
          </div>
        </div>
        <p className="text-gray-500 p-2 m-2">
          {isSignUp ? "Already registered?" : "New to Netflix?"}
          <span
            className="cursor-pointer text-white hover:underline"
            onClick={() => {
              setIsSignUp(!isSignUp);
            }}
          >
            {isSignUp ? " Sign in now." : " Sign up now."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
