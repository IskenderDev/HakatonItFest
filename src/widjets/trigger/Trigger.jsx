import { Flex } from "antd";

const Trigger = () => {
  return (
    <Flex className="max-w-[1200px]" gap={'100px'}>
      <div>
        <img src="src\assets\parking.png" alt="trigger" />
      </div>
      <div>
        <h2 className="text-primary font-extrabold text-4xl">Работа датчика</h2>
        <p>
          Датчик фиксирует заезд и выезд автомобиля, отправляя данные на сервер
          через Wi-Fi или другие сети. Информация обновляется в приложении, а
          индикатор меняет цвет: зелёный — место свободно, красный — занято.
          Питание обеспечивается аккумулятором с энергосберегающим режимом.
        </p>
      </div>
    </Flex>
  );
};

export default Trigger;
