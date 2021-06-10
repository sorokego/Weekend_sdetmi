import React from "react";
import MainImg from "./MainImg";

const About = () => {
    return (
        <div className="w-80 s:w-full sm:w-full md:w-full xl:w-full mx-auto flex flex-col text-center">
            <h1 className="font-alt text-3xl font-bold mb-3 mx-6 text-Orange font-alt font-bold">
                Куда сходить
                <br /> с ребёнком
                <br /> в выходной?
            </h1>
            <MainImg />
            <h2 className="font-sans font-medium text-base text-Gray">
              Лучшие виды досуга
              <br /> с детьми в Вашем городе</h2>
        </div>
    );
};

export default About;
