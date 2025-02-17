import { z } from "zod";

import {
  CancelRequestCoreCommandParamsSchema,
  CreateCollectionCoreCommandParamsSchema,
  CreateFileCoreCommandParamsSchema,
  CreateNetworkCoreCommandParamsSchema,
  ExtendExpirationCoreCommandParamsSchema,
  InitializeAccountCoreCommandParamsSchema,
  RequestCollectionAccessCoreCommandParamsSchema,
  RequestCollectionOwnershipCoreCommandParamsSchema,
  RequestCollectionTransferCoreCommandParamsSchema,
  RequestFileAccessCoreCommandParamsSchema,
  RequestFileOwnershipCoreCommandParamsSchema,
  RequestFileTransferCoreCommandParamsSchema,
  RespondToCollectionRequestCoreCommandParamsSchema,
  RespondToFileRequestCoreCommandParamsSchema,
  TimedTransferCoreCommandParamsSchema,
  TransferTokenCoreCommandParamsSchema,
  UpdateAccountDetailsCoreCommandParamsSchema,
  UpdateCollectionCoreCommandParamsSchema,
  UpdateFileCoreCommandParamsSchema,
  UpdateNetworkCoreCommandParamsSchema,
} from "./core-commands";
import { SerializedBigInt } from "../utils";

export enum Command {
  CancelRequest = "cancelRequest",
  CreateCollection = "createCollection",
  CreateFile = "createFile",
  CreateNetwork = "createNetwork",
  ExtendExpiration = "extendExpiration",
  InitializeAccount = "initializeAccount",
  RequestCollectionAccess = "requestCollectionAccess",
  RequestCollectionOwnership = "requestCollectionOwnership",
  RequestCollectionTransfer = "requestCollectionTransfer",
  RequestFileAccess = "requestFileAccess",
  RequestFileOwnership = "requestFileOwnership",
  RequestFileTransfer = "requestFileTransfer",
  RespondToCollectionRequest = "respondToCollectionRequest",
  RespondToFileRequest = "respondToFileRequest",
  TimedTransfer = "timedTransfer",
  UpdateAccountDetails = "updateAccountDetails",
  UpdateCollection = "updateCollection",
  UpdateFile = "updateFile",
  UpdateNetwork = "updateNetwork",
  Transfer = "transfer", // token transfer
}

export type CancelRequestCoreCommandParams = z.infer<typeof CancelRequestCoreCommandParamsSchema>;

export type CreateCollectionCoreCommandParams = z.infer<
  typeof CreateCollectionCoreCommandParamsSchema
>;

export type CreateFileCoreCommandParams = z.infer<typeof CreateFileCoreCommandParamsSchema>;

export type CreateNetworkCoreCommandParams = z.infer<typeof CreateNetworkCoreCommandParamsSchema>;

export type ExtendExpirationCoreCommandParams = z.infer<
  typeof ExtendExpirationCoreCommandParamsSchema
>;

export type InitializeAccountCoreCommandParams = z.infer<
  typeof InitializeAccountCoreCommandParamsSchema
>;

export type RequestCollectionAccessCoreCommandParams = z.infer<
  typeof RequestCollectionAccessCoreCommandParamsSchema
>;

export type RequestCollectionOwnershipCoreCommandParams = z.infer<
  typeof RequestCollectionOwnershipCoreCommandParamsSchema
>;

export type RequestCollectionTransferCoreCommandParams = z.infer<
  typeof RequestCollectionTransferCoreCommandParamsSchema
>;

export type RequestFileAccessCoreCommandParams = z.infer<
  typeof RequestFileAccessCoreCommandParamsSchema
>;

export type RequestFileOwnershipCoreCommandParams = z.infer<
  typeof RequestFileOwnershipCoreCommandParamsSchema
>;

export type RequestFileTransferCoreCommandParams = z.infer<
  typeof RequestFileTransferCoreCommandParamsSchema
>;

export type RespondToCollectionRequestCoreCommandParams = z.infer<
  typeof RespondToCollectionRequestCoreCommandParamsSchema
>;

export type RespondToFileRequestCoreCommandParams = z.infer<
  typeof RespondToFileRequestCoreCommandParamsSchema
>;

export type TimedTransferCoreCommandParams = z.infer<typeof TimedTransferCoreCommandParamsSchema>;

export type TransferTokenCoreCommandParams =
  | z.infer<typeof TransferTokenCoreCommandParamsSchema>
  | SerializedBigInt<z.infer<typeof TransferTokenCoreCommandParamsSchema>>;

export type UpdateAccountDetailsCoreCommandParams = z.infer<
  typeof UpdateAccountDetailsCoreCommandParamsSchema
>;

export type UpdateCollectionCoreCommandParams = z.infer<
  typeof UpdateCollectionCoreCommandParamsSchema
>;

export type UpdateFileCoreCommandParams = z.infer<typeof UpdateFileCoreCommandParamsSchema>;

export type UpdateNetworkCoreCommandParams = z.infer<typeof UpdateNetworkCoreCommandParamsSchema>;
