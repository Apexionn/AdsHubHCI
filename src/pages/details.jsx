import { useEffect, useRef, useState } from "react";
import {
  MapPin,
  User,
  ExternalLink,
  Heart,
  Share2,
  Navigation,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import ProductCard from "../components/parts/product-card";
import Autoplay from "embla-carousel-autoplay";
import static_products from "../static/product";
import { NavLink, useParams } from "react-router-dom";
import { findCategoryByTitle } from "../static/query";
import static_data from "../static/static";

// Demo product data
const product = {
  name: "Adidas Samba",
  price: 1500000,
  location: "Civic Center",
  link_gmap: "https://maps.app.goo.gl/pSXDokmNRVEof4XC7",
  seller: "Adidas Official Store",
  sellerRating: 4.9,
  sellerSales: 5243,

  description:
    'Lahir di lapangan, Samba merupakan ikon street style yang tak lekang oleh waktu. Sepatu ini tetap setia pada warisan mereka dengan bahan premium. Sepatu ini terbuat dari kulit dengan lapisan suede dan "Samba" berwarna emas di atas 3-Stripes.',
  condition: "Bekas",
  category: "Sneakers",
  // Images based on the provided UI
  images: [
    "https://picsum.photos/id/237/200/300", // Main product image
    "https://picsum.photos/seed/picsum/200/300", // Side view
    "https://picsum.photos/200/300?grayscale", // Front view
    "https://picsum.photos/200/300/?blur=2", // Top view
  ],
};

// Format price to IDR currency
const formatPrice = (price) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(price);
};

export default function ProductDetail() {
  // State to track the currently selected image
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));

  const { category, subcategory, id } = useParams();
  const [subcategoryData, setSubcategoryData] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const categoryObj = static_data.find(
      (cat) => cat.title.toLowerCase() === category.toLowerCase()
    );

    if (categoryObj) {
      const foundSub = categoryObj.sub_category.find(
        (sub) => sub.sub_title.toLowerCase() === subcategory.toLowerCase()
      );
      setSubcategoryData(foundSub || null);

      if (foundSub && foundSub.items) {
        const foundItem = foundSub.items.find(
          (item) => item.id.toString() === id
        );
        setSelectedItem(foundItem || null);
      } else {
        setSelectedItem(null);
      }
    } else {
      setSubcategoryData(null);
      setSelectedItem(null);
    }
  }, [category, subcategory, id]);

  if (!subcategoryData && !selectedItem) {
    return (
      <p className="text-center text-gray-600 py-8">
        Loading or category/subcategory not found...
      </p>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-5">
      <div className="p-4">
        <div className="bg-primary-foreground rounded-lg shadow-md overflow-hidden mb-4">
          {/* Main Product Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Image Gallery Section */}
            <div className="p-4">
              {/* Main image */}
              <div className="bg-white rounded-lg overflow-hidden mb-4">
                <div className="relative aspect-square">
                  <img
                    src={product.images[selectedImage]}
                    alt={`${product.name} - View ${selectedImage + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`cursor-pointer border-2 rounded transition-all ${
                      selectedImage === index
                        ? "border-lime-500"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="aspect-square relative">
                      <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="p-4 flex flex-col h-full">
              {/* Product Info */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-[var(--textbase)] text-2xl font-bold">{selectedItem.name}</h2>
                  <p className="text-xl font-semibold text-lime-500 mt-2">
                    {formatPrice(selectedItem.price)}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-2 rounded-full transition-colors ${
                      isFavorite
                        ? "text-red-500 bg-background"
                        : "text-gray-400 hover:text-red-500 bg-background"
                    }`}
                    aria-label="Add to favorites"
                  >
                    <Heart
                      size={20}
                      fill={isFavorite ? "currentColor" : "none"}
                    />
                  </button>
                  <button
                    className="p-2 rounded-full text-gray-400 hover:text-blue-500 bg-background transition-colors"
                    aria-label="Share"
                  >
                    <Share2 size={20} />
                  </button>
                </div>
              </div>

              {/* Condition Badge */}
              <div className="mb-4">
                <Badge className="bg-gray-200 text-gray-800 hover:bg-gray-200 py-1">
                  {selectedItem.status}
                </Badge>
              </div>

              {/* Description */}
              <div className="mb-6">
                <p className="text-[var(--textbase)]">{selectedItem.description}</p>
              </div>

              {/* Seller Info */}
              <div className="bg-background rounded-lg p-3 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 text-blue-700 p-2 rounded-full">
                      <User size={18} />
                    </div>
                    <div>
                      <p className="font-medium">{selectedItem.seller}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin size={15} className="text-slate-500" />
                        <span className="ml-1">{selectedItem.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Pushed to bottom with flex-grow */}
              <div className="mt-auto">
                <Button className="w-full bg-lime-500 hover:bg-lime-600 mb-2">
                  Chat Penjual
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-lime-500 text-lime-600 hover:bg-lime-50"
                >
                  Hubungi Pengiklan
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Location Map Section */}
        <div className="bg-primary-foreground rounded-lg shadow-md overflow-hidden">
          <div className="p-4">
            {/* Google Maps iframe */}
            <div className="rounded-lg overflow-hidden border">
              <div className="relative w-full h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7931.105407735822!2d106.66564359330442!3d-6.322328993030627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e4dee0480b01%3A0xc27f6967c3c4c40a!2sCosta%20Rica%20De%20Latinos%20-%20BSD%20City!5e0!3m2!1sid!2sid!4v1746816334402!5m2!1sid!2sid"
                  width="600"
                  height="450"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Map Controls */}
              <div className="bg-background p-3 border-t flex justify-between items-center">
                <div className="flex items-center space-x-1">
                  <MapPin size={15} className="text-slate-800" />
                  <span className="ml-1">{selectedItem.location}</span>
                </div>

                <div className="flex space-x-2">
                  <a
                    href={selectedItem.link_gmap}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lime-500 text-white py-1 px-3 rounded-md text-sm flex items-center hover:bg-lime-600 transition-colors"
                  >
                    <Navigation size={14} className="mr-1" />
                    Lihat di Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* popular product list */}
        <div className="max-w-full container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-6">Produk Lainnya</h2>
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
      </div>
    </div>
  );
}
