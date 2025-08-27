import { z } from "zod";

export const PassphraseSchema = z.string();

export const FormDataBooleanSchema = z.preprocess(
  v =>
    z
      .enum(["true", "false"])
      .transform(v => JSON.parse(v))
      .catch(v)
      .parse(v),
  z.boolean()
);

export const BigIntSchema = z.coerce.bigint();

export const SanitizedString = z.string().trim().max(64);

export const htmlColorInputSchema = z.string().regex(/^#[0-9a-fA-F]{6}$/, {
  message: "Invalid color format. Must be a 7-character hex code (e.g., #RRGGBB).",
});
