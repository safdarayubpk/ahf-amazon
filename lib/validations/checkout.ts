import * as z from 'zod';

export const addressSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  streetAddress: z.string().min(5, 'Street address must be at least 5 characters'),
  city: z.string().min(2, 'City must be at least 2 characters'),
  state: z.string().min(2, 'State must be at least 2 characters'),
  postalCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Invalid postal code'),
  country: z.string().min(2, 'Country must be at least 2 characters'),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number'),
});

export const paymentSchema = z.object({
  cardNumber: z.string().regex(/^\d{16}$/, 'Invalid card number'),
  expiryMonth: z.string().regex(/^(0[1-9]|1[0-2])$/, 'Invalid expiry month'),
  expiryYear: z.string().regex(/^\d{4}$/, 'Invalid expiry year'),
  cvv: z.string().regex(/^\d{3,4}$/, 'Invalid CVV'),
  cardholderName: z.string().min(3, 'Cardholder name must be at least 3 characters'),
});

export const orderSchema = z.object({
  items: z.array(z.object({
    productId: z.string().min(1, 'Product ID is required'),
    quantity: z.number().int().positive('Quantity must be positive'),
    price: z.number().positive('Price must be positive'),
  })).min(1, 'Order must contain at least one item'),
  shippingAddress: addressSchema,
  billingAddress: addressSchema,
  payment: paymentSchema,
  subtotal: z.number().positive('Subtotal must be positive'),
  tax: z.number().nonnegative('Tax cannot be negative'),
  shipping: z.number().nonnegative('Shipping cost cannot be negative'),
  total: z.number().positive('Total must be positive'),
}); 