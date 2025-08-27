import { z } from "zod";

import {
  AccountIsInitializedActionParamsSchema,
  AccountIsInitializedActionResponseSchema,
  AccountIsTakenActionParamsSchema,
  AccountIsTakenActionResponseSchema,
  ApiOptionsSchema,
  FiltersSchema,
  GetAccountActionParamsSchema,
  GetAccountActionResponseSchema,
  GetAggregatedAccountActionParamsSchema,
  GetAggregatedAccountActionResponseSchema,
  GetAllowedNetworksForAddressActionParamsSchema,
  GetAllowedNetworksForAddressActionResponseSchema,
  GetCollectionByIdActionParamsSchema,
  GetCollectionByIdActionResponseSchema,
  GetCollectionsActionParamsSchema,
  GetCollectionsActionResponseSchema,
  GetCollectionsByIdsActionParamsSchema,
  GetCollectionsByIdsActionResponseSchema,
  GetEmailOrUsernameMapActionParamsSchema,
  GetEmailOrUsernameMapActionResponseSchema,
  GetFileActionResponseSchema,
  GetFileByChecksumActionParamsSchema,
  GetFileByChecksumActionResponseSchema,
  GetFileByIdActionParamsSchema,
  GetFileByIdActionResponseSchema,
  GetFilesActionParamsSchema,
  GetFilesActionResponseSchema,
  GetFilesByIdsActionParamsSchema,
  GetFilesByIdsActionResponseSchema,
  GetNetworksActionParamsSchema,
  GetNetworksActionResponseSchema,
  GetNotificationDataActionParamsSchema,
  GetNotificationDataActionResponseSchema,
  GetStorageStatisticsActionParamsSchema,
  GetStorageStatisticsActionResponseSchema,
  SetReadAllStatusActionParamsSchema,
  SetReadAllStatusActionResponseSchema,
  SetReadStatusActionParamsSchema,
  SetReadStatusActionResponseSchema,
} from "./core-actions";

export enum Action {
  GetAggregatedAccount = "api_getAggregatedAccount",
  GetFiles = "api_getFiles",
  GetFileById = "api_getFileById",
  GetFilesByIds = "api_getFilesByIds",
  GetFileByChecksum = "api_getFileByChecksum",
  GetCollections = "api_getCollections",
  GetCollectionById = "api_getCollectionById",
  GetCollectionsByIds = "api_getCollectionsByIds",
  GetStorageStatistics = "api_getStatistics",
  GetEmailOrUsernameMap = "api_getEmailOrUsernameMap",
  GetAllowedNetworksForAddress = "api_getAllowedNetworksForAddress",
  GetNotificationData = "notification_fetchNotificationData",
  SetReadStatus = "notification_setReadStatus",
  SetReadAllStatus = "notification_setReadAllStatus",
  AccountIsInitialized = "storage_accountIsInitialized",
  AccountIsTaken = "storage_accountIsTaken",
  GetAccount = "storage_getAccount",
  GetNetworks = "api_getNetworks",
}

export type Filters = z.infer<typeof FiltersSchema>;

export type ApiOptions = z.infer<typeof ApiOptionsSchema>;

export type GetAggregatedAccountActionParams = z.infer<
  typeof GetAggregatedAccountActionParamsSchema
>;

export type GetFilesActionParams = z.infer<typeof GetFilesActionParamsSchema>;

export type GetFilesByIdsActionParams = z.infer<typeof GetFilesByIdsActionParamsSchema>;

export type GetEmailOrUsernameMapActionParams = z.infer<
  typeof GetEmailOrUsernameMapActionParamsSchema
>;

export type GetFileByIdActionParams = z.infer<typeof GetFileByIdActionParamsSchema>;

export type GetFileByChecksumActionParams = z.infer<typeof GetFileByChecksumActionParamsSchema>;

export type GetCollectionsActionParams = z.infer<typeof GetCollectionsActionParamsSchema>;

export type GetCollectionByIdActionParams = z.infer<typeof GetCollectionByIdActionParamsSchema>;

export type GetCollectionsByIdsActionParams = z.infer<typeof GetCollectionsByIdsActionParamsSchema>;
export type GetStorageStatisticsActionParams = z.infer<
  typeof GetStorageStatisticsActionParamsSchema
>;

export type GetAllowedNetworksForAddressActionParams = z.infer<
  typeof GetAllowedNetworksForAddressActionParamsSchema
>;

export type GetNotificationDataActionParams = z.infer<typeof GetNotificationDataActionParamsSchema>;

export type SetReadStatusActionParams = z.infer<typeof SetReadStatusActionParamsSchema>;

export type SetReadAllStatusActionParams = z.infer<typeof SetReadAllStatusActionParamsSchema>;

export type AccountIsInitializedActionParams = z.infer<
  typeof AccountIsInitializedActionParamsSchema
>;

export type GetAccountActionParams = z.infer<typeof GetAccountActionParamsSchema>;

export type AccountIsTakenActionParams = z.infer<typeof AccountIsTakenActionParamsSchema>;

export type GetAggregatedAccountActionResponse = z.infer<
  typeof GetAggregatedAccountActionResponseSchema
>;

export type GetFilesActionResponse = z.infer<typeof GetFilesActionResponseSchema>;

export type GetFilesByIdsActionResponse = z.infer<typeof GetFilesByIdsActionResponseSchema>;

export type GetFileActionResponse = z.infer<typeof GetFileActionResponseSchema>;

export type GetFileByIdActionResponse = z.infer<typeof GetFileByIdActionResponseSchema>;

export type GetFileByChecksumActionResponse = z.infer<typeof GetFileByChecksumActionResponseSchema>;

export type GetCollectionsActionResponse = z.infer<typeof GetCollectionsActionResponseSchema>;

export type GetCollectionsByIdsActionResponse = z.infer<
  typeof GetCollectionsByIdsActionResponseSchema
>;

export type GetCollectionByIdActionResponse = z.infer<typeof GetCollectionByIdActionResponseSchema>;

export type GetStorageStatisticsActionResponse = z.infer<
  typeof GetStorageStatisticsActionResponseSchema
>;

export type GetEmailOrUsernameMapActionResponse = z.infer<
  typeof GetEmailOrUsernameMapActionResponseSchema
>;

export type GetAllowedNetworksForAddressActionResponse = z.infer<
  typeof GetAllowedNetworksForAddressActionResponseSchema
>;

export type GetNotificationDataActionResponse = z.infer<
  typeof GetNotificationDataActionResponseSchema
>;

export type SetReadStatusActionResponse = z.infer<typeof SetReadStatusActionResponseSchema>;

export type SetReadAllStatusActionResponse = z.infer<typeof SetReadAllStatusActionResponseSchema>;

export type AccountIsInitializedActionResponse = z.infer<
  typeof AccountIsInitializedActionResponseSchema
>;

export type AccountIsTakenActionResponse = z.infer<typeof AccountIsTakenActionResponseSchema>;

export type GetAccountActionResponse = z.infer<typeof GetAccountActionResponseSchema>;

export type GetNetworksActionResponse = z.infer<typeof GetNetworksActionResponseSchema>;

export type GetNetworksActionParams = z.infer<typeof GetNetworksActionParamsSchema>;
