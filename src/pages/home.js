import React from "react";
import Layout from "../layouts/MainLayout";
import HeroSection from "../sections/index/HeroSection";
import Courses from "../sections/index/Courses";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <Courses />
    </div>
  );
};
export default Home;
