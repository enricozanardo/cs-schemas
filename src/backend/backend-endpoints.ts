import * as z from "zod";

import { htmlColorInputSchema } from "../shared/generic";

export const GetSystemInfoResponseSchema = z.object({
  systemUptime: z.number(),
  cpuUsage: z.number(),
  memActive: z.number(),
  memTotal: z.number(),
  totalDiskUsed: z.number(),
  totalDiskSize: z.number(),
});

export const PostLoginRequestSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export const PostLoginResponseSchema = z.object({
  token: z.string(),
});

export const CustomClientSchema = z.object({
  clientName: z.string(),
  networkLabel: z.string(),
  url: z.string().url(),
  filePageUrl: z
    .string()
    .url()
    .refine(value => /\{\{fileId\}\}/.test(value ?? ""), "URL must contain {{fileId}}"),
  landingPageUrl: z.string().url(),
  logoUrl: z.string().url(),
  sendGridApiKey: z.string(),
  sendGridSender: z.string().email(),
  primaryColor: htmlColorInputSchema,
  secondaryColor: htmlColorInputSchema,
});

export const PostCustomClientRequestSchema = CustomClientSchema;

export const PostCustomClientResponseSchema = z.null();

export const GetCustomClientResponseSchema = CustomClientSchema;

export const GetCustomClientsResponseSchema = z.array(CustomClientSchema);

export const UpdateCustomClientRequestSchema = CustomClientSchema;

export const UpdateCustomClientResponseSchema = z.null();

export const DeleteCustomClientRequestSchema = z.object({
  networkLabel: z.string(),
});

export const DeleteCustomClientResponseSchema = z.null();

export const PostTestEmailRequestSchema = CustomClientSchema.extend({
  recipientEmail: z.string().email(),
});

export const PostTestEmailResponseSchema = z.null();
