import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link, useLocation, useNavigate } from "react-router-dom";
// import SignGoogle from './SignInWithGoogle';
// import Facebook from './SigInWithFacebook';
import Signup from "../../images/Signup.jpg";

function SignUp() {
  const [persons, setPersons] = useState([]);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");
  const [id, setId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let done = true;

    if (name === "") {
      done = false;
      setError("Please enter a  name!");
    }
    if (phone === "") {
      done = false;
      setError("Please enter a phone!");
    }
    if (email === "") {
      done = false;
      setError("Please enter an email!");
    }

    if (password === "") {
      done = false;
      setError("Please enter a password!");
    }

    if (password !== passwordConfirm) {
      done = false;
      setError("Please enter the same password!");
    }

    if (done) {
      axios
        .post("http://localhost:5000/records", {
          name: name,
          phone: phone,
          email: email,
          password: password,
        })
        .then(function (response) {
          if (response.data != "taken") {
            window.location.href = "http://localhost:3000/SignIn";
          } else {
            console.log(response.data);
            alert("this email is already taken");
            setError("this email is already taken");
          }
        })
        .catch(function (error) {});

      setName("");
      setEmail("");
      setPhone("");
      setPassword("");
      setPasswordConfirm("");
    }
  };
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
  const [showRegex, setShowRegex] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  return (
    <>
      <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
        <div class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">
          <div class="flex-1 bg-teal-600 text-center hidden lg:flex">
            <img src={Signup} class="mx-auto" alt="Shopping image" />
            <div class="hero-img xl:m-16 w-full bg-contain bg-center bg-no-repeat"></div>
          </div>
          <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 sm:w-10/12">
            <div></div>
            <div class="mt-12 flex flex-col items-center ">
              <h1 class="text-2xl xl:text-3xl font-extrabold text-amber-700 ">
                Sign Up to Join Us!
              </h1>
              <div class="w-full flex-1 mt-8">
                <div class="flex flex-col items-center">
                  {/* <SignGoogle massage={"Sign in with Google"} />

          <Facebook massage={"Sign in with Facebook"} /> */}
                </div>

                <div class="my-12 border-b text-center">
                  <div class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                    Or sign Up with e-mail
                  </div>
                </div>
                <form onSubmit={handleSubmit}>
                  <div class="mx-auto max-w-xs">
                    <div class="mb-3">
                      <label
                        for="name"
                        className={`block mb-2 text-sm font-medium text-700 dark:text-500 `}
                      >
                        Full name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className={`border-300 text-900 dark:text-400 placeholder-700 dark:placeholder-500 focus:ring-500 focus:border-500 dark:border--500 bg-white border-2 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none`}
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                        }}
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="phone"
                        className={`block mb-2 text-sm font-medium text-700 dark:text-500 `}
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        id="phone"
                        className={`border-300 text-900 dark:text-400 placeholder-700 dark:placeholder-500 focus:ring-500 focus:border-500 dark:border-500 bg-white border-2 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none`}
                        placeholder="Enter your phone"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                        }}
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="email"
                        className={`block mb-2 text-sm font-medium text-700 dark:text-500 `}
                      >
                        Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        className={`border-300 text-900 dark:text-400 placeholder-700 dark:placeholder-500 focus:ring-500 focus:border-500 dark:border-500 bg-white border-2 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none`}
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                    <div class="mb-3">
                      <label
                        for="password"
                        className={`text-700 dark:text-500 block mb-2 text-sm font-medium`}
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        className={`border-300 text-900 placeholder-700 focus:ring-500 focus:border-500 dark:text-500 dark:placeholder-500 dark:border-500 bg-white border-2 text-sm rounded-lg dark:bg-gray-700 block w-full p-2.5 focus:outline-none`}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setShowRegex(e.target === document.activeElement);
                          setPasswordValid(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value));
                        }}
                      />
                      {showRegex && !passwordValid && (
                        <p className="text-xs text-red-500 mb-1 ">
                          Password must contain at least 8 characters including
                          a digit and a special character.
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        for="confirmPassword"
                        className={`text-700 dark:text-500 block mb-2 text-sm font-medium`}
                      >
                        Confirm Password
                      </label>
                      <input
                        type="password"
                        id="confirmPassword"
                        className={`border--300 text--900 placeholder--700 focus:ring-500 focus:border-500 dark:text-500 dark:placeholder-500 dark:border-500 bg-white border-2 text-sm rounded-lg dark:bg-gray-700 block w-full p-2.5 focus:outline-none`}
                        placeholder="Confirm password"
                        value={passwordConfirm}
                        onChange={(e) => {
                          setPasswordConfirm(e.target.value);
                        }}
                      />
                    </div>
                    <button
                      type="submit"
                      class="mt-5 tracking-wide font-semibold bg-orange-600 text-lime-950 w-full py-4 rounded-lg hover:text-lime-950 hover:bg-yellow-600 transition-bg duration-500 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                    >
                      <svg
                        class="w-6 h-6 -ml-2"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                        <circle cx="8.5" cy="7" r="4" />
                        <path d="M20 8v6M23 11h-6" />
                      </svg>
                      <span class="ml-3 " disabled={!passwordValid}>Sign Up</span>
                    </button>
                    <p className={`mt-2 text-sm text-600 dark:text-500`}>
                      You already have an account!{" "}
                      <Link
                        to="/signIn"
                        className={`font-bold text-300 transition hover:text-500/75`}
                      >
                        Sign In
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
