import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  brand: z.string(),
  category: z.string(),
  price: z.number().positive(),
  oldPrice: z.number().positive().optional(),
  rating: z.number().min(0).max(5),
  reviewCount: z.number().int().nonnegative(),
  availability: z.enum(["In Stock", "Limited Stock", "Preorder", "Out of Stock"]),
  warranty: z.string(),
  deliveryEstimate: z.string(),
  images: z.array(z.string().url()),
  shortDescription: z.string(),
  description: z.string(),
  specs: z.record(z.string()),
  features: z.array(z.string()),
  tags: z.array(z.string()),
  isBestSeller: z.boolean(),
  isLatest: z.boolean()
});

export const CartItemSchema = z.object({
  productId: z.string(),
  quantity: z.number().int().min(1).max(99)
});

export const AppointmentSchema = z.object({
  serviceId: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  preferredDate: z.string(),
  notes: z.string().max(800).optional()
});

export const SupportTicketSchema = z.object({
  subject: z.string().min(4),
  message: z.string().min(12),
  priority: z.enum(["low", "normal", "high", "urgent"]).default("normal")
});

export type Product = z.infer<typeof ProductSchema>;
export type CartItem = z.infer<typeof CartItemSchema>;
export type AppointmentInput = z.infer<typeof AppointmentSchema>;
export type SupportTicketInput = z.infer<typeof SupportTicketSchema>;
