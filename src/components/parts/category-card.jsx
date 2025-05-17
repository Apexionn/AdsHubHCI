import { Card } from "@/components/ui/card";
import dummy from "@/assets/dummy.jpg";

export default function CategoryCard({
  imageUrl,
  title,
  description,
}) {
  return (
    <Card className="relative overflow-hidden w-full rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl py-0 group">
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        {/* Image with overlay and zoom effect */}
        <div className="absolute inset-0 bg-black/30 z-10 group-hover:bg-black/20 transition-colors duration-300"></div>
        <img
          src={dummy || "/api/placeholder/400/320"}
          alt={title || "Card image"}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />

        {/* Floating title */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
            {title || "Card Title"}
          </h3>
          {description && (
            <p className="text-xs sm:text-sm text-white/80">{description}</p>
          )}
        </div>
      </div>
    </Card>
  );
}
