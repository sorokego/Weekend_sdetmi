import React from "react";
import MainImg from './MainImg';

const About = () => {
  return (
    <div className="w-80 s:w-full sm:w-full md:w-full xl:w-full mx-auto flex flex-col text-center">
      <h1 className="text-3xl font-bold mb-3 mx-6 text-Orange">Куда сходить<br /> с ребёнком<br /> в выходной?</h1>
    <MainImg />
    </div>
  );
};

export default About;
