import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock?: boolean;
  isNew?: boolean;
}

export function ProductCard({
  id,
  name,
  description,
  price,
  image,
  category,
  inStock = true,
  isNew = false,
}: ProductCardProps) {
  return (
    <Card className="group relative overflow-hidden">
      {/* Product Image */}
      <Link href={`/product/${id}`} className="relative block aspect-square">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
        {isNew && (
          <Badge className="absolute left-2 top-2 bg-blue-500">New</Badge>
        )}
        {!inStock && (
          <Badge variant="destructive" className="absolute left-2 top-2">
            Out of Stock
          </Badge>
        )}
      </Link>

      {/* Quick Actions */}
      <div className="absolute right-2 top-2 flex flex-col gap-2 transition-opacity group-hover:opacity-100 md:opacity-0">
        <Button variant="secondary" size="icon" className="h-8 w-8">
          <Heart className="h-4 w-4" />
          <span className="sr-only">Add to wishlist</span>
        </Button>
        <Button variant="secondary" size="icon" className="h-8 w-8" disabled={!inStock}>
          <ShoppingCart className="h-4 w-4" />
          <span className="sr-only">Add to cart</span>
        </Button>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-1 text-sm text-muted-foreground">
          {category}
        </div>
        <Link href={`/product/${id}`} className="group-hover:underline">
          <h3 className="font-semibold">{name}</h3>
        </Link>
        <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
          {description}
        </p>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-semibold">
            ${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}
          </span>
          <Button
            variant="secondary"
            size="sm"
            className="md:hidden"
            disabled={!inStock}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </Button>
        </div>
      </div>
    </Card>
  );
} 