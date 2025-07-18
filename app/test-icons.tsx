'use client';

import { ShoppingCart, Heart, Search, Menu, User, Home, Package } from 'lucide-react';
import { useIsMobile, useIsTablet, useIsDesktop } from '@/lib/hooks/use-media-query';
import { Container } from '@/components/ui/container';

export default function TestIcons() {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const isDesktop = useIsDesktop();

  return (
    <Container>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-wrap gap-4">
          <ShoppingCart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <Heart className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <Search className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <Menu className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <User className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <Home className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
          <Package className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10" />
        </div>
        <div className="text-sm sm:text-base lg:text-lg">
          Current breakpoint: {' '}
          {isMobile ? 'Mobile' : isTablet ? 'Tablet' : isDesktop ? 'Desktop' : 'Unknown'}
        </div>
      </div>
    </Container>
  );
} 