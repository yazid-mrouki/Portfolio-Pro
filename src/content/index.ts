import { en } from "./en";
import { fr } from "./fr";
import type { Locale } from "./profile";

const content = { fr, en };

export const getContent = (locale: Locale) => content[locale];

export * from "./profile";
export type * from "./types";
