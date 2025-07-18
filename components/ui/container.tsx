'use client';

import { cn } from '@/lib/utils';
import { CONTAINER_SIZES } from '@/lib/constants';
import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  size?: keyof typeof CONTAINER_SIZES;
  className?: string;
}

export function Container({ 
  children, 
  size = 'xl',
  className 
}: ContainerProps) {
  return (
    <div className={cn(
      'mx-auto w-full px-4 sm:px-6 lg:px-8',
      {
        'max-w-screen-sm': size === 'sm',
        'max-w-screen-md': size === 'md',
        'max-w-screen-lg': size === 'lg',
        'max-w-screen-xl': size === 'xl',
        'max-w-screen-2xl': size === '2xl',
      },
      className
    )}>
      {children}
    </div>
  );
} 