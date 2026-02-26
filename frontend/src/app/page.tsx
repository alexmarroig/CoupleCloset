'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Sparkles, Calendar, Zap, MessageSquare, Tv, Languages, Loader2 } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { useProfile } from "@/lib/hooks"

export default function Dashboard() {
  const { t, setLanguage, language } = useLanguage()
  const { profile, loading } = useProfile()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Loader2 className="animate-spin text-primary w-12 h-12" />
      </div>
    )
  }

  const name = profile ? `${profile.firstName} & ${profile.coupleMembers[0]?.couple.members.find((m: any) => m.userId !== profile.id)?.user.firstName || 'Partner'}` : 'Alex & Camila'

  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="max-w-7xl mx-auto mb-12 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-bold mb-2 tracking-tight">
            {language === 'pt' ? `Boa noite, ${name}` : `Good evening, ${name}`}
          </h1>
          <p className="text-muted-foreground text-lg">{t('subtitle')}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setLanguage(language === 'en' ? 'pt' : 'en')}
          className="flex items-center gap-2"
        >
          <Languages size={18} /> {language === 'en' ? 'PT' : 'EN'}
        </Button>
      </header>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="text-primary" /> {t('discover')}
            </CardTitle>
            <CardDescription>{t('discoverDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{t('discoverHint')}</p>
            <Button className="w-full" asChild>
                <a href="/discover">{t('generate')}</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-accent/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="text-accent" /> {t('connect')}
            </CardTitle>
            <CardDescription>{t('connectDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium">{t('alignment')}:</span>
              <span className="text-xl font-bold text-accent">85%</span>
            </div>
            <Button variant="outline" className="w-full" asChild>
                <a href="/connect">{t('checkin')}</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="text-secondary" /> {t('surprise')}
            </CardTitle>
            <CardDescription>{t('surpriseDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">{t('nextEvent')}</p>
            <Button variant="secondary" className="w-full" asChild>
                <a href="/surprise">{t('gifts')}</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-400">
              <Tv size={20} /> {t('watch')}
            </CardTitle>
            <CardDescription>{t('watchDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">{t('watchHint')}</p>
            <Button variant="ghost" className="w-full border border-blue-400/20">{t('explore')}</Button>
          </CardContent>
        </Card>

        <Card className="bg-card/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-violet-400">
              <Zap size={20} /> {t('astrology')}
            </CardTitle>
            <CardDescription>{t('astrologyDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4 italic">{t('astrologyHint')}</p>
            <Button variant="ghost" className="w-full border border-violet-400/20" asChild>
                <a href="/astrology">{t('viewSync')}</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-card/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-emerald-400">
              <MessageSquare size={20} /> {t('qotd')}
            </CardTitle>
            <CardDescription>{t('qotdDesc')}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm mb-4">{t('qotdHint')}</p>
            <Button variant="ghost" className="w-full border border-emerald-400/20">{t('answer')}</Button>
          </CardContent>
        </Card>
      </main>

      <footer className="max-w-7xl mx-auto mt-12 text-center text-muted-foreground text-sm">
        <p>{t('footer')}</p>
      </footer>
    </div>
  )
}
