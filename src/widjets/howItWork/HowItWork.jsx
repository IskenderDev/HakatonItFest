import { Button, Flex } from "antd";
import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const HowItWork = () => {
  return (
    <Flex
      className="max-w-[1200px] justify-between items-center text-justify"
      gap={"100px"}
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 3 }} 
      >
        <h2 className="text-primary font-extrabold text-4xl mt-10">
          Как это работает
        </h2>
        <p className="mt-3">
          Система позволяет водителям бронировать парковочные места через
          приложение, где они видят доступные места в реальном времени. После
          выбора места начинается оплата, а для заезда дается определенное время
          15 минут. Если водитель не успевает приехать вовремя, бронирование
          аннулируется, и средства не возвращаются.
        </p>
        <NavLink to='/about'>
          <Button
            size="large"
            className="mt-10 bg-primary text-white py-6 px-10"
          >
            Подробне....
          </Button>
        </NavLink>
      </motion.div>
      <motion.div
        className="shadow-2xl w-[200%]"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 3,}} 
      >
        <img
          className="rounded-xl w-full h-auto"
          src="src/assets/IMG.png"
          alt="trigger"
        />
      </motion.div>
    </Flex>
  );
};

export default HowItWork;
