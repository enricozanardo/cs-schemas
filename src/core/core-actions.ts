import * as z from "zod";
import { NotificationItemSchema, NotificationTypeSchema } from "../notification-plugin";
import { CollectionSchema, DamFileSchema, NetworkSchema } from "./core-generic";
import { AccountPropsSchema, MapStoreDataSchema, StatisticStoreDataSchema } from "./core-stores";
import { Action } from "./core-actions-types";

export const ActionSchema = z.nativeEnum(Action);

export const FiltersSchema = z.object({
  searchInput: z.string().optional(),
  mimeType: z.string().optional(),
  sortType: z.string().optional(),
  isUpdated: z.boolean().optional(),
  owner: z.string().optional(),
  accessibleToUserLsk32Address: z.string().optional(),
});

export const ApiOptionsSchema = z.object({
  offset: z.number().optional(),
  limit: z.number().optional(),
  filters: FiltersSchema.optional(),
});

export const GetAggregatedAccountActionParamsSchema = z.object({ address: z.string() });

export const GetFilesActionParamsSchema = ApiOptionsSchema;

export const GetFilesByIdsActionParamsSchema = z
  .object({ ids: z.string().array() })
  .merge(ApiOptionsSchema);

export const GetEmailOrUsernameMapActionParamsSchema = z.union([
  z.object({ username: z.string() }),
  z.object({ emailHash: z.string() }),
]);

export const GetFileByIdActionParamsSchema = z.object({ id: z.string() });

export const GetFileByChecksumActionParamsSchema = z.object({ checksum: z.string() });

export const GetCollectionsActionParamsSchema = ApiOptionsSchema;

export const GetCollectionByIdActionParamsSchema = z.object({ id: z.string() });

export const GetCollectionsByIdsActionParamsSchema = z
  .object({ ids: z.string().array() })
  .merge(ApiOptionsSchema);

export const GetStorageStatisticsActionParamsSchema = z.null();

export const GetAllowedNetworksForAddressActionParamsSchema = z.object({
  lsk32address: z.string(),
});

export const GetNotificationDataActionParamsSchema = z.object({ address: z.string() });

export const SetReadStatusActionParamsSchema = z.object({
  address: z.string(),
  fileId: z.string(),
  type: NotificationTypeSchema,
});

export const SetReadAllStatusActionParamsSchema = z.object({ address: z.string() });

export const AccountIsInitializedActionParamsSchema = z.object({ address: z.string() });

export const GetAccountActionParamsSchema = z.object({ address: z.string() });

export const AccountIsTakenActionParamsSchema = z.object({
  username: z.string(),
  emailHash: z.string(),
});

const getSanitizedListResponseSchema = <T>(dataSchema: z.ZodType<T>) =>
  z.object({ data: dataSchema });

const getSanitizedSingleResponseSchema = <T>(dataSchema: z.ZodType<T>) =>
  z.object({
    data: z.union([dataSchema, z.null()]),
  });

export const GetAggregatedAccountActionResponseSchema =
  getSanitizedSingleResponseSchema(AccountPropsSchema);

export const GetFilesActionResponseSchema = getSanitizedListResponseSchema(
  z.object({ files: DamFileSchema.array(), total: z.number() })
);

export const GetFilesByIdsActionResponseSchema = GetFilesActionResponseSchema;

export const GetFileActionResponseSchema = getSanitizedSingleResponseSchema(DamFileSchema);

export const GetFileByIdActionResponseSchema = getSanitizedSingleResponseSchema(DamFileSchema);

export const GetFileByChecksumActionResponseSchema =
  getSanitizedSingleResponseSchema(DamFileSchema);

export const GetCollectionsActionResponseSchema = getSanitizedListResponseSchema(
  z.object({ collections: CollectionSchema.array(), total: z.number() })
);

export const GetCollectionsByIdsActionResponseSchema = GetCollectionsActionResponseSchema;

export const GetCollectionByIdActionResponseSchema =
  getSanitizedSingleResponseSchema(CollectionSchema);

export const GetStorageStatisticsActionResponseSchema =
  getSanitizedSingleResponseSchema(StatisticStoreDataSchema);

export const GetEmailOrUsernameMapActionResponseSchema =
  getSanitizedSingleResponseSchema(MapStoreDataSchema);

export const GetAllowedNetworksForAddressActionResponseSchema = getSanitizedListResponseSchema(
  NetworkSchema.array()
);

export const GetNotificationDataActionResponseSchema = NotificationItemSchema.array();

export const SetReadStatusActionResponseSchema = z.null();

export const SetReadAllStatusActionResponseSchema = z.null();

export const AccountIsInitializedActionResponseSchema = z.boolean();

export const AccountIsTakenActionResponseSchema = z.boolean();

export const GetAccountActionResponseSchema = z.union([AccountPropsSchema, z.null()]);

export const GetNetworksActionParamsSchema = z.null();

export const GetNetworksActionResponseSchema = getSanitizedListResponseSchema(
  NetworkSchema.array()
);
