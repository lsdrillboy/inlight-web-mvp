import ru from "./ru";
import en from "./en";
export type Lang = "ru" | "en";
export const dictionaries = { ru, en };
export function getDict(lang: Lang){
  return dictionaries[lang] ?? dictionaries["ru"];
}
