import { z } from "zod";

import {
  AccountTypeSchema,
  BufferSchema,
  CollectionRequestSchema,
  CollectionSchema,
  CompanyDetailsSchema,
  CustomFieldSchema,
  DamFileSchema,
  DateTimeMetadataSchema,
  DownloadPermissionLevelSchema,
  EmailSchema,
  FeeSchema,
  FileDataSchema,
  FileExpirationSummarySchema,
  FileRequestSchema,
  HistoryItemSchema,
  MetaSchema,
  NetworkSchema,
  PersonalDetailsSchema,
  StorageStatisticsSchema,
  TimestampSchema,
  TransactionSchema,
} from "./core-generic";

export type AccountAddress = z.infer<typeof BufferSchema>;

export type DownloadPermissionLevel = z.infer<typeof DownloadPermissionLevelSchema>;

export type Email = z.infer<typeof EmailSchema>;

export type Timestamp = z.infer<typeof TimestampSchema>;

export type Fee = z.infer<typeof FeeSchema>;

export type DateTimeMetadata = z.infer<typeof DateTimeMetadataSchema>;

export type Meta = z.infer<typeof MetaSchema>;

export type FileRequest = z.infer<typeof FileRequestSchema>;

export type FileExpirationSummary = z.infer<typeof FileExpirationSummarySchema>;

export type HistoryItem = z.infer<typeof HistoryItemSchema>;

export type FileData = z.infer<typeof FileDataSchema>;

export type DamFile = z.infer<typeof DamFileSchema>;

export type CollectionRequest = z.infer<typeof CollectionRequestSchema>;

export type Collection = z.infer<typeof CollectionSchema>;

export type AccountType = z.infer<typeof AccountTypeSchema>;

export type PersonalDetails = z.infer<typeof PersonalDetailsSchema>;

export type CompanyDetails = z.infer<typeof CompanyDetailsSchema>;

export type StorageStatistics = z.infer<typeof StorageStatisticsSchema>;

export type CustomField = z.infer<typeof CustomFieldSchema>;

export type Network = z.infer<typeof NetworkSchema>;

export type Transaction<T> = z.infer<typeof TransactionSchema> & { params: T };

export enum EventType {
  NewBlock = "app:block:new",
  NewTransaction = "app:transaction:new",
}

// the three enums below are kept for legacy reasons
export enum CollectionRequestType {
  Ownership = "OWNERSHIP",
  AccessPermission = "ACCESS_PERMISSION",
  Transfer = "TRANSFER",
}

export enum FileRequestType {
  Ownership = "OWNERSHIP",
  AccessPermission = "ACCESS_PERMISSION",
  Transfer = "TRANSFER",
  TimedTransfer = "TIMED_TRANSFER",
}

export enum HistoryItemType {
  Registration = "REGISTRATION",
  Transfer = "TRANSFER",
  AccessPermission = "ACCESS_PERMISSION",
  TimedTransferSubmission = "TIMED_TRANSFER_SUBMISSION",
  TimedTransferResponse = "TIMED_TRANSFER_RESPONSE",
  AddedToCollection = "ADDED_TO_COLLECTION",
  RemovedFromCollection = "REMOVED_FROM_COLLECTION",
  TransferredViaCollection = "TRANSFERRED_VIA_COLLECTION",
}
