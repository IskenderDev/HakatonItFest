import React from "react";
import Header from "../../widjets/header/Header";
import Create from "../../widjets/create/Create";
import HowItWork from "../../widjets/howItWork/HowItWork";
import Trigger from "../../widjets/trigger/Trigger";
import Video from "../../widjets/Video/Video";
import GoToDemo from "../../widjets/goToDemo/GoToDemo";
import Footer from "../../widjets/footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Create />
      <div className="flex flex-col gap-36 items-center">
        <HowItWork />
        <Trigger />
        <Video />
      </div>
      <GoToDemo />
      <Footer />
    </>
  );
};

export default Home;
