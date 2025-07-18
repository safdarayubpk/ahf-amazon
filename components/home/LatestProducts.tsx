import { Container } from "@/components/ui/container";
import { ProductCard } from "@/components/product/ProductCard";

// This is temporary mock data - will be replaced with real data from the database
const products = [
  {
    id: "1",
    name: "High Performance Brake Pads",
    description: "Premium ceramic brake pads for superior stopping power and reduced brake dust. Perfect for daily driving and high-performance vehicles.",
    price: 89.99,
    image: "/images/brake pads.jpeg",
    category: "Brake System",
    isNew: true,
  },
  {
    id: "2",
    name: "LED Light Kit",
    description: "Complete LED lighting kit for interior and exterior. Energy-efficient and long-lasting illumination for your vehicle.",
    price: 149.99,
    image: "/images/DS_Light_Kit.jpg",
    category: "Electrical",
    inStock: true,
  },
  {
    id: "3",
    name: "Engine Oil Filter",
    description: "High-quality oil filter that removes harmful contaminants. Helps extend engine life and maintain optimal performance.",
    price: 12.99,
    image: "/images/filter.jpeg",
    category: "Engine Parts",
    inStock: true,
  },
  {
    id: "4",
    name: "Luxury Car Pillow",
    description: "Memory foam neck support pillow for car seats. Premium leather finish with ergonomic design for maximum comfort.",
    price: 34.99,
    image: "/images/car_pillow.jpeg",
    category: "Interior",
    isNew: true,
  },
];

export function LatestProducts() {
  return (
    <Container>
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold">Latest Products</h2>
          <p className="mt-2 text-muted-foreground">
            Check out our newest additions to the catalog
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </Container>
  );
} 