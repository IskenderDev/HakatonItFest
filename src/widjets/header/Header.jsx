import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [style, setStyle] = useState({
    opacity: 0,
    transform: "translateY(-100%)",
    transition: "opacity 3s ease-in-out, transform 3s ease-in-out",
  });

  return (
    <header className="bg-black-600 py-4 flex justify-center">
      <div className="container max-w-[1200px] flex justify-between items-center">
        <div className="flex w-full justify-between">
          <img className="h-8" src="/logo.png" alt="Логотип" />
          <ul className="flex w-[250px] justify-between text-white">
            <li className="hover:underline hover:scale-125 transition-all cursor-pointer font-extrabold text-blue-600 py-4">
              <NavLink to="/">Главная</NavLink>
            </li>
            <li className="hover:underline hover:scale-125 transition-all cursor-pointer text-blue-600 py-4">
              <NavLink to="/about">О проекте</NavLink>
            </li>
          </ul>
          <NavLink to='/log-in'>
            <Button size="large" className="bg-primary text-white py-6 px-10">
              Посмотреть Демо
            </Button>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
