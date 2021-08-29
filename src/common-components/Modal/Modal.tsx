import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";

const Modal = ({ children, isOpen }: { children: React.ReactNode, isOpen: boolean }) => {
    const [attach, setAttach] = useState(false);

    useEffect(() => {
        setAttach(true);
        return () => setAttach(false);
    }, []);

    if (!isOpen || !attach) return null;

    return createPortal(
        <article className={styles.overlay}>
            <section className={styles.container} tabIndex={-1} aria-labelledby="ProfileModalLabel">
                {children}
            </section>
        </article>,
        document.querySelector("#modal-root")!
    );
};

export default Modal;
