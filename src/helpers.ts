import { z, ZodSchema } from "zod";
import {
  CancelRequestCoreCommandParams,
  CancelRequestCoreCommandParamsSchema,
  Command,
  CreateCollectionCoreCommandParams,
  CreateCollectionCoreCommandParamsSchema,
  CreateFileCoreCommandParams,
  CreateFileCoreCommandParamsSchema,
  CreateNetworkCoreCommandParams,
  CreateNetworkCoreCommandParamsSchema,
  ExtendExpirationCoreCommandParams,
  ExtendExpirationCoreCommandParamsSchema,
  InitializeAccountCoreCommandParams,
  InitializeAccountCoreCommandParamsSchema,
  RequestCollectionAccessCoreCommandParams,
  RequestCollectionAccessCoreCommandParamsSchema,
  RequestCollectionOwnershipCoreCommandParams,
  RequestCollectionOwnershipCoreCommandParamsSchema,
  RequestCollectionTransferCoreCommandParams,
  RequestCollectionTransferCoreCommandParamsSchema,
  RequestFileAccessCoreCommandParams,
  RequestFileAccessCoreCommandParamsSchema,
  RequestFileOwnershipCoreCommandParams,
  RequestFileOwnershipCoreCommandParamsSchema,
  RequestFileTransferCoreCommandParams,
  RequestFileTransferCoreCommandParamsSchema,
  RespondToCollectionRequestCoreCommandParams,
  RespondToCollectionRequestCoreCommandParamsSchema,
  RespondToFileRequestCoreCommandParams,
  RespondToFileRequestCoreCommandParamsSchema,
  TimedTransferCoreCommandParams,
  TimedTransferCoreCommandParamsSchema,
  TransferTokenCoreCommandParams,
  TransferTokenCoreCommandParamsSchema,
  UpdateAccountDetailsCoreCommandParams,
  UpdateAccountDetailsCoreCommandParamsSchema,
  UpdateCollectionCoreCommandParams,
  UpdateCollectionCoreCommandParamsSchema,
  UpdateFileCoreCommandParams,
  UpdateFileCoreCommandParamsSchema,
  UpdateNetworkCoreCommandParams,
  UpdateNetworkCoreCommandParamsSchema,
  Action,
  GetEmailOrUsernameMapActionParamsSchema,
  GetFilesActionParamsSchema,
  GetFilesByIdsActionParamsSchema,
  GetAggregatedAccountActionParamsSchema,
  GetFileByIdActionParamsSchema,
  GetFileByChecksumActionParamsSchema,
  GetCollectionsActionParamsSchema,
  GetCollectionByIdActionParamsSchema,
  GetCollectionsByIdsActionParamsSchema,
  GetStorageStatisticsActionParamsSchema,
  GetAllowedNetworksForAddressActionParamsSchema,
  GetNotificationDataActionParamsSchema,
  SetReadStatusActionParamsSchema,
  AccountIsInitializedActionParamsSchema,
  SetReadAllStatusActionParamsSchema,
  AccountIsTakenActionParamsSchema,
  GetAccountActionParamsSchema,
  AccountIsInitializedActionParams,
  AccountIsTakenActionParams,
  GetAccountActionParams,
  GetAggregatedAccountActionParams,
  GetAllowedNetworksForAddressActionParams,
  GetCollectionByIdActionParams,
  GetCollectionsActionParams,
  GetCollectionsByIdsActionParams,
  GetEmailOrUsernameMapActionParams,
  GetFileByChecksumActionParams,
  GetFileByIdActionParams,
  GetFilesActionParams,
  GetFilesByIdsActionParams,
  GetNotificationDataActionParams,
  GetStorageStatisticsActionParams,
  SetReadAllStatusActionParams,
  SetReadStatusActionParams,
  AccountIsInitializedActionResponse,
  AccountIsTakenActionResponse,
  GetAccountActionResponse,
  GetAggregatedAccountActionResponse,
  GetAllowedNetworksForAddressActionResponse,
  GetCollectionByIdActionResponse,
  GetCollectionsActionResponse,
  GetCollectionsByIdsActionResponse,
  GetEmailOrUsernameMapActionResponse,
  GetFileByChecksumActionResponse,
  GetFileByIdActionResponse,
  GetFilesActionResponse,
  GetFilesByIdsActionResponse,
  GetNotificationDataActionResponse,
  GetStorageStatisticsActionResponse,
  SetReadAllStatusActionResponse,
  SetReadStatusActionResponse,
  AccountIsInitializedActionResponseSchema,
  AccountIsTakenActionResponseSchema,
  GetAccountActionResponseSchema,
  GetAggregatedAccountActionResponseSchema,
  GetAllowedNetworksForAddressActionResponseSchema,
  GetCollectionByIdActionResponseSchema,
  GetCollectionsActionResponseSchema,
  GetCollectionsByIdsActionResponseSchema,
  GetEmailOrUsernameMapActionResponseSchema,
  GetFileByChecksumActionResponseSchema,
  GetFileByIdActionResponseSchema,
  GetFilesActionResponseSchema,
  GetFilesByIdsActionResponseSchema,
  GetNotificationDataActionResponseSchema,
  GetStorageStatisticsActionResponseSchema,
  SetReadAllStatusActionResponseSchema,
  SetReadStatusActionResponseSchema,
  CommandSchema,
  ActionSchema,
  DeleteAccountCoreCommandParamsSchema,
  DeleteAccountCoreCommandParams,
} from "./core";

