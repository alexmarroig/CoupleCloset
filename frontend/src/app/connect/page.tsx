import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, MessageCircle, BarChart2 } from "lucide-react"

export default function Connect() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-2">Connect Your Hearts</h1>
        <p className="text-muted-foreground">Evolve your relationship with emotional intelligence.</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-card/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart size={20} className="text-accent" /> Emotional Check-in
              </CardTitle>
              <CardDescription>Daily alignment indicator.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm mb-4">How are you feeling today?</p>
              <div className="flex justify-between gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Button key={i} variant="outline" size="sm" className="h-10 w-10 p-0 text-xl">
                    {i === 1 && "😔"}
                    {i === 2 && "😐"}
                    {i === 3 && "🙂"}
                    {i === 4 && "😊"}
                    {i === 5 && "😍"}
                  </Button>
                ))}
              </div>
              <Button className="w-full bg-accent hover:bg-accent/80 font-bold">Submit My Mood</Button>
            </CardContent>
          </Card>

          <Card className="bg-card/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 size={20} className="text-primary" /> Alignment Chart
              </CardTitle>
              <CardDescription>Visualizing your week together.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-32 bg-muted/50 rounded flex items-center justify-center italic text-xs text-muted-foreground">
                Alignment Chart Visualization Here
              </div>
              <p className="text-sm mt-4 font-medium">85% Aligned - High Harmony!</p>
            </CardContent>
          </Card>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Weekly Challenge</h2>
          <Card className="border-accent/50 bg-accent/5">
            <CardHeader>
              <CardTitle className="text-lg">Compliment a Day</CardTitle>
              <CardDescription>Express gratitude for each other's small gestures.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm">For the next 7 days, try to compliment one small thing each other does every day.</p>
              <Button variant="ghost" className="w-full mt-4 border border-accent/20">Accept Challenge</Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  )
}
