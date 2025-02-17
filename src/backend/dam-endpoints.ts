import z from "zod";
import { BigIntSchema, FormDataBooleanSchema, PassphraseSchema } from "../shared/generic";
import { BufferSchema } from "../core";
import { zfd } from "zod-form-data";

export const DownloadFileParamsSchema = z.object({
  fileId: z.string(),
  passphrase: PassphraseSchema,
});

export const DownloadFileResponseSchema = BufferSchema;

export const HandleCollectionRequestParamsSchema = z.object({
  collectionId: z.string(),
  requestId: z.string(),
  accept: z.boolean(),
  passphrase: PassphraseSchema,
});

export const HandleCollectionRequestResponseSchema = z.null();

export const HandleFileRequestParamsSchema = z.object({
  fileId: z.string(),
  requestId: z.string(),
  accept: z.boolean(),
  passphrase: PassphraseSchema,
});

export const HandleFileRequestResponseSchema = z.null();

export const UploadFileParamsSchema = z.object({
  passphrase: z.string(),
  expiration: z.coerce.number(),
  network: z.string(),
  title: z.string(),
  customFields: z.string(),
  recipientEmailHash: z.string(),
  downloadPermissionLevel: z.string(),
  collectionId: z.string(),
  isTimedTransfer: FormDataBooleanSchema,
  isPrivate: FormDataBooleanSchema,
  newUser: FormDataBooleanSchema,
  accessPermissionFee: z.coerce.number(),
  transferFee: z.coerce.number(),
  discount: z.coerce.number(),
  fee: BigIntSchema,
  recipientEmail: z.string(),
  senderEmail: z.string(),
});

export const UploadFileResponseSchema = z.null();

// Helper schema for parsing the form data in a frontend application
export const UploadFileFormDataParamsSchema = zfd.formData(UploadFileParamsSchema);
