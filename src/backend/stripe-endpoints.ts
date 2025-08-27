import { z } from "zod";
import { EmailSchema } from "../core";

export const CreateCheckoutSessionParamsSchema = z.object({
  priceId: z.string(),
  email: EmailSchema,
});

export const StripeProductSchema = z.object({
  name: z.string().min(3).max(32),
  priceId: z.string(),
  productId: z.string(),
  description: z.string().min(8).max(144),
  active: z.boolean(),
  tokenAmount: z.number().int(),
  price: z.number().int(),
  currency: z.string(),
});

export const GetProductsResponseSchema = z.array(StripeProductSchema);
