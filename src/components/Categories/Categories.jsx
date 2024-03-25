import React, { useState } from "react";
import styles from "../Categories/Categories.module.css";
import { categoriesArray } from "../../data";

export default function Categories({ chooseCategory }) {
  const [categories, setCategories] = useState(categoriesArray);

  return (
    <section className="buttonsSelction">
      {categories.map((element, index) => {
        return (
          <button
            onClick={() => chooseCategory(element.key)}
            className={styles.categoriesOption}
            key={index}
          >
            {element.title}
          </button>
        );
      })}
    </section>
  );
}
