import React, { useState } from "react";
import styles from "./index.module.css";
import arr from "../../assets/arr.svg";

export const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion_item}>
      <div className={styles.accordion__top}>
        <div className={styles.accordion_title}> {title}</div>

        <button
          className={`${styles.accordion_button} ${
            isOpen ? styles.active : ""
          }`}
          onClick={toggleAccordion}
        >
          <img src={arr} alt="" />
        </button>
      </div>

      {isOpen && <div className={styles.accordion_content}>{content}</div>}
    </div>
  );
};
