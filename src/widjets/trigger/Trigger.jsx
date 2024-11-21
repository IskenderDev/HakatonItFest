import { Button, Flex } from "antd";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Trigger = () => {
  return (
    <Flex
      className="max-w-[1200px] justify-center align-middle text-justify "
      gap={"100px"}
    >
      <motion.div
        className="shadow-2xl w-[110%]"
        initial={{ x: -200, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 3 }} 
      >
        <img
          className="rounded-xl w-full"
          src="src/assets/parking.png"
          alt="trigger"
        />
      </motion.div>
      <motion.div
        initial={{ x: -200, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }} 
        transition={{ duration: 3,}} 
      >
        <h2 className="text-primary font-extrabold text-4xl mt-10">
          Работа датчика
        </h2>
        <p className="mt-3">
          Датчик фиксирует заезд и выезд автомобиля, отправляя данные на сервер
          через Wi-Fi или другие сети. Информация обновляется в приложении, а
          индикатор меняет цвет: зелёный — место свободно, красный — занято.
          Питание осуществляется от аккумулятора с энергосберегающим режимом.
          Также предусмотрена функция подогрева, чтобы предотвратить образование
          льда.
        </p>
        <NavLink to={'/about'}>
          <Button
            size="large"
            className="mt-10 bg-primary text-white py-6 px-10"
          >
            Подробне....
          </Button>
        </NavLink>
      </motion.div>
    </Flex>
  );
};

export default Trigger;
