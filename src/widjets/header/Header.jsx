import React from "react";

const Header = () => {
  return (
    <header className="bg-black-600 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex w-full justify-between">
          <img className="h-8" src="/logo.png" alt="Логотип" />
          <ul className="flex space-x-20 text-white">
            <li className="hover:underline cursor-pointer text-blue-600 py-4">
              Главная
            </li>
            <li className="hover:underline cursor-pointer text-blue-600 py-4">
              О проекте
            </li>
          </ul>
          <a
            href="/goToDemo"
            className="bg-blue-700 flex justify-center text-white rounded hover:bg-blue-900 inline-block"
            style={{
              transition: "all ease-in-out .2s",
              width: "200px",
              alignItems: "center",
              height: "40px",
            }}
          >
            Go to Demo
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
