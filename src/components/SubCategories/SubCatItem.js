import styles from "./SubCatItem.module.css";

const SubCatItem = ({ item, onClick, isSelected }) => {
    const { name, isActive } = item;

    return isActive ? (
        isSelected ? (
            <div
                className={`${styles.buttonActive} px-3 py-2.5 group flex flex-col items-center cursor-pointer bg-primary`}
                onClick={onClick}
            >
                <p className="max-w-25 text-center text-BlackGray text-sm font-semibold text-White">
                    {name}
                </p>
            </div>
        ) : (
            <div
                className={`${styles.button} px-3 py-2.5 group flex flex-col items-center cursor-pointer`}
                onClick={onClick}
            >
                <p className="max-w-25 text-center text-BlackGray text-sm font-semibold text-Grey">
                    {name}
                </p>
            </div>
        )
    ) : null;
};

export default SubCatItem;
