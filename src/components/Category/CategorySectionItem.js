import React from "react";
import { baseUrl } from "../../constants";
import Link from "next/link";

const CategorySectionItem = ({ item }) => {
    const { _id: id, name, image, isActive } = item;
    console.log(item);

    return isActive ? (
        <>
            <div className="block mt-8 w-full md:w-auto h-1 md:h-0.5 rounded-sm bg-gray-200"
                 height="3px"
            ></div>
            <Link
                href={`/categories/${id}`}
                className="flex flex-col w-34 s:w-40 md:w-40 mb-7 mt-4 md:mr-4 cursor-pointer"
            >
                <a>
                    <img
                        alt={image}
                        src={`${baseUrl}/images/mainPage/${image}`}
                        // src={image}
                        className="mt-8"
                        width="100%"
                        height="100%"
                    />

                    <button
                        className="mt-6 w-full h-14 text-2xl md:text-base font-medium bg-green hover:bg-green-200 text-white font-bold py-2 px-4 border-b-4 border-green-500 hover:border-green-400 rounded-lg">
                        {name}
                    </button>
                </a>
            </Link>
            {/*<div className="block mt-8 w-full md:w-auto h-1 md:h-0.5 rounded-sm bg-gray-200"*/}
            {/*     height="3px"*/}
            {/*></div>*/}
        </>

    ) : null;
};

export default React.memo(CategorySectionItem);
