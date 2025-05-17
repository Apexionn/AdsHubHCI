import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Heart, MapPin } from "lucide-react";
import dummy from "@/assets/dummy.jpg";

import { useSelector, useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";

import {
  addToCart,
  removeFromCart,
  resetCart,
} from "../../state/redux/cart-slice";

export default function ProductCard({
  id,
  image = "/api/placeholder/400/320",
  name = "Modern Comfortable Chair",
  category,
  sub_category,
  price = 249.99,
  originalPrice,
  discountPercentage,
  location = "New York, NY",
  isFavorite: initialFavorite = false,
}) {
  const dispatch = useDispatch();

  const [isFavorite, setIsFavorite] = useState(initialFavorite);

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  const toggleFavorite = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart({ id, name, category, sub_category, price, location }));

    setIsFavorite(!isFavorite);
  };

  const formatPrice = (value) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(value);
  };

  const hasDiscount = originalPrice && originalPrice > price;

  return (
    <Card className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 h-full cursor-pointer pt-0">
      {/* Image Container */}
      <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
        <img
          src={dummy}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Favorite Button */}
        <button
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-200 z-10"
          onClick={toggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            size={18}
            className={`transition-colors ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"
            }`}
          />
        </button>

        {/* Discount Badge */}
        {hasDiscount && (
          <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium bg-red-500 text-white rounded-md">
            {`-${
              discountPercentage ||
              Math.round((1 - price / originalPrice) * 100)
            }%`}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        {/* Product Name */}
        <h3 className="text-[var(--textbase)] font-medium mb-1 line-clamp-1">
          {name}
        </h3>

        {/* Location */}
        <div className="flex items-center text-xs text-[var(--secondary-textbase)] mb-2">
          <MapPin size={12} className="mr-1" />
          <span className="line-clamp-1">{location}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-[var(--textbase)]">
            {formatPrice(price)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-[var(--secondary-textbase)] line-through">
              {formatPrice(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </Card>
  );
}
