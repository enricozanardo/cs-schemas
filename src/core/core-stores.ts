import z from "zod";

import {
  AccountTypeSchema,
  BufferSchema,
  CompanyDetailsSchema,
  PersonalDetailsSchema,
} from "./core-generic";
import { BigIntSchema, SanitizedString } from "../shared/generic";

const AccountFileRequestSchema = z.object({ fileId: z.string(), requestId: z.string() });

const AccountCollectionRequestSchema = z.object({
  collectionId: z.string(),
  requestId: z.string(),
});

export const AccountStoreDataSchema = z.object({
  filesOwned: z.array(z.string()),
  filesAllowed: z.array(z.string()),
  collectionsOwned: z.array(z.string()),
  collectionsAllowed: z.array(z.string()),
  incomingFileRequests: z.array(AccountFileRequestSchema),
  outgoingFileRequests: z.array(AccountFileRequestSchema),
  incomingCollectionRequests: z.array(AccountCollectionRequestSchema),
  outgoingCollectionRequests: z.array(AccountCollectionRequestSchema),
  emailHash: z.string(),
  username: SanitizedString.min(3),
  type: AccountTypeSchema,
  personalDetails: PersonalDetailsSchema,
  companyDetails: CompanyDetailsSchema,
});

export const AccountPropsSchema = z
  .object({ address: BufferSchema, token: z.object({ balance: BigIntSchema }) })
  .merge(AccountStoreDataSchema);

export const MapStoreDataSchema = z.object({
  address: BufferSchema,
  lsk32address: z.string(),
  username: SanitizedString.min(3),
  emailHash: z.string(),
});

export const StatisticStoreDataSchema = z.object({
  accounts: z.number(),
  files: z.number(),
  transfers: z.number(),
  collections: z.number(),
});
