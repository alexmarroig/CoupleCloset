import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Moon, Sun, Zap } from "lucide-react"

export default function Astrology() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-2">Astrological Sync</h1>
        <p className="text-muted-foreground">Understand the cosmic weather of your relationship.</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-card/30 border-violet-500/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap size={20} className="text-violet-500" /> Weekly Relationship Phase
            </CardTitle>
            <CardDescription>Cosmic energy for this week.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-sm leading-relaxed font-medium">
              "A sensitive phase this week, favor soft communication and patience. The Moon is in Pisces, making emotions run deep."
            </p>
            <Button className="w-full bg-violet-600 hover:bg-violet-700 font-bold">Read Full Details</Button>
          </CardContent>
        </Card>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/30 border-violet-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-wider font-semibold">
                <Sun size={16} className="text-yellow-400" /> Alex
              </CardTitle>
              <CardDescription>Sun in Leo, Moon in Capricorn</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Passionate, loyal, and needs recognition. Emotionally grounded.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/30 border-violet-500/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-sm uppercase tracking-wider font-semibold">
                <Moon size={16} className="text-blue-400" /> Camila
              </CardTitle>
              <CardDescription>Sun in Scorpio, Moon in Cancer</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">
                Intense, perceptive, and highly emotional. Needs security.
              </p>
            </CardContent>
          </Card>
        </section>

        <Card className="bg-card/30 border-violet-500/40">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles size={20} className="text-violet-500" /> Sinastry Score: 88%
            </CardTitle>
            <CardDescription>Deep Harmony in Communication</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">"Great harmony in communication and emotions. Sun Trine Venus creates deep affection and mutual understanding."</p>
            <Button variant="outline" className="w-full mt-4 border-violet-500/20 text-violet-400 hover:bg-violet-500/10 font-bold">Explore Full Sinastry</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
