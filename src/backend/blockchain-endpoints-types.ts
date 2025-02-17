import z from "zod";

import {
  ExtendExpirationParamsSchema,
  ExtendExpirationResponseSchema,
  InitializeAccountParamsSchema,
  InitializeAccountResponseSchema,
  SendTransactionResponseSchema,
} from "./blockchain-endpoints";

export type ExtendExpirationParams = z.infer<typeof ExtendExpirationParamsSchema>;

export type ExtendExpirationResponse = z.infer<typeof ExtendExpirationResponseSchema>;

export type InitializeAccountParams = z.infer<typeof InitializeAccountParamsSchema>;

export type InitializeAccountResponse = z.infer<typeof InitializeAccountResponseSchema>;

export type SendTransactionResponse = z.infer<typeof SendTransactionResponseSchema>;
