import z from "zod";

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
