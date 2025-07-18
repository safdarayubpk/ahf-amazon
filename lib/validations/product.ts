import * as z from 'zod';

export const productSchema = z.object({
  name: z.string().min(3, 'Product name must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  price: z.number().positive('Price must be positive'),
  category: z.string().min(1, 'Category is required'),
  images: z.array(z.string().url('Invalid image URL')).min(1, 'At least one image is required'),
  stock: z.number().int().nonnegative('Stock cannot be negative'),
  sku: z.string().min(3, 'SKU must be at least 3 characters'),
  specifications: z.array(z.object({
    name: z.string().min(1, 'Specification name is required'),
    value: z.string().min(1, 'Specification value is required'),
  })).optional(),
});

export const productReviewSchema = z.object({
  rating: z.number().min(1).max(5, 'Rating must be between 1 and 5'),
  title: z.string().min(3, 'Title must be at least 3 characters'),
  comment: z.string().min(10, 'Comment must be at least 10 characters'),
  userId: z.string().min(1, 'User ID is required'),
  productId: z.string().min(1, 'Product ID is required'),
}); 