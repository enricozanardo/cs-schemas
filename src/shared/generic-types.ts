import z from "zod";
import { FormDataBooleanSchema, PassphraseSchema } from "./generic";

export type Passphrase = z.infer<typeof PassphraseSchema>;

export type FormDataBoolean = z.infer<typeof FormDataBooleanSchema>;
