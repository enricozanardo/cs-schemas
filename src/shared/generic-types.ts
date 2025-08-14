import z from "zod";
import { FormDataBooleanSchema, htmlColorInputSchema, PassphraseSchema } from "./generic";

export type Passphrase = z.infer<typeof PassphraseSchema>;

export type FormDataBoolean = z.infer<typeof FormDataBooleanSchema>;

export type HtmlColorInput = z.infer<typeof htmlColorInputSchema>;
