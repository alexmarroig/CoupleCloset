const translations = {
  en: {
    welcome: "Good evening, {name}",
    discover: "Discover",
    connect: "Connect",
    surprise: "Surprise",
    astrology: "Astrology",
    alignment: "Alignment Score",
    generate: "Generate Idea",
    giftSuggest: "Gift Suggestions",
    footer: "© 2025 ANION – Relationship Intelligence. Growing together, intelligently.",
  },
  pt: {
    welcome: "Boa noite, {name}",
    discover: "Descobrir",
    connect: "Conectar",
    surprise: "Surpreender",
    astrology: "Astrologia",
    alignment: "Índice de Alinhamento",
    generate: "Gerar Ideia",
    giftSuggest: "Sugestões de Presentes",
    footer: "© 2025 ANION – Relationship Intelligence. Evoluindo juntos, inteligentemente.",
  },
};

export type Lang = "en" | "pt";

export function t(key: keyof typeof translations.en, lang: Lang = "en") {
  return translations[lang][key] || key;
}
