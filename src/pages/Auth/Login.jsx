import React,{useState} from 'react'

import MessageResource from '../../constants'
import Google from '../../assets/Google'
import Cool from '../../assets/svgs/Cool.svg'

const Login = () => {
  const [login,setLogin] = useState({email:'',password:''});

  const handleClickGoogle = () => {
    console.log(MessageResource.signinGoogle);
  }
  
  const handleChange = (e) => setLogin({...login,[e.target.name]:e.target.value})
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    //login
  }
  const handleForgotPassword = () => {
    console.log(MessageResource.FP);
  }


  return (
    <>
      <div className="flex w-full max-w-sm mx-auto my-10 items-center select-none overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
        <div className="hidden bg-cover lg:block md:w-1/2 ">
          <img src={Cool} alt="CoolBg" />
        </div>

        {/* FORM */}
        <div className="w-full px-6 py-8 md:px-8 md:w-1/2">
            {/* BRAND */}
            <div className="flex justify-center mx-auto">
                <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="logo" />
            </div>

            <p className="mt-3 text-3xl font-semibold text-center text-gray-600 dark:text-gray-200">
                {MessageResource.welcome}
            </p>

            {/* GOOGLE */}
            <button className="flex w-full items-center justify-center mt-4 text-gray-600 bg-blue-200 transition-colors duration-300 transform border rounded-lg
              dark:border-gray-700 dark:text-gray-100 dark:bg-blue-500 hover:bg-blue-300 dark:hover:bg-blue-300"
              onClick={handleClickGoogle}
            >
                <Google />
                <span className="w-5/6 px-4 py-3 font-semibold text-center">
                  {MessageResource.signinGoogle}
                </span>
            </button>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-500 lg:w-1/4"></span>
                <p className="text-xs text-center text-gray-600 uppercase dark:text-gray-400">
                  {MessageResource.OR}
                </p>
                <span className="w-1/5 border-b dark:border-gray-500 lg:w-1/4"></span>
            </div>

            {/* INPUTS */}
            
            {/* {EMAIL} */}
            <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                <input id="LoggingEmailAddress" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={login.email}
                />
            </div>

            {/* FP */}
            <div className="mt-4">
                <div className="flex justify-between">
                    <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                    <button onClick={handleForgotPassword} className="text-xs text-gray-500 dark:text-gray-300 hover:underline">
                      {MessageResource.FP}
                    </button>
                </div>
            {/* PSWD */}
                <input id="loggingPassword" className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" 
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={login.password}
                />
            </div>

            <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-500 rounded-lg hover:bg-gray-700 dark:bg-slate-600 dark:hover:bg-slate-300 dark:hover:text-gray-700"
                  onClick={handleSubmit}
                >
                    {MessageResource.signin}
                </button>
            </div>

            <div className="flex items-center justify-between mt-4">
                <span className="w-1/5 border-b dark:border-gray-500 md:w-1/4"></span>
                <a href="#" className="text-xs text-gray-500 uppercase dark:text-gray-200 hover:underline">
                  {MessageResource.signup}
                </a>

                <span className="w-1/5 border-b dark:border-gray-500 md:w-1/4"></span>
            </div>
        </div>
      </div>
    </>
  )
}

export default Login;