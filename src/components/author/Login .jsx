import React, { useState } from "react";

export const Login = ({error , functionn}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  let formhandler = (e) => {
    e.preventDefault();
    functionn(email , password) 
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className="flex font-poppins items-center justify-center bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 text-gray-700">
        <div className="h-screen w-full flex justify-center items-center ">
          <div className="grid gap-8">
            <div
              id="borders"
              className="bg-gradient-to-r from-gray-700 to-gray-500 rounded-[26px] m-4"
            >
              <div className="border-[20px] border-transparent rounded-[20px] bg-gray-900 shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
                <h1 className="pt-8 pb-6 font-bold text-white text-5xl text-center cursor-default">
                  Log in
                </h1>
                <form
                  className="space-y-4"
                  onSubmit={formhandler}
                >
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 text-gray-300 text-lg"
                    >
                      Email
                    </label>
                    <input
                      className="border-[3px] focus:border-[4px] p-3 bg-gray-800 text-gray-300 shadow-md placeholder-gray-500  focus:scale-105 ease-in-out duration-300 border-gray-700 rounded-lg w-full outline-none"
                      type="email"
                      placeholder="Email"
                      required
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="mb-2 text-gray-300 text-lg"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Password"
                      className="border-[3px] focus:border-[4px] p-3 bg-gray-800 text-gray-300 shadow-md placeholder-gray-500  focus:scale-105  ease-in-out duration-300 border-gray-700 rounded-lg w-full outline-none"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                      required
                    />
                  </div>
                  <button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-600 hover:to-blue-600  transition duration-300 ease-in-out"
                    type="submit"
                  >
                    LOG IN
                  </button>
                </form>
                {error && (
                  <a className="flex group text-red-400 transition-all duration-100 ease-in-out  justify-center items-center mt-5 ">
                    <span className="bg-left-bottom bg-gradient-to-r text-lg from-red-400 to-red-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      Invalid Login
                    </span>
                  </a>
                )}
                <div
                  id="third-party-auth"
                  className="flex items-center justify-center mt-5 flex-wrap "
                >
                  {[
                    "Linkedin",
                    "Github",
                    "Facebook",
                    "Twitter",
                  ].map((provider, index) => (
                    <a
                      key={index}
                      href={`https://${provider.toLowerCase()}.com`}
                      className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1 mt-5 bg-slate-800"
                    >
                      <img
                        className={`max-w-[25px] ${
                          provider === "Github" || provider === "Twitter"
                            ? "filter dark:invert"
                            : ""
                        }`}
                        src={`https://ucarecdn.com/${
                          {
                            Google: "8f25a2ba-bdcf-4ff1-b596-088f330416ef",
                            Linkedin: "95eebb9c-85cf-4d12-942f-3c40d7044dc6",
                            Github: "be5b0ffd-85e8-4639-83a6-5162dfa15a16",
                            Facebook: "6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9",
                            Twitter: "82d7ca0a-c380-44c4-ba24-658723e2ab07",
                            Apple: "3277d952-8e21-4aad-a2b7-d484dad531fb",
                          }[provider]
                        }/`}
                        alt={provider}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
