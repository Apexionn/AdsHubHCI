import { useEffect, useState } from "react";
import CategoryCard from "../components/parts/category-card";
import { NavLink, useParams } from "react-router-dom";
import { findCategoryByTitle } from "../static/query";

import static_data from "../static/static";

export default function SubCategory() {
  const param = useParams();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    setCategory(findCategoryByTitle(static_data, param.category));
  }, []);

  if (!category) {
    return (
      <p className="text-center text-gray-600 py-8">
        Loading or category not found...
      </p>
    );
  }

  return (
    <div className="max-w-[80%] container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">{param.category}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {category.sub_category.map((sub, idx) => (
          <NavLink
            to={`/${category.title}/${sub.sub_title}`}
            key={idx}
          >
            <CategoryCard
              title={sub.sub_title}
              description={sub.description}
              imageUrl={sub.imageUrl}
              category={"fashion"}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
