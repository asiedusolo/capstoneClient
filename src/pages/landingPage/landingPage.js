import React from "react";
import { Link } from "react-router-dom";
// import "./landingPage.css";

const LandingPage = () => {
  const PF = `https://letxchatapi.herokuapp.com/images/`;

  return (
    <div className="h-full flex flex-col p-4 md:flex-row space-y-8">
      <div className="md:w-1/2">
        <div className="flex flex-col space-y-28 md:space-y-2">
          <h1 className="text-5xl text-center">
            Let<span className="text-white">X</span>Chat
          </h1>
          <img
            src={PF + "Online world-cuate.png"}
            alt="landingPicture"
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col space-y-8 md:space-y-16 px-8 md:w-1/2">
        <div className="text-6xl pb-8">
          <p className="font-bold uppercase">Connect</p>
          <p className="text-white">
            and <span className="">share</span> with
          </p>
          <p className="">colleagues</p>
        </div>
        <p className=" text-2xl pb-8">
          LetXChat is an instant group messaging app. A user can visit the site
          to create and have an account on LetXChat. The user can then login to
          acccess chat groups that he has been assigned to. User can send and
          receive text, pictures, audio and video to and from chat groups.
        </p>
        <div className="flex space-x-8">
          <button className="">
            <Link className="bg-orange-500 hover:bg-orange-400 font-bold text-gray-200 px-8 py-2 rounded-lg" to="/register">
              Sign up
            </Link>
          </button>
          <button className=" bg-orange-500 hover:bg-orange-400 font-bold text-gray-200 px-8 py-2 rounded-lg">
            <Link className="" to="/login">
              Login
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
