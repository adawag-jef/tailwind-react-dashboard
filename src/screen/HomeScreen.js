import React, { useState } from "react";
import Transition from "../components/Transition";
import useBreakpoint from "../hooks/useBreakpoint";

const HomeScreen = () => {
  const [isClosed, setClosed] = useState(false);

  const isStatic = useBreakpoint("sm");
  return (
    <div className="flex bg-gray-100">
      <Transition
        show={isStatic || !isClosed}
        enter="transition-all duration-500"
        enterFrom="-ml-64"
        enterTo="ml-0"
        leave="transition-all duration-500"
        leaveFrom="ml-0"
        leaveTo="-ml-64"
      >
        <aside
          className={`z-20 bg-white w-64 min-h-screen flex flex-col ${
            isStatic ? "" : "fixed"
          }`}
        >
          <div className="bg-white border-r border-b px-4 h-10 flex items-center justify-between">
            <span className="text-blue py-2">Application</span>
            {!isStatic && (
              <button
                className="w-10 p-1"
                aria-label="Close menu"
                title="Close menu"
                onClick={() => setClosed(true)}
              >
                <svg viewBox="0 0 20 20" fill="currentColor" class="x w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            )}
          </div>
          <div className="border-r flex-grow">
            <nav>
              <ul>
                <li className="p-3 hover:bg-gray-500 hover:text-white bg-gray-500 text-white border-r-4 border-red-400 transition-all duration-300">
                  <a href="/">Home</a>
                </li>
                <li className="p-3 hover:bg-gray-500 hover:text-white transition-all duration-300">
                  <a href="/">Profile</a>
                </li>
                <li className="p-3 hover:bg-gray-500 hover:text-white transition-all duration-300">
                  <a href="/">Portfolio</a>
                </li>
                <li className="p-3 hover:bg-gray-500 hover:text-white transition-all duration-300">
                  <a href="/">Contact</a>
                </li>
                <li className="p-3 hover:bg-gray-500 hover:text-white transition-all duration-300">
                  <a href="/">About</a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
      </Transition>
      <Transition
        appear={true}
        show={!isStatic && !isClosed}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-50"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-00"
        leaveTo="opacity-0"
      >
        <div className="fixed inset-0 bg-black opacity-0"></div>
      </Transition>
      <main className="flex-grow flex flex-col min-h-screen">
        <header className="bg-white border-b h-10 flex items-center justify-center">
          {!isStatic && (
            <button
              className="w-10 p-1"
              aria-label="Open menu"
              title="Open menu"
              onClick={() => setClosed(false)}
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                class="view-list w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          )}
          <div className="flex flex-grow items-center justify-between px-3">
            <h1>Home</h1>
            <button className="text-blue-700 underline">Login</button>
          </div>
        </header>
      </main>
    </div>
  );
};

export default HomeScreen;
