import styles from "./Menu.module.css";
import cn from "classnames";

const Menu = ({ active, setActive, children }) => {
    return (
        <div
            className={cn(styles.menu, { [`${styles.active}`]: active })}
            onClick={() => setActive(false)}
        >
            <div
                className={cn(styles.menu__content, {
                    [`${styles.active}`]: active,
                })}
                onClick={(e) => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default Menu;
