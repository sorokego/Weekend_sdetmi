import React from "react";
import RectLeftWhite from "../../src/components/Category/images/main/RectLeftWhite";
import RectRightWhite from "../../src/components/Category/images/main/RectRightWhite";
import CategoryItem from "../../src/components/Category/CategoryItem";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { getTagById } from "../../src/helpers/requests";

const TagsPage = (toggleFavorites, favorites) => {
    const router = useRouter();
    const { id } = router.query;
    const { data: tag, status } = useQuery(["tag", id], () => getTagById(id));

    if (!tag) return null;
    const {
        name,
        Services,
        Group: { color },
    } = tag;

    console.log(tag);

    const redirectToService = (item) => {
        router.push(`/service/${item.id}`);
    };

    return status === "success" ? (
        <>
            <div className="min-w-320 s:w-full sm:w-full md:w-full xl:w-full mx-auto -mb-2.5 flex flex-col text-center">
                <div
                    className="p-4 bg-no-repeat bg-cover bg-center color"
                    style={{ backgroundColor: color }}
                >
                    <div className="flex flex-wrap justify-center flex-col">
                        <div className="w-64 mt-4 mb-5 mx-auto flex justify-center items-center">
                            <RectLeftWhite />
                            <h1 className="text-white w-full text-xl font-semibold flex-shrink-0">
                                {name}
                            </h1>
                            <RectRightWhite />
                        </div>
                        <div className="flex flex-wrap justify-between">
                            {Services.map((item, idx) => (
                                <CategoryItem
                                    item={item}
                                    key={idx}
                                    favorites={favorites}
                                    toggleFavorites={(event) =>
                                        toggleFavorites(event, item)
                                    }
                                    redirectToService={() =>
                                        redirectToService(item)
                                    }
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : null;
};

export default TagsPage;
