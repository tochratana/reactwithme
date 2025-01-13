import React, { useState } from "react";
export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleHeader, setIsVisibleHeader] = useState(false);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleClickHeader = () => {
    setIsVisibleHeader(!isVisibleHeader);
  };
  return (
    <header className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img src="../../../public/img/logo.png" alt="" className="w-14" />
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Careers{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    History{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Projects{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-gray-500 transition hover:text-gray-500/75"
                    href="#"
                  >
                    {" "}
                    Blog{" "}
                  </a>
                </li>
              </ul>
            </nav>

            <div className="hidden md:relative md:block">
              <button
                type="button"
                className="overflow-hidden rounded-full border border-gray-300 shadow-inner button-profile"
                onClick={handleClick}
              >
                <span className="sr-only">Toggle dashboard menu</span>
                <img
                  src="./public/img/profile.jpg"
                  alt=""
                  className="size-10 object-cover"
                />
              </button>

              <div
                className="absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg"
                style={{ display: isVisible ? "block" : "none" }}
                role="menu"
              >
                <div className="p-2 ">
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    My profile
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Billing summary
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                    role="menuitem"
                  >
                    Team settings
                  </a>
                </div>

                <div className="p-2">
                  <form method="POST" action="#">
                    <button
                      type="submit"
                      className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                      role="menuitem"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                        />
                      </svg>
                      Logout
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={handleClickHeader}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isVisibleHeader ? "block" : "hidden"
        } block md:hidden relative`}
      >
        <ul className="flex flex-col justify-between h-[270px] border-2 border-white drop-shadow-xl w-[95%] absolute left-1/2 -translate-x-1/2">
          <li className="bg-white drop-shadow-2xl px-5 py-2 w-[100%] m-auto">
            <a href="#">Hello</a>
          </li>
          <li className="bg-white drop-shadow-2xl px-5 py-2 w-[100%] m-auto">
            <a href="#">Hello</a>
          </li>
          <li className="bg-white drop-shadow-2xl px-5 py-2 w-[100%] m-auto">
            <a href="#">Hello</a>
          </li>
          <li className="bg-white drop-shadow-2xl px-5 py-2 w-[100%] m-auto">
            <a href="#">Hello</a>
          </li>
          <li className="bg-white drop-shadow-2xl px-5 py-2 w-[100%] m-auto">
            <a href="#">Hello</a>
          </li>
          <li className="bg-white drop-shadow-2xl px-5 py-2 w-[100%] m-auto">
            <a href="#">Hello</a>
          </li>
        </ul>
      </div>
    </header>
  );
};
