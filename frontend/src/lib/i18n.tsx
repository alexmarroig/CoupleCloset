'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

const translations = {
  en: {
    welcome: "Good evening, Alex & Camila",
    subtitle: "Today the weather is 18°C in SP, energy is cozy and intimate.",
    discover: "Discover",
    discoverDesc: "What to do today?",
    discoverHint: '"How about a cozy dinner at home with a suggested playlist and a question game?"',
    connect: "Connect",
    connectDesc: "Emotional Check-in",
    alignment: "Alignment Score",
    surprise: "Surprise",
    surpriseDesc: "Special Moments",
    nextEvent: "Next: Our Anniversary in 12 days.",
    watch: "Watch",
    watchDesc: "Contextual Recommendations",
    watchHint: "You have 1h30 available. How about \"About Time\"?",
    astrology: "Astrology",
    astrologyDesc: "Celestial Insights",
    astrologyHint: '"A sensitive phase this week, favor soft communication."',
    qotd: "Question of the Day",
    qotdDesc: "Evolving together",
    qotdHint: '"What is a new dream you\'ve had lately?"',
    generate: "Generate Idea",
    checkin: "Weekly Check-in",
    gifts: "Gift Suggestions",
    explore: "Explore Movies",
    viewSync: "View Full Sync",
    answer: "Answer Now",
    footer: "© 2025 ANION – Relationship Intelligence. Growing together, intelligently.",
  },
  pt: {
    welcome: "Boa noite, Alex & Camila",
    subtitle: "Hoje o clima está 18°C em SP, a energia está acolhedora e íntima.",
    discover: "Descobrir",
    discoverDesc: "O que fazer hoje?",
    discoverHint: '"Que tal um jantar romântico em casa com uma playlist sugerida e um jogo de perguntas?"',
    connect: "Conectar",
    connectDesc: "Check-in Emocional",
    alignment: "Índice de Alinhamento",
    surprise: "Surpreender",
    surpriseDesc: "Momentos Especiais",
    nextEvent: "Próximo: Nosso Aniversário em 12 dias.",
    watch: "Assistir",
    watchDesc: "Recomendações Contextuais",
    watchHint: "Vocês têm 1h30 disponíveis. Que tal \"Questão de Tempo\"?",
    astrology: "Astrologia",
    astrologyDesc: "Insights Celestiais",
    astrologyHint: '"Uma fase sensível esta semana, favoreça a comunicação suave."',
    qotd: "Pergunta do Dia",
    qotdDesc: "Evoluindo juntos",
    qotdHint: '"Qual é um novo sonho que você teve ultimamente?"',
    generate: "Gerar Ideia",
    checkin: "Check-in Semanal",
    gifts: "Sugestões de Presentes",
    explore: "Explorar Filmes",
    viewSync: "Ver Sincronia Completa",
    answer: "Responder Agora",
    footer: "© 2025 ANION – Relationship Intelligence. Evoluindo juntos, inteligentemente.",
  }
}

type Language = 'en' | 'pt'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: keyof typeof translations.en) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt')

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations['en'][key]
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
