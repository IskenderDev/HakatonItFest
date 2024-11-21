import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <img src="/logo.png" alt="Logo" className="h-12 mb-4" />
          <div className="mb-4">
            <p className="font-bold">E-mail</p>
            <p>support@weblium.com</p>
          </div>
          <div>
            <p className="font-bold mb-2">Follow us:</p>
            <div className="flex space-x-4">
              <img
                src="/path/to/facebook-icon.png"
                alt="Facebook"
                className="h-6"
              />
              <img
                src="/path/to/linkedin-icon.png"
                alt="LinkedIn"
                className="h-6"
              />
              <img
                src="/path/to/youtube-icon.png"
                alt="YouTube"
                className="h-6"
              />
              <img
                src="/path/to/instagram-icon.png"
                alt="Instagram"
                className="h-6"
              />
              <img
                src="/path/to/twitter-icon.png"
                alt="Twitter"
                className="h-6"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <p className="font-bold mb-4 mt-8">Platform</p>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Examples of sites on Weblium
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Referral program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  For agencies
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 mt-8">Website Builder</p>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Musician/Band
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  CV
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Small business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Restaurant
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Artist
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Wedding
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 mt-8">Templates</p>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Business
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Restaurants
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Photographers
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Landing pages
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold mb-4 mt-8">Partners</p>
            <ul>
              <li>
                <a href="#" className="hover:underline">
                  Template Monster
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Zemez
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Crocoblock
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  MotoCMS
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  MotoPress
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  MonsterONE
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Web Design Library
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center text-sm">
          <p>&copy; 2024 Weblium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
