import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, MapPin, DollarSign, Clock, Zap } from "lucide-react"

export default function Discover() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-2">Discover Today</h1>
        <p className="text-muted-foreground">Find the perfect activity based on your vibe.</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-card/30">
          <CardHeader>
            <CardTitle>Intelligent Filters</CardTitle>
            <CardDescription>Adjust based on how you feel right now.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="outline" className="flex flex-col h-20">
                <Clock size={20} /> <span className="text-xs mt-1 font-normal">1-2 hours</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-20">
                <DollarSign size={20} /> <span className="text-xs mt-1 font-normal">$$ Low budget</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-20">
                <Zap size={20} /> <span className="text-xs mt-1 font-normal">Chill Energy</span>
              </Button>
              <Button variant="outline" className="flex flex-col h-20">
                <MapPin size={20} /> <span className="text-xs mt-1 font-normal">Indoor</span>
              </Button>
            </div>
            <Button className="w-full mt-6 bg-primary font-bold">Find Best Plan</Button>
          </CardContent>
        </Card>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Recommended for Tonight</h2>
          <Card className="border-primary/50 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-900 to-indigo-900 flex items-center justify-center">
              <Sparkles className="text-primary w-12 h-12 animate-pulse" />
            </div>
            <CardHeader>
              <CardTitle>A Night of Deep Conversation</CardTitle>
              <CardDescription>18°C · SP · Low Energy</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc list-inside text-sm">
                <li>Order a light Italian dinner at home.</li>
                <li>Play the "Deep Connection" playlist.</li>
                <li>Ask each other: "What is your best memory of us this year?"</li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
