import SubCatItem from "./SubCatItem";
import { useState } from "react";

const SubCategories = ({ subCategories, filterSubCategories }) => {
    const [selectedCategory, setSelectedCategory] = useState(0);

    return (
        <div className="px-4 mb-4 max-w-sm mx-auto flex justify-between">
            <SubCatItem
                item={{
                    name: "Новое",
                    isActive: true,
                }}
                key={0}
                onClick={() => {
                    setSelectedCategory(0);
                    // !TBD - reset
                }}
                isSelected={selectedCategory === 0}
            />
            {subCategories?.map((item, idx) => {
                return (
                    <SubCatItem
                        item={item}
                        key={idx + 1}
                        onClick={() => {
                            setSelectedCategory(idx + 1);
                            filterSubCategories(item);
                        }}
                        isSelected={selectedCategory === idx + 1}
                    />
                );
            })}
        </div>
    );
};

export default SubCategories;