export const commandRequestSchemas: { [key in Command]: ZodSchema } = {
  [Command.CancelRequest]: CancelRequestCoreCommandParamsSchema,
  [Command.CreateCollection]: CreateCollectionCoreCommandParamsSchema,
  [Command.CreateFile]: CreateFileCoreCommandParamsSchema,
  [Command.CreateNetwork]: CreateNetworkCoreCommandParamsSchema,
  [Command.DeleteAccount]: DeleteAccountCoreCommandParamsSchema,
  [Command.ExtendExpiration]: ExtendExpirationCoreCommandParamsSchema,
  [Command.InitializeAccount]: InitializeAccountCoreCommandParamsSchema,
  [Command.RequestCollectionAccess]: RequestCollectionAccessCoreCommandParamsSchema,
  [Command.RequestCollectionOwnership]: RequestCollectionOwnershipCoreCommandParamsSchema,
  [Command.RequestCollectionTransfer]: RequestCollectionTransferCoreCommandParamsSchema,
  [Command.RequestFileAccess]: RequestFileAccessCoreCommandParamsSchema,
  [Command.RequestFileOwnership]: RequestFileOwnershipCoreCommandParamsSchema,
  [Command.RequestFileTransfer]: RequestFileTransferCoreCommandParamsSchema,
  [Command.RespondToCollectionRequest]: RespondToCollectionRequestCoreCommandParamsSchema,
  [Command.RespondToFileRequest]: RespondToFileRequestCoreCommandParamsSchema,
  [Command.TimedTransfer]: TimedTransferCoreCommandParamsSchema,
  [Command.UpdateAccountDetails]: UpdateAccountDetailsCoreCommandParamsSchema,
  [Command.UpdateCollection]: UpdateCollectionCoreCommandParamsSchema,
  [Command.UpdateFile]: UpdateFileCoreCommandParamsSchema,
  [Command.UpdateNetwork]: UpdateNetworkCoreCommandParamsSchema,
  [Command.Transfer]: TransferTokenCoreCommandParamsSchema,
};

