import * as z from "zod";

import {
  AccountTypeSchema,
  BufferSchema,
  CompanyDetailsSchema,
  DownloadPermissionLevelSchema,
  EmailSchema,
  FeeSchema,
  FileDataSchema,
  NetworkSchema,
  PersonalDetailsSchema,
  TimestampSchema,
} from "./core-generic";
import { Command } from "./core-commands-types";
import { BigIntSchema, SanitizedString } from "../shared/generic";

export const CommandSchema = z.nativeEnum(Command);

export const CancelRequestCoreCommandParamsSchema = z.object({
  requestId: z.string(),
  collectionId: z.string(),
  fileId: z.string(),
  timestamp: TimestampSchema,
});

export const CreateCollectionCoreCommandParamsSchema = z.object({
  title: SanitizedString.min(3),
  transferFee: FeeSchema,
  accessPermissionFee: FeeSchema,
  timestamp: TimestampSchema,
  fileIds: z.array(z.string()),
  downloadPermissionLevel: DownloadPermissionLevelSchema,
});

export const CreateFileCoreCommandParamsSchema = z.object({
  fileData: FileDataSchema.omit({ owner: true, id: true, requests: true, history: true }).extend({
    transferFee: FeeSchema,
    accessPermissionFee: FeeSchema,
    private: z.boolean(),
    timestamp: TimestampSchema,
  }),
  metaData: z.object({
    collectionId: z.string(),
    expiration: TimestampSchema,
    discount: z.number(),
  }),
});

export const CreateNetworkCoreCommandParamsSchema = NetworkSchema.omit({
  id: true,
  owner: true,
}).extend({
  timestamp: TimestampSchema,
});

export const DeleteAccountCoreCommandParamsSchema = z.object({
  timestamp: TimestampSchema,
});

export const ExtendExpirationCoreCommandParamsSchema = z.object({
  fileIds: z.array(z.string()),
  amount: z.number(),
  timestamp: TimestampSchema,
});

export const InitializeAccountCoreCommandParamsSchema = z.object({
  email: EmailSchema,
  username: SanitizedString.min(3),
  timestamp: TimestampSchema,
  type: AccountTypeSchema,
  personalDetails: PersonalDetailsSchema,
  companyDetails: CompanyDetailsSchema,
});

export const RequestCollectionAccessCoreCommandParamsSchema = z.object({
  id: z.string(),
  timestamp: TimestampSchema,
});

export const RequestCollectionOwnershipCoreCommandParamsSchema = z.object({
  id: z.string(),
  timestamp: TimestampSchema,
});

export const RequestCollectionTransferCoreCommandParamsSchema = z.object({
  collectionId: z.string(),
  recipientAddress: BufferSchema,
  timestamp: TimestampSchema,
});

export const RequestFileAccessCoreCommandParamsSchema = z.object({
  id: z.string(),
  timestamp: TimestampSchema,
});

export const RequestFileOwnershipCoreCommandParamsSchema = z.object({
  id: z.string(),
  timestamp: TimestampSchema,
});

export const RequestFileTransferCoreCommandParamsSchema = z.object({
  fileId: z.string(),
  recipientAddress: BufferSchema,
  timestamp: TimestampSchema,
});

export const RespondToCollectionRequestCoreCommandParamsSchema = z.object({
  collectionId: z.string(),
  requestId: z.string(),
  accept: z.boolean(),
  updatedFileData: z.array(
    z.object({
      fileId: z.string(),
      newHash: z.string(),
    })
  ),
  timestamp: TimestampSchema,
});

export const RespondToFileRequestCoreCommandParamsSchema = z.object({
  fileId: z.string(),
  requestId: z.string(),
  accept: z.boolean(),
  newHash: z.string(),
  timestamp: TimestampSchema,
});

export const TimedTransferCoreCommandParamsSchema = FileDataSchema.omit({
  owner: true,
  id: true,
  requests: true,
  history: true,
}).extend({
  transferFee: FeeSchema,
  accessPermissionFee: FeeSchema,
  private: z.boolean(),
  recipientEmailHash: z.string(),
  timestamp: TimestampSchema,
  expiration: TimestampSchema,
});

export const TransferTokenCoreCommandParamsSchema = z.object({
  tokenID: z.string(),
  amount: BigIntSchema,
  recipientAddress: z.string(),
  data: z.string(),
});

export const UpdateAccountDetailsCoreCommandParamsSchema = z.object({
  type: AccountTypeSchema,
  personalDetails: PersonalDetailsSchema,
  companyDetails: CompanyDetailsSchema,
  timestamp: TimestampSchema,
});

export const UpdateCollectionCoreCommandParamsSchema = z.object({
  collectionId: z.string(),
  transferFee: FeeSchema,
  accessPermissionFee: FeeSchema,
  fileIds: z.array(z.string()),
  timestamp: TimestampSchema,
  downloadPermissionLevel: DownloadPermissionLevelSchema,
});

export const UpdateFileCoreCommandParamsSchema = z.object({
  fileId: z.string(),
  transferFee: FeeSchema,
  accessPermissionFee: FeeSchema,
  private: z.boolean(),
  customFields: BufferSchema,
  timestamp: TimestampSchema,
  downloadPermissionLevel: DownloadPermissionLevelSchema,
});

export const UpdateNetworkCoreCommandParamsSchema = NetworkSchema.omit({ label: true }).extend({
  timestamp: TimestampSchema,
});
