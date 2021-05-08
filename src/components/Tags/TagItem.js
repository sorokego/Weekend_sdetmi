import Link from "next/link";

const TagItem = ({ color, item: { id, name, isActive } }) => {
    return isActive ? (
        <Link
            href={`/tags/${id}`}
            className={`px-3.5 py-2.5 rounded-2.5 no-underline text-white text-sm font-semibold hover:shadow-drop`}
            style={{ backgroundColor: `${color}` }}
        >
            {name}
        </Link>
    ) : null;
};

export default TagItem;
