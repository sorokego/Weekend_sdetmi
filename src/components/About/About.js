import React from "react";
import MainImg from "./MainImg";

const About = () => {
    return (
        <div className="w-80 s:w-full sm:w-full md:w-full xl:w-full mx-auto flex flex-col text-center">
            <h1 className="text-3xl font-bold mb-3 mx-6 text-Orange font-alt font-bold">
                Куда сходить
                <br/> с ребёнком
                <br/> в выходной?
            </h1>
            <MainImg/>
            <h2 className="text-lg mx-6">
                Лучшие виды досуга <br/>
                с детьми в Вашем городе
            </h2>
            {/*<div className="d-block mt-6 md:w-auto h-1 md:h-0.5 rounded-sm bg-gray-200"></div>*/}
        </div>
    );
};

export default About;
