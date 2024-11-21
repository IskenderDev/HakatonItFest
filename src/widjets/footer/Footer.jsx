import React, { useEffect, useState } from "react";
import Facebook from "../../assets/facebook.svg";
import Incle from "../../assets/incle.svg";
import Instagram from "../../assets/instagram.svg";
import Xtern from "../../assets/xtern.svg";
import Youtube from "../../assets/youtube.svg";

const Footer = () => {
  const [style, setStyle] = useState({
    opacity: 0,
    transform: "translateY(100%)",
    transition: "opacity 3s ease-in-out, transform 3s ease-in-out",
  });

  useEffect(() => {
    // Запуск анимации через 0.5 секунды
    setTimeout(() => {
      setStyle({
        opacity: 1,
        transform: "translateY(0)",
        transition: "opacity 3s ease-in-out, transform 3s ease-in-out",
      });
    }, 100);
  }, []);

  return (
    <footer
      style={style}
      className="bg-primary text-white py-10 mt-8 flex justify-center"
    >
      <div className="container max-w-[1200px] px-4">
        <div className="flex justify-between">
          <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
          <div className="mb-4">
            <p className="font-bold">E-mail</p>
            <p>support@weblium.com</p>
          </div>
          <div>
            <p className="font-bold mb-2">Follow us:</p>
            <div className="flex space-x-4">
              <img src={Facebook} alt="Facebook" className="h-6" />
              <img src={Incle} alt="LinkedIn" className="h-6" />
              <img src={Instagram} alt="Instagram" className="h-6" />
              <img src={Xtern} alt="Twitter" className="h-6" />
              <img src={Youtube} alt="YouTube" className="h-6" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="font-extrabold mb-4 mt-10">Platform</p>
            <ul>
              <li>
                <a href="#" className="hover:underline  transition-all">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Examples of sites on Weblium
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Affiliate program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Referral program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  For agencies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 mt-10">Website Builder</p>
            <ul>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Musician/Band
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  CV
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Small business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Restaurant
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Artist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Wedding
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 mt-10">Templates</p>
            <ul>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Photographers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Landing pages
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-black mb-4 mt-10">Partners</p>
            <ul>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Template Monster
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Zemez
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Crocoblock
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  MotoCMS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  MotoPress
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  MonsterONE
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline transition-all">
                  Web Design Library
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 text-center text-sm">
          <p>&copy; 2024 Weblium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
