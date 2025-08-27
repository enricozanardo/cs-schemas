import { z } from "zod";
import { CreateCheckoutSessionParamsSchema, StripeProductSchema } from "./stripe-endpoints";

export type CreateCheckoutSessionParams = z.infer<typeof CreateCheckoutSessionParamsSchema>;

export type StripeProduct = z.infer<typeof StripeProductSchema>;

export type GetProductsResponse = z.infer<typeof StripeProductSchema>[];
