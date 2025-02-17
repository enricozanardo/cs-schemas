import z from "zod";
import {
  DownloadFileParamsSchema,
  DownloadFileResponseSchema,
  HandleCollectionRequestParamsSchema,
  HandleCollectionRequestResponseSchema,
  HandleFileRequestParamsSchema,
  HandleFileRequestResponseSchema,
  UploadFileParamsSchema,
  UploadFileResponseSchema,
} from "./dam-endpoints";
import { SerializedBigInt } from "../utils";

export type DownloadFileParams = z.infer<typeof DownloadFileParamsSchema>;

export type DownloadFileResponse = z.infer<typeof DownloadFileResponseSchema>;

export type HandleCollectionRequestParams = z.infer<typeof HandleCollectionRequestParamsSchema>;

export type HandleCollectionRequestResponse = z.infer<typeof HandleCollectionRequestResponseSchema>;

export type HandleFileRequestParams = z.infer<typeof HandleFileRequestParamsSchema>;

export type HandleFileRequestResponse = z.infer<typeof HandleFileRequestResponseSchema>;

export type UploadFileParams =
  | z.infer<typeof UploadFileParamsSchema>
  | SerializedBigInt<z.infer<typeof UploadFileParamsSchema>>;

export type UploadFileResponse = z.infer<typeof UploadFileResponseSchema>;
