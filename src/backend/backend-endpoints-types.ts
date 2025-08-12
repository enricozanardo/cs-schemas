import z from "zod";

import {
  GetCustomClientResponseSchema,
  GetCustomClientsResponseSchema,
  GetSystemInfoResponseSchema,
  PostCustomClientRequestSchema,
  PostCustomClientResponseSchema,
  PostLoginRequestSchema,
  PostLoginResponseSchema,
} from "./backend-endpoints";

export type GetSystemInfoResponse = z.infer<typeof GetSystemInfoResponseSchema>;

export type PostLoginRequest = z.infer<typeof PostLoginRequestSchema>;

export type PostLoginResponse = z.infer<typeof PostLoginResponseSchema>;

export type CustomClient = z.infer<typeof PostCustomClientRequestSchema>;

export type PostCustomClientRequest = z.infer<typeof PostCustomClientRequestSchema>;

export type PostCustomClientResponse = z.infer<typeof PostCustomClientResponseSchema>;

export type GetCustomClientResponse = z.infer<typeof GetCustomClientResponseSchema>;

export type GetCustomClientsResponse = z.infer<typeof GetCustomClientsResponseSchema>;
