import React from "react";
import Head from "next/head";
import About from "../src/components/About";
import CategorySection from "../src/components/Category";
import Tags from "../src/components/Tags";
import { useQuery } from "react-query";
import { getGroups } from "../src/helpers/requests";

const MainPage = () => {
    const { data: groups, status } = useQuery("groups", getGroups);

    return (
        <div className="App">
            <Head>
                <title>
                    Куда сходить с ребенком в выходной? Топ лучших видов досуга
                </title>
                <meta
                    name="description"
                    content="Отдых с детьми может быть разный"
                />
            </Head>
            <About />
            <CategorySection />
            <Tags groups={groups} />
        </div>
    );
};

export default MainPage;
