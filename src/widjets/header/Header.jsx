import React, { useEffect, useState } from "react";
import { Button } from 'antd'

const Header = () => {
  const [style, setStyle] = useState({
    opacity: 0,
    transform: "translateY(-100%)",
    transition: "opacity 3s ease-in-out, transform 3s ease-in-out",
  });

  useEffect(() => {
    // Запуск анимации после загрузки компонента
    setTimeout(() => {
      setStyle({
        opacity: 1,
        transform: "translateY(0)",
        transition: "opacity 3s ease-in-out, transform 3s ease-in-out",
      });
    }, 100); // Задержка 0.5 секунды перед началом анимации
  }, []);

  return (
    <header
      style={style}
      className="bg-black-600 py-4 flex justify-center"
    >
      <div className="container max-w-[1200px] flex justify-between items-center">
        <div className="flex w-full justify-between">
          <img className="h-8" src="/logo.png" alt="Логотип" />
          <ul className="flex w-[250px] justify-between text-white">
            <li className="hover:underline hover:scale-125 transition-all cursor-pointer font-extrabold text-blue-600 py-4">
              Главная
            </li>
            <li className="hover:underline hover:scale-125 transition-all cursor-pointer text-blue-600 py-4">
              О проекте
            </li>
          </ul>
          <Button size="large" className="bg-primary text-white py-6 px-10">
          Посмотреть Демо
        </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
