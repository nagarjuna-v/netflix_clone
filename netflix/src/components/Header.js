import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "./Constants";

const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          addUser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubcribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="absolute w-full ps-5 pt-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="logo" />
      <span className="text-white text-4xl mt-2">MY NETFLIX</span>
      {user && (
        <div className="flex p-2">
          <button className="text-white bg-blue-600 px-2 mx-2 my-4 rounded-lg">
            Gpt search
          </button>
          <div>
            <div className="text-white capitalize text-xl">
              {user.displayName}
            </div>
            <FaUserCircle size={40} color="red" />
            <button
              className="text-white font-bold text-sm"
              onClick={handleSignOut}
            >
              (Sing Out)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
