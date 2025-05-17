import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../state/redux/cart-slice";
import FavoriteCard from "../components/parts/favorite-card";
import { NavLink } from "react-router-dom";

export default function Favorite() {
  const DataCart = useSelector((state) => state.cart.value);

  return (
    <div className="max-w-[80%] container mx-auto px-4 py-8">
      <h2 className="text-xl font-bold mb-4">Favorite Items</h2>

      {/* item grid section */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {DataCart.map((item, idx) => (
          <NavLink
            to={`/${item.category}/${item.sub_category}/${item.id}`} // Modify as needed
            key={idx}
          >
            <FavoriteCard
              id={item.id}
              image={item.image} // Optional: check if image exists
              name={item.name}
              price={item.price}
              originalPrice={item.originalPrice} // Optional
              location={item.location}
              isFavorite={true}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
}
