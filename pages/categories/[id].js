import React from "react";
import Head from "next/head";
import SubCategories from "../../src/components/SubCategories";
import Category from "../../src/components/Category/Category";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import {
    getCategoryById,
    getServices,
    getSubCategoriesFull,
} from "../../src/helpers/requests";
import Cookies from "js-cookie";

const CategoryPage = ({ toggleFavorites, favorites }) => {
    const router = useRouter();
    const { id } = router.query;
    const [filteredCategory, setFilteredCategory] = useState(null);
    const [toggle, setToggle] = useState(false);
    const [subCatId, setSubCatId] = useState(null);

    const { data: category } = useQuery(["category", id], () =>
        getCategoryById(id)
    );

    const subCategoriesIds = category?.services?.map(
        (item) => item.SubcategoryId
    );
    const uniqSubCategoriesIds = Array.from(new Set(subCategoriesIds));

    const { data: subCategories } = useQuery(
        "subCategoriesFull",
        () => getSubCategoriesFull(uniqSubCategoriesIds),
        { enabled: !!subCategoriesIds }
    );

    const { data: services } = useQuery("services", () => getServices());

    const filterForSubCategory = (item) => {
        const filtered = services.filter((el) => el.SubcategoryId === item.id);
        setFilteredCategory(filtered);
        setSubCatId(item.id);
        subCatId === item.id ? setToggle(!toggle) : setToggle(true);
    };

    useEffect(() => {
        Cookies.set("favorites", JSON.stringify(favorites), { expires: 10 });
    }, [favorites]);

    const redirectToService = (item) => {
        router.push(`/service/${item.id}`);
    };

    return (
        <>
            <Head>
                <title>
                    В выходной ребенок дома? Топ лучших идей, чем можно заняться
                </title>
                <meta
                    name="description"
                    content="Все детские развлечения. Дома с ребенком"
                />
            </Head>
            <SubCategories
                subCategories={subCategories}
                filterSubCategories={filterForSubCategory}
            />
            <Category
                category={category}
                filteredCategory={filteredCategory}
                toggle={toggle}
                toggleFavorites={toggleFavorites}
                favorites={favorites}
                redirectToService={redirectToService}
            />
        </>
    );
};

export default CategoryPage;
