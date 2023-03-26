import React,{useState} from 'react'
import MessageResource from '../../constants';
import Lock from '../../assets/svgs/Lock';
import Email from '../../assets/svgs/Email';
import User from '../../assets/svgs/User';
import Google from '../../assets/Google'

const Signup = () => {
  const [Fd,setFd] = useState({username:'',email:'',password:'',confirmPassword:''})
  const handleSignupGoogle = () => {
    console.log(MessageResource.signinGoogle);
  }
  const handleChange = (e) => setFd({...Fd,[e.target.name]:e.target.value})
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Fd);
    //signup
  }
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
            <form className="w-full max-w-md">
                <div className="flex justify-center mx-auto">
                    <img className="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="" />
                </div>
                
                <div className="flex items-center justify-center mt-6">
                  <p className="w-1/3 pb-4 font-bold text-2xl text-center text-gray-800 uppercase  dark:border-blue-400 dark:text-white">
                      {MessageResource.signup}
                  </p>
                </div>

                <div className="flex items-center justify-center mt-6">
                  {/* GOOGLE */}
                  <button className="flex w-full items-center justify-center mt-4 text-gray-600 bg-blue-200 transition-colors duration-300 transform border rounded-lg
                    dark:border-gray-700 dark:text-gray-100 dark:bg-blue-500 hover:bg-blue-300 dark:hover:bg-blue-300"
                    onClick={handleSignupGoogle}
                  >
                      <Google />
                      <span className="w-5/6 px-4 py-3 font-semibold text-center">
                        {MessageResource.signinGoogle}
                      </span>
                  </button>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="w-1/5 border-b dark:border-gray-500 lg:w-1/4"></span>
                    <p className="text-xs text-center text-gray-600 uppercase dark:text-gray-400">
                      {MessageResource.OR}
                    </p>
                  <span className="w-1/5 border-b dark:border-gray-500 lg:w-1/4"></span>
                </div>

                <div className="relative flex items-center mt-8">
                    <User />
                    <input type="text" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Username" name="username" value={Fd.username} onChange={handleChange}
                    />
                </div>

                <div className="relative flex items-center mt-6">
                    <Email />
                    <input type="email" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                      placeholder="Email address" name="email" value={Fd.email} onChange={handleChange} />
                </div>

                <div className="relative flex items-center mt-4">
                    <Lock />
                    <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                      placeholder="Password" name="password" value={Fd.password} onChange={handleChange}/>
                </div>

                <div className="relative flex items-center mt-4">
                    <Lock />
                    <input type="password" className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" 
                      placeholder="Confirm Password" name="confirmPassword" value={Fd.confirmPassword} onChange={handleChange} />
                </div>

              <div className="mt-6">
                <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  onClick={handleSubmit}
                >
                    {MessageResource.signup}
                </button>

                <div className="mt-6 text-center ">
                    <a href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                        {MessageResource.oldAccount}
                    </a>
                </div>
              </div>
            </form>
          </div>
      </section>
    </>
  )
}

export default Signup;