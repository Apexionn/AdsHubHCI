import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import ProductCard from "../components/parts/product-card";
import { NavLink, useParams } from "react-router-dom";
import { findCategoryByTitle } from "../static/query";
import static_data from "../static/static";
import { CiLocationOn } from "react-icons/ci";

export default function Items() {
  const { category, subcategory } = useParams();
  const [subcategoryData, setSubcategoryData] = useState(null);

  useEffect(() => {
    const categoryObj = findCategoryByTitle(static_data, category);
    if (categoryObj) {
      const foundSub = categoryObj.sub_category.find(
        (sub) => sub.sub_title.toLowerCase() === subcategory.toLowerCase()
      );
      setSubcategoryData(foundSub || null);
    } else {
      setSubcategoryData(null);
    }
  }, [category, subcategory]);

  if (!subcategoryData) {
    return (
      <p className="text-center text-gray-600 py-8">
        Loading or category/subcategory not found...
      </p>
    );
  }

  return (
    <div className="max-w-[80%] container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">{subcategoryData.sub_title}</h2>
      {/* filter selection */}
      <div className="w-50 xl:w-80">
        <Select>
          <SelectTrigger className="w-full bg-muted/40 h-10 text-sm sm:text-base">
            <div className="flex items-center gap-1 sm:gap-2">
              <CiLocationOn className="w-4 h-4 sm:w-5 sm:h-5" />
              <SelectValue placeholder="Filter Berdasarkan" />
            </div>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="jakarta">Terlaris</SelectItem>
            <SelectItem value="bandung">Terdekat</SelectItem>
            <SelectItem value="surabaya">Terbaru</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* item grid section */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {subcategoryData.items.map((item, idx) => (
          <NavLink
            to={`/${category}/${subcategory}/${item.id}`} // Modify as needed
            key={idx}
          >
            <ProductCard
              id={item.id}
              image={item.image} // Optional: check if image exists
              name={item.name}
              category={item.category}
              sub_category={item.sub_category}
              price={item.price}
              originalPrice={item.originalPrice} // Optional
              location={item.location}
              isFavorite={false}
            />
          </NavLink>
        ))}
      </div>
      {/* pagination section */}
      <div className="mt-5">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">100</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
