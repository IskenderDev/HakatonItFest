// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from "react";
import Header from "../../widjets/header/Header";
import {Card, Typography, Collapse} from "antd";
import { motion } from "framer-motion";


const {Title, Paragraph} = Typography;
const {Panel} = Collapse;

const TypingEffect = ({text, typingSpeed = 25, delay = 2000}) => {
    const [currentText, setCurrentText] = useState("");

    useEffect(() => {
        const handleTyping = () => {
            if (currentText.length < text.length) {
                setCurrentText((prev) => prev + text[currentText.length]);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, text, typingSpeed]);

    return <div className="text-2xl font-semibold text-gray-800">{currentText}</div>;
};

const About = () => {
    const longText = `
    Парковка в крупных городах всегда была головной болью для водителей. Большие города с их оживлённым движением и ограниченным пространством для парковок создают серьёзные неудобства. Это приводит к значительным потерям времени и стресса. Наша система умного бронирования парковочных мест позволяет избежать этих проблем, предоставляя пользователям возможность заранее выбрать и забронировать свободное место. 
  `;

    const staticText = `
    Наше приложение помогает водителям бронировать парковочные места заранее и отслеживать их доступность в реальном времени. Мы предлагаем зарядные станции для электромобилей и быстрые способы оплаты. В будущем планируем добавить новые функции для улучшения парковки в городе, сочетая экологичность и удобство.
  `;

    return (
        <div>
            <Header/>

            <div className="container mx-auto p-4">
                <div className='flex justify-around items-center w-full h-96'>
                    <div className="text-justify w-1/2">
                        <TypingEffect text={longText} typingSpeed={25}/>
                    </div>
                    <div className='w-1/2 flex justify-center'>
                        <img src='src/assets/img1.png' alt="intro" className='w-1/2 h-72 object-cover'/>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0}} // начальное положение и прозрачность
                    animate={{ opacity: 1}} // финальное положение
                    transition={{duration: 6, delay:3}}
                    className="h-[350px]"
                >
                    <div className="flex justify-center gap-8 text-justify">
                        {/* Карточка 1 */}
                        <div
                            className="pt-5 flex flex-col items-center w-80 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="#1746A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-square-parking">
                                <rect width="18" height="18" x="3" y="3" rx="1"/>
                                <path d="M9 17V7h4a3 3 0 0 1 0 6H9"/>
                            </svg>
                            <Card
                                title="Интерактивная карта"
                                bordered={false}
                            >
                                <Paragraph className="text-gray-600">
                                    Просматривайте доступные парковочные места на карте в реальном
                                    времени. Свободные места отображаются зелёным цветом, а занятые —
                                    красным.
                                </Paragraph>
                            </Card>
                        </div>

                        {/* Карточка 2 */}
                        <div
                            className="pt-5 flex flex-col items-center w-80 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="#1746A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-circle-dollar-sign">
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/>
                                <path d="M12 18V6"/>
                            </svg>
                            <Card
                                title="Автоматическая оплата"
                                bordered={false}
                            >
                                <Paragraph className="text-gray-600">
                                    Заезжайте на свободное место, и система автоматически начнёт
                                    оплату. Всё происходит быстро и удобно
                                </Paragraph>
                            </Card>
                        </div>

                        {/* Карточка 3 */}
                        <div
                            className="pt-5 flex flex-col items-center w-80 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="#1746A2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                 className="lucide lucide-leaf">
                                <path
                                    d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                                <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                            </svg>
                            <Card
                                title="Экологичные решения"
                                bordered={false}
                            >
                                <Paragraph className="text-gray-600">
                                    Зарезервируйте место с зарядкой для электромобиля или выберите
                                    другие удобные экологические опции.
                                </Paragraph>
                            </Card>
                        </div>
                    </div>
                </motion.div>

                <Collapse className="mt-6 text-2xl">
                    <Panel header="Почему это удобно?" key="1">
                        <Paragraph className="text-lg">
                            Система умного бронирования парковочных мест решает проблему поиска
                            парковки в городах. С помощью приложения вы можете заранее
                            забронировать место или просто заехать на свободное место и начать
                            оплату автоматически. Кроме того, наша система позволяет существенно
                            снизить уровень стресса водителей, минимизировать время нахождения в
                            движении и улучшить общее качество парковочного процесса.
                        </Paragraph>
                    </Panel>
                </Collapse>

                <Collapse className="mt-6 text-2xl">
                    <Panel header="Дополнительная информация" key="2">
                        <Paragraph className="text-lg">
                            {staticText}
                        </Paragraph>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
};

export default About;
