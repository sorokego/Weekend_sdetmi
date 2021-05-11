import React from "react";
import { baseUrl } from "../../constants";
import Link from "next/link";

const CategorySectionItem = ({ item }) => {
    const { _id: id, name, image, isActive } = item;
    console.log(item);

    return isActive ? (
        <Link
            href={`/categories/${id}`}
            className="flex flex-col w-34 s:w-40 md:w-40 mb-7 md:mr-4 cursor-pointer"
        >
            <a>
                <img
                    alt={image}
                    src={image}
                    // className="svg-categorySection-small s:svg-categorySection-big mb-2.5 rounded-xl"
                    width="100"
                    height="100"
                />
                <h2
                    // className="text-white w-full text-lg md:text-base font-medium"
                    className="w-full text-lg md:text-base font-medium"
                >
                    {name}
                </h2>
            </a>
        </Link>
    ) : null;
};

export default CategorySectionItem;