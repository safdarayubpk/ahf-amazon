import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const banners = [
  {
    id: 1,
    title: "Quality Auto Parts",
    description: "Find the perfect parts for your vehicle",
    image: "/images/banner_1.jpeg",
    link: "/category/all",
  },
  {
    id: 2,
    title: "Engine Parts Collection",
    description: "Explore our wide range of engine components",
    image: "/images/Engine_parts.jpeg",
    link: "/category/engine-parts",
  },
  {
    id: 3,
    title: "Interior Accessories",
    description: "Upgrade your vehicle's interior",
    image: "/images/Interior_accessories.jpeg",
    link: "/category/interior",
  },
];

export function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  return (
    <div className="relative overflow-hidden bg-gray-100">
      <Container>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px]">
          {/* Slides */}
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="relative h-full w-full">
                <Image
                  src={banner.image}
                  alt={banner.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 flex items-center">
                  <div className="space-y-4 p-4 text-white md:p-6 lg:p-8">
                    <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                      {banner.title}
                    </h2>
                    <p className="text-lg md:text-xl">
                      {banner.description}
                    </p>
                    <Button
                      asChild
                      variant="default"
                      size="lg"
                      className="bg-white text-black hover:bg-gray-100"
                    >
                      <a href={banner.link}>Shop Now</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-6 w-6" />
            <span className="sr-only">Previous slide</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
            <span className="sr-only">Next slide</span>
          </Button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-white w-4"
                    : "bg-white/50"
                }`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
} 