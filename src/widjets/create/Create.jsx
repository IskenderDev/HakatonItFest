import React from "react";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

const Create = () => {
  return (
    <div className="bg-primary text-white py-10 mt-8 flex justify-center align-center">
      <div className="max-w-[1200px] flex justify-between gap-32 mr-64 items-center">
        <div className="w-[500px] flex flex-col gap-5">
          <h1 className="font-black text-4xl">О проекте</h1>
          <p>
            Парковка в городах — одна из самых актуальных проблем для водителей.
            Система умного бронирования парковочных мест решает эту задачу,
            предлагая водителям возможность заранее забронировать парковку или
            просто заехать на свободное место и начать оплату автоматически. Все
            доступные парковочные места отображаются на интерактивной карте в
            реальном времени, что позволяет избежать длительных поисков
            свободных мест.
          </p>
          <NavLink to='/demo'>
            <Button
              size="large"
              className="bg-primary w-[250px] text-white py-6 px-10"
            >
              Посмотреть Демо
            </Button>
          </NavLink>
        </div>
        <div className="w-[300px] ">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Q_jyuedek6A?si=6zI9qJ4FiQ3DDNrr"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Create;
