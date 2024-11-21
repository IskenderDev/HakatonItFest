import { Button } from "antd";
import React from "react";

const GoToDemo = () => {
  return (
    <div className="bg-primary h-[400px] text-center p-24 flex justify-center">
      <div className="max-w-[1200px]">
        <p className="text-white text-4xl mb-10">
          Остановись с умом, паркуйся с комфортом — забудь о стрессах на дороге
          и всегда находи место для своей машины с помощью умной парковки!
        </p>
        <Button
          size="large"
          className="text-3xl py-9 px-12 text-primary font-bold"
        >
          Посмотреть демо
        </Button>
      </div>
    </div>
  );
};

export default GoToDemo;