export type CommandParams =
  | { command: Command.CancelRequest; params: CancelRequestCoreCommandParams }
  | { command: Command.CreateCollection; params: CreateCollectionCoreCommandParams }
  | { command: Command.CreateFile; params: CreateFileCoreCommandParams }
  | { command: Command.CreateNetwork; params: CreateNetworkCoreCommandParams }
  | { command: Command.DeleteAccount; params: DeleteAccountCoreCommandParams }
  | { command: Command.ExtendExpiration; params: ExtendExpirationCoreCommandParams }
  | { command: Command.InitializeAccount; params: InitializeAccountCoreCommandParams }
  | { command: Command.RequestCollectionAccess; params: RequestCollectionAccessCoreCommandParams }
  | {
      command: Command.RequestCollectionOwnership;
      params: RequestCollectionOwnershipCoreCommandParams;
    }
  | {
      command: Command.RequestCollectionTransfer;
      params: RequestCollectionTransferCoreCommandParams;
    }
  | { command: Command.RequestFileAccess; params: RequestFileAccessCoreCommandParams }
  | { command: Command.RequestFileOwnership; params: RequestFileOwnershipCoreCommandParams }
  | { command: Command.RequestFileTransfer; params: RequestFileTransferCoreCommandParams }
  | {
      command: Command.RespondToCollectionRequest;
      params: RespondToCollectionRequestCoreCommandParams;
    }
  | { command: Command.RespondToFileRequest; params: RespondToFileRequestCoreCommandParams }
  | { command: Command.TimedTransfer; params: TimedTransferCoreCommandParams }
  | { command: Command.UpdateAccountDetails; params: UpdateAccountDetailsCoreCommandParams }
  | { command: Command.UpdateCollection; params: UpdateCollectionCoreCommandParams }
  | { command: Command.UpdateFile; params: UpdateFileCoreCommandParams }
  | { command: Command.UpdateNetwork; params: UpdateNetworkCoreCommandParams }
  | { command: Command.Transfer; params: TransferTokenCoreCommandParams };

export const CommandRequestSchema = z.object({
  command: CommandSchema,
  params: z.unknown(),
  passphrase: z.string(),
});

export type CommandRequest = CommandParams & { passphrase: string };

export const actionRequestSchemas: { [key in Action]: ZodSchema } = {
  [Action.GetAggregatedAccount]: GetAggregatedAccountActionParamsSchema,
  [Action.GetFiles]: GetFilesActionParamsSchema,
  [Action.GetFileById]: GetFileByIdActionParamsSchema,
  [Action.GetFilesByIds]: GetFilesByIdsActionParamsSchema,
  [Action.GetFileByChecksum]: GetFileByChecksumActionParamsSchema,
  [Action.GetCollections]: GetCollectionsActionParamsSchema,
  [Action.GetCollectionById]: GetCollectionByIdActionParamsSchema,
  [Action.GetCollectionsByIds]: GetCollectionsByIdsActionParamsSchema,
  [Action.GetStorageStatistics]: GetStorageStatisticsActionParamsSchema,
  [Action.GetEmailOrUsernameMap]: GetEmailOrUsernameMapActionParamsSchema,
  [Action.GetAllowedNetworksForAddress]: GetAllowedNetworksForAddressActionParamsSchema,
  [Action.GetNotificationData]: GetNotificationDataActionParamsSchema,
  [Action.SetReadStatus]: SetReadStatusActionParamsSchema,
  [Action.SetReadAllStatus]: SetReadAllStatusActionParamsSchema,
  [Action.AccountIsInitialized]: AccountIsInitializedActionParamsSchema,
  [Action.AccountIsTaken]: AccountIsTakenActionParamsSchema,
  [Action.GetAccount]: GetAccountActionParamsSchema,
};

