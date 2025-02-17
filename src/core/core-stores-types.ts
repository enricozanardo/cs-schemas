import z from "zod";

import {
  AccountPropsSchema,
  AccountStoreDataSchema,
  MapStoreDataSchema,
  StatisticStoreDataSchema,
} from "./core-stores";

export type AccountStoreData = z.infer<typeof AccountStoreDataSchema>;

export type AccountProps = z.infer<typeof AccountPropsSchema>;

export type MapStoreData = z.infer<typeof MapStoreDataSchema>;

export type StatisticStoreData = z.infer<typeof StatisticStoreDataSchema>;
