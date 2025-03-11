import { z } from "zod";

import {
  CollectionRequestType,
  EventType,
  FileRequestType,
  HistoryItemType,
} from "./core-generic-types";
import { BigIntSchema, SanitizedString } from "../shared/generic";

export const CollectionRequestTypeSchema = z.nativeEnum(CollectionRequestType);

export const FileRequestTypeSchema = z.nativeEnum(FileRequestType);

export const HistoryItemTypeSchema = z.nativeEnum(HistoryItemType);

export const EventTypeSchema = z.nativeEnum(EventType);

export const DownloadPermissionLevelSchema = z.enum(["standard", "public"]);

export const EmailSchema = z.string().email();

export const BufferSchema = z.instanceof(Buffer);

export const TimestampSchema = z.number().int().min(0);

export const FeeSchema = z.number().int().min(0);

export const DateTimeMetadataSchema = z.object({
  unix: TimestampSchema,
  human: z.string(),
});

export const MetaSchema = z.object({
  createdAt: DateTimeMetadataSchema,
  lastModified: DateTimeMetadataSchema,
  expiration: DateTimeMetadataSchema,
  collection: z.object({
    id: z.string(),
    title: z.string(),
  }),
  timedTransfer: z.boolean(),
});

export const FileRequestSchema = z.object({
  fileId: z.string(),
  requestId: z.string(),
  type: FileRequestTypeSchema,
  sender: BufferSchema,
  recipient: BufferSchema,
});

export const FileExpirationSummarySchema = z.object({
  id: z.string(),
  title: SanitizedString.min(3),
  expiration: DateTimeMetadataSchema,
  sender: BufferSchema,
  recipientEmailHash: z.string(),
});

export const HistoryItemSchema = z.object({
  id: z.string(),
  createdAt: DateTimeMetadataSchema,
  activity: HistoryItemTypeSchema,
  userAddress: BufferSchema,
});

export const FileDataSchema = z.object({
  title: SanitizedString.min(3),
  id: z.string(),
  name: z.string(),
  size: z.number(),
  type: z.string(),
  checksum: z.string(),
  hash: z.string(),
  owner: BufferSchema,
  customFields: BufferSchema,
  transferFee: FeeSchema,
  accessPermissionFee: FeeSchema,
  requests: z.array(FileRequestSchema),
  history: z.array(HistoryItemSchema),
  private: z.boolean(),
  downloadPermissionLevel: DownloadPermissionLevelSchema,
});

export const DamFileSchema = z.object({
  meta: MetaSchema,
  data: FileDataSchema,
});

export const CollectionRequestSchema = z.object({
  type: CollectionRequestTypeSchema,
  collectionId: z.string(),
  requestId: z.string(),
  sender: BufferSchema,
  recipient: BufferSchema,
});

export const CollectionSchema = z.object({
  id: z.string(),
  title: SanitizedString.min(3),
  owner: BufferSchema,
  fileIds: z.array(z.string()),
  transferFee: FeeSchema,
  accessPermissionFee: FeeSchema,
  requests: z.array(CollectionRequestSchema),
  downloadPermissionLevel: DownloadPermissionLevelSchema,
});

export const AccountTypeSchema = z.union([
  z.literal("personal"),
  z.literal("company"),
  z.literal("unknown"),
]);

export const PersonalDetailsSchema = z.object({
  name: SanitizedString,
  surname: SanitizedString,
  fiscalCode: SanitizedString,
});

export const CompanyDetailsSchema = z.object({
  name: SanitizedString,
  vat: SanitizedString,
});

export const StorageStatisticsSchema = z.object({
  users: z.number(),
  files: z.number(),
  transfers: z.number(),
});

export const CustomFieldSchema = z.object({
  name: z.string(),
  value: z.string(),
});

export const NetworkSchema = z.object({
  id: z.string(),
  label: SanitizedString.min(3),
  owner: z.string(),
  isPublic: z.boolean(),
  accountsAllowed: z.array(z.string()),
});

export const TransactionSchema = z.object({
  command: z.string(),
  fee: BigIntSchema,
  id: BufferSchema,
  module: z.string(),
  nonce: BigIntSchema,
  params: z.unknown(),
  senderPublicKey: BufferSchema,
  signatures: z.array(BufferSchema),
});
