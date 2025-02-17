import z from "zod";

import {
  FileExpirationStoreDataSchema,
  NotificationDataSchema,
  NotificationItemSchema,
  NotificationTypeSchema,
} from "./plugin-generic";

export type NotificationType = z.infer<typeof NotificationTypeSchema>;

export type NotificationItem = z.infer<typeof NotificationItemSchema>;

export type NotificationData = z.infer<typeof NotificationDataSchema>;

export type FileExpirationStoreData = z.infer<typeof FileExpirationStoreDataSchema>;
