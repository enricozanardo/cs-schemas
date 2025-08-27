import * as z from "zod";

import {
  DeleteCustomClientRequestSchema,
  DeleteCustomClientResponseSchema,
  GetCustomClientResponseSchema,
  GetCustomClientsResponseSchema,
  GetSystemInfoResponseSchema,
  PostCustomClientRequestSchema,
  PostCustomClientResponseSchema,
  PostLoginRequestSchema,
  PostLoginResponseSchema,
  PostTestEmailRequestSchema,
  PostTestEmailResponseSchema,
  UpdateCustomClientRequestSchema,
  UpdateCustomClientResponseSchema,
} from "./backend-endpoints";

export type GetSystemInfoResponse = z.infer<typeof GetSystemInfoResponseSchema>;

export type PostLoginRequest = z.infer<typeof PostLoginRequestSchema>;

export type PostLoginResponse = z.infer<typeof PostLoginResponseSchema>;

export type CustomClient = z.infer<typeof PostCustomClientRequestSchema>;

export type PostCustomClientRequest = z.infer<typeof PostCustomClientRequestSchema>;

export type PostCustomClientResponse = z.infer<typeof PostCustomClientResponseSchema>;

export type GetCustomClientResponse = z.infer<typeof GetCustomClientResponseSchema>;

export type GetCustomClientsResponse = z.infer<typeof GetCustomClientsResponseSchema>;

export type UpdateCustomClientRequest = z.infer<typeof UpdateCustomClientRequestSchema>;

export type UpdateCustomClientResponse = z.infer<typeof UpdateCustomClientResponseSchema>;

export type DeleteCustomClientRequest = z.infer<typeof DeleteCustomClientRequestSchema>;

export type DeleteCustomClientResponse = z.infer<typeof DeleteCustomClientResponseSchema>;

export type PostTestEmailRequest = z.infer<typeof PostTestEmailRequestSchema>;

export type PostTestEmailResponse = z.infer<typeof PostTestEmailResponseSchema>;
