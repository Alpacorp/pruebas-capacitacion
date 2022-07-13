import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["God of War"]);

  const onAddCategory = (newCategory) => {
    const lowerCaseCategory = newCategory.toLowerCase();
    const existentCategory = categories.map((category) =>
      category.toLowerCase()
    );

    if (existentCategory.includes(lowerCaseCategory)) return;
    setCategories((category) => [newCategory, ...category]);
  };

  return (
    <div>
      <h1>GifExpertApp</h1>
      <AddCategory
        onNewCategory={(newCategory) => onAddCategory(newCategory)}
      />
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </div>
  );
};

export default GifExpertApp;
