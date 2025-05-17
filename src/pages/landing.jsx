import { useRef } from "react";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Banner from "../components/parts/banner";
import CategoryCard from "../components/parts/category-card";
import ProductCard from "../components/parts/product-card";

import static_data from "../static/static";
import static_products from "../static/product";
import { NavLink } from "react-router-dom";

export default function Landing() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  return (
    <>
      {/* banner */}
      <Banner />
      {/* category list */}
      <div className="max-w-[80%] container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Our Categories</h2>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {static_data.map((category, idx) => (
            <NavLink to={`/${category.title}`} key={idx}>
              <CategoryCard
                title={category.title}
                description={category.description}
                imageUrl={category.imageUrl}
                category={category.title.toLowerCase()}
              />
            </NavLink>
          ))}
        </div>
      </div>
      {/* popular product list */}
      <div className="max-w-[80%] container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Popular Products</h2>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {static_products.map((product, idx) => (
              <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <NavLink
                    to={`/${product.category}/${product.sub_category}/${product.id}`} // Modify as needed
                  >
                    <ProductCard
                      key={product.id}
                      id={product.id}
                      image={product.image}
                      name={product.name}
                      category={product.category}
                      sub_category={product.sub_category}
                      price={product.price}
                      originalPrice={product.originalPrice}
                      location={product.location}
                      isFavorite={false}
                    />
                  </NavLink>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
