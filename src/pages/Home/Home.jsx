import React from "react";
import HowItWork from "../../widjets/howItWork/HowItWork";
import Trigger from "../../widjets/trigger/Trigger";
import Video from "../../widjets/Video/Video";
import GoToDemo from "../../widjets/goToDemo/GoToDemo";
import Header from "../../widjets/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-36 items-center">
        <HowItWork />
        <Trigger />
        <Video />
        <GoToDemo />
      </div>
    </>
  );
};

export default Home;
