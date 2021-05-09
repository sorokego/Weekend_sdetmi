import styles from "./Modal.module.css";
import cn from "classnames";

const Modal = ({ active, setActive, children }) => {
    return (
        <div
            className={cn(styles.modal, { [`${styles.active}`]: active })}
            onClick={() => setActive(false)}
        >
            <div
                className={cn(styles.modal__content, {
                    [`${styles.active}`]: active,
                })}
                className={active ? "modal__content active" : "modal__content"}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="z-100 p-8">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