export type ActionParams =
  | { action: Action.GetAggregatedAccount; params: GetAggregatedAccountActionParams }
  | { action: Action.GetFiles; params: GetFilesActionParams }
  | { action: Action.GetFileById; params: GetFileByIdActionParams }
  | { action: Action.GetFilesByIds; params: GetFilesByIdsActionParams }
  | { action: Action.GetFileByChecksum; params: GetFileByChecksumActionParams }
  | { action: Action.GetCollections; params: GetCollectionsActionParams }
  | { action: Action.GetCollectionById; params: GetCollectionByIdActionParams }
  | { action: Action.GetCollectionsByIds; params: GetCollectionsByIdsActionParams }
  | { action: Action.GetStorageStatistics; params: GetStorageStatisticsActionParams }
  | { action: Action.GetEmailOrUsernameMap; params: GetEmailOrUsernameMapActionParams }
  | {
      action: Action.GetAllowedNetworksForAddress;
      params: GetAllowedNetworksForAddressActionParams;
    }
  | { action: Action.GetNotificationData; params: GetNotificationDataActionParams }
  | { action: Action.SetReadStatus; params: SetReadStatusActionParams }
  | { action: Action.SetReadAllStatus; params: SetReadAllStatusActionParams }
  | { action: Action.AccountIsInitialized; params: AccountIsInitializedActionParams }
  | { action: Action.AccountIsTaken; params: AccountIsTakenActionParams }
  | { action: Action.GetAccount; params: GetAccountActionParams };

export const ActionRequestSchema = z.object({
  action: ActionSchema,
  params: z.unknown(),
});

export type ActionRequest = ActionParams;

export const ActionResponseSchemas: { [key in Action]: ZodSchema } = {
  [Action.GetAggregatedAccount]: GetAggregatedAccountActionResponseSchema,
  [Action.GetFiles]: GetFilesActionResponseSchema,
  [Action.GetFileById]: GetFileByIdActionResponseSchema,
  [Action.GetFilesByIds]: GetFilesByIdsActionResponseSchema,
  [Action.GetFileByChecksum]: GetFileByChecksumActionResponseSchema,
  [Action.GetCollections]: GetCollectionsActionResponseSchema,
  [Action.GetCollectionById]: GetCollectionByIdActionResponseSchema,
  [Action.GetCollectionsByIds]: GetCollectionsByIdsActionResponseSchema,
  [Action.GetStorageStatistics]: GetStorageStatisticsActionResponseSchema,
  [Action.GetEmailOrUsernameMap]: GetEmailOrUsernameMapActionResponseSchema,
  [Action.GetAllowedNetworksForAddress]: GetAllowedNetworksForAddressActionResponseSchema,
  [Action.GetNotificationData]: GetNotificationDataActionResponseSchema,
  [Action.SetReadStatus]: SetReadStatusActionResponseSchema,
  [Action.SetReadAllStatus]: SetReadAllStatusActionResponseSchema,
  [Action.AccountIsInitialized]: AccountIsInitializedActionResponseSchema,
  [Action.AccountIsTaken]: AccountIsTakenActionResponseSchema,
  [Action.GetAccount]: GetAccountActionResponseSchema,
};

export type ActionResponse =
  | { action: Action.GetAggregatedAccount; params: GetAggregatedAccountActionResponse }
  | { action: Action.GetFiles; params: GetFilesActionResponse }
  | { action: Action.GetFileById; params: GetFileByIdActionResponse }
  | { action: Action.GetFilesByIds; params: GetFilesByIdsActionResponse }
  | { action: Action.GetFileByChecksum; params: GetFileByChecksumActionResponse }
  | { action: Action.GetCollections; params: GetCollectionsActionResponse }
  | { action: Action.GetCollectionById; params: GetCollectionByIdActionResponse }
  | { action: Action.GetCollectionsByIds; params: GetCollectionsByIdsActionResponse }
  | { action: Action.GetStorageStatistics; params: GetStorageStatisticsActionResponse }
  | { action: Action.GetEmailOrUsernameMap; params: GetEmailOrUsernameMapActionResponse }
  | {
      action: Action.GetAllowedNetworksForAddress;
      params: GetAllowedNetworksForAddressActionResponse;
    }
  | { action: Action.GetNotificationData; params: GetNotificationDataActionResponse }
  | { action: Action.SetReadStatus; params: SetReadStatusActionResponse }
  | { action: Action.SetReadAllStatus; params: SetReadAllStatusActionResponse }
  | { action: Action.AccountIsInitialized; params: AccountIsInitializedActionResponse }
  | { action: Action.AccountIsTaken; params: AccountIsTakenActionResponse }
  | { action: Action.GetAccount; params: GetAccountActionResponse };
