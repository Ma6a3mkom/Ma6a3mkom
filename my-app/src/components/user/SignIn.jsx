import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
// import SignGoogle from './SignInWithGoogle'
// import Facebook from './SigInWithFacebook';
import login from '../../images/login.jpg'

function SignIn() {
  return (
    
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      

    <div class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">

      <div class="flex-1 bg-teal-200 text-center hidden lg:flex">
      <img
            src={login}
            alt='Shopping image'
          />
      </div>
      <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 sm:w-10/12">
        <div>
          
        </div>
        <div class="mt-12 flex flex-col items-center">
          <h1 class="text-2xl xl:text-3xl font-extrabold " style={{color:'#ea4d24'}}>
            Sign in your account
          </h1>
          <div class="w-full flex-1 mt-8">
            <div class="flex flex-col items-center">

                {/* <SignGoogle  massage={"Sign in with Google"} />  */}

                {/* <Facebook massage={"Sign in with Facebook"} /> */}
            </div>

            <div class="my-12 border-b text-center">
              <div
                class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
              >
                Or sign in with e-mail
              </div>
            </div>
            <form >
              <div class="mx-auto max-w-xs">
                <div class="mb-6">
                  <label for="email" className={`block mb-2 text-sm font-medium text-700 dark:text--500 `}>Email</label>
                  <input  type="text" id="email" className={`border-300 tex-900 dark:text--400 placeholder-700 dark:placeholder-500 focus:ring-500 focus:border-500 dark:border-500 bg-white border-2 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none`} placeholder="Enter your email" />
                  <p className={`mt-2 text-sm text-600 dark:text500`}><span class="font-medium"></span></p>
                </div>
                <div>
                  <label for="password" className={`text-700 dark:text-500 block mb-2 text-sm font-medium`}>Password</label>
                  <input  type="password" id="password" className={`border-300 text-900 placeholder-700 focus:ring--500 focus:border-500 dark:text-500 dark:placeholder-500 dark:border-500 bg-white border-2 text-sm rounded-lg dark:bg-gray-700 block w-full p-2.5 focus:outline-none`} placeholder="Enter your password" />
                  <p className={`mt-2 text-sm text-600 dark:text-500`}><span class="font-medium"></span></p>
                </div>
                <button type='submit'
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
                  </svg>
                  <span class="ml-3 ">
                    Sign in
                  </span>
                </button>
                <p className={`mt-2 text-sm text-600 dark:text-500`}><span class="font-medium"></span></p>
               <Link to="/SignUp"> <p className={`mt-2 text-sm text-600 dark:text-500`}>Don't have an account!  </p> </Link> 
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div >

  )
}

export default SignIn