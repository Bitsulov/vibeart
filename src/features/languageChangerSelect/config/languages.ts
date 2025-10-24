export type LanguagesType = "ru" | "en";

interface LanguageType {
    shortName: LanguagesType;
	className: string;
	shortCountry: string
}

export const languages: Record<LanguagesType, LanguageType> = {
    ru: { shortName: "ru", className: "fi fi-ru", shortCountry: "ru" },
    en: { shortName: "en", className: "fi fi-us", shortCountry: "us" }
};
