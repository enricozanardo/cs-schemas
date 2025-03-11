import z from "zod";

import {
  AccountTypeSchema,
  CompanyDetailsSchema,
  EmailSchema,
  ExtendExpirationCoreCommandParamsSchema,
  PersonalDetailsSchema,
} from "../core";
import { PassphraseSchema, SanitizedString } from "../shared/generic";

export const ExtendExpirationParamsSchema = z.object({
  amount: z.number(),
  fileIds: z.array(z.string()),
  passphrase: PassphraseSchema,
});

export const ExtendExpirationResponseSchema = ExtendExpirationCoreCommandParamsSchema;

export const InitializeAccountParamsSchema = z.object({
  username: SanitizedString.min(3).refine(data => data.toLocaleLowerCase() !== "deleted", {
    message: "Username cannot be 'deleted'",
  }),
  email: EmailSchema,
  type: AccountTypeSchema,
  companyDetails: CompanyDetailsSchema,
  personalDetails: PersonalDetailsSchema,
  passphrase: PassphraseSchema,
});

export const InitializeAccountResponseSchema = z.object({
  username: z.string(),
  emailHash: z.string(),
});

export const SendTransactionResponseSchema = z.object({ transactionId: z.string() });
