import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Gift, Calendar, Heart, ShoppingBag } from "lucide-react"

export default function Surprise() {
  return (
    <div className="min-h-screen bg-background text-foreground p-6">
      <header className="max-w-4xl mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-2 tracking-tight flex items-center gap-2">
          <Gift size={32} className="text-secondary" /> Surprise & Gift
        </h1>
        <p className="text-muted-foreground text-lg">Celebrate every moment of your journey together.</p>
      </header>

      <main className="max-w-4xl mx-auto space-y-8">
        <Card className="bg-card/50 backdrop-blur-sm border-secondary/30 overflow-hidden">
          <CardHeader className="bg-secondary/10 p-6">
            <CardTitle className="flex items-center gap-2 text-secondary">
              <Calendar size={20} /> Upcoming Dates
            </CardTitle>
            <CardDescription className="text-secondary/80 font-medium">Don't let any special moment pass by.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-lg">Our Anniversary</h4>
                  <p className="text-sm text-muted-foreground italic">12 days to go!</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-secondary font-bold">Sept 22, 2025</p>
                  <Button variant="ghost" size="sm" className="mt-2 text-secondary hover:text-secondary hover:bg-secondary/10">Add to Calendar</Button>
                </div>
              </div>
              <div className="p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-lg opacity-80">Camila's Birthday</h4>
                  <p className="text-sm text-muted-foreground">3 months to go.</p>
                </div>
                <div className="text-right opacity-80">
                  <p className="font-mono font-bold">Dec 15, 2025</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <section className="space-y-4 pt-4">
          <h2 className="text-2xl font-bold tracking-tight flex items-center gap-2">
            <ShoppingBag size={24} className="text-primary" /> Curated Gift Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="bg-card/30 hover:border-primary/50 transition-colors group">
                <div className="h-40 bg-muted/50 flex items-center justify-center overflow-hidden">
                  <ShoppingBag size={48} className="text-muted opacity-20 group-hover:scale-110 transition-transform" />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-base">Gourmet Box for Two</CardTitle>
                  <CardDescription className="text-xs">Premium selection of Italian snacks.</CardDescription>
                </CardHeader>
                <CardFooter className="p-4 pt-0 flex justify-between items-center">
                  <span className="font-bold text-primary">$45.00</span>
                  <Button size="sm" className="bg-primary/10 text-primary hover:bg-primary hover:text-white border border-primary/20">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button className="w-full mt-6 bg-secondary hover:bg-secondary/80 font-bold text-white shadow-lg shadow-secondary/20">Explore Shopify Store</Button>
        </section>

        <Card className="bg-accent/5 border-accent/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-accent">
              <Heart size={20} /> Micro-Surprise Ideas
            </CardTitle>
            <CardDescription>Small gestures, big impacts.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm italic">"Try leaving a sticky note with a compliment on the bathroom mirror for Alex tomorrow morning."</p>
            <Button variant="ghost" className="w-full mt-4 border border-accent/20 text-accent hover:bg-accent/10">Try New Micro-Surprise</Button>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
