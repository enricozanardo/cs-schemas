import { z } from "zod";
import { FileExpirationSummarySchema } from "../core";

export const NotificationTypeSchema = z.enum(["30-day", "15-day", "1-day", "expired", "removed"]);

export const NotificationItemSchema = z.object({
  type: NotificationTypeSchema,
  fileId: z.string(),
  fileTitle: z.string(),
  timestamp: z.number(),
  read: z.boolean(),
});

export const NotificationDataSchema = z.object({
  expiration: z.array(NotificationItemSchema),
});

export const FileExpirationStoreDataSchema = z.object({
  fileExpirations: z.array(FileExpirationSummarySchema),
});
