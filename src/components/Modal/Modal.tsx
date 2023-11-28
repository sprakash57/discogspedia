import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.scss";
import { clsx } from "helpers/utils";

const Modal = ({
  children,
  isOpen,
}: {
  children: React.ReactNode;
  isOpen: boolean;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!isVisible) return null;

  return createPortal(
    <article className={clsx(styles.overlay, isOpen && styles.active)}>
      <section className={clsx(styles.container)} tabIndex={-1}>
        {children}
      </section>
    </article>,
    document.querySelector("#modal-root")!
  );
};

export default Modal;
