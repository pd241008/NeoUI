import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DashboardShowcase() {
  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tight">Dashboard View</h1>
        <p className="text-lg text-muted-foreground mt-2">
          An example of how Neo-brutalist cards and buttons come together to create a high-impact dashboard.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Revenue</CardTitle>
            <CardDescription>Monthly recurring revenue</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black">$45,231.89</div>
            <p className="text-xs font-bold text-neo-green mt-2">+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Active Users</CardTitle>
            <CardDescription>Real-time session count</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-4xl font-black">+2350</div>
            <Badge variant="cyan" className="mt-2">+180.1% increase</Badge>
          </CardContent>
        </Card>

        <Card className="bg-neo-purple text-black">
          <CardHeader>
            <CardTitle className="text-black">Critical Tasks</CardTitle>
            <CardDescription className="text-black/70">Urgent items requiring attention</CardDescription>
          </CardHeader>
          <CardContent>
             <div className="space-y-2">
                {[1, 2].map((i) => (
                   <div key={i} className="p-3 bg-white neo-border shadow-[2px_2px_0px_black] text-black text-sm font-bold flex justify-between items-center">
                      Task Request #{i}04
                      <Badge variant="yellow">Urgent</Badge>
                   </div>
                ))}
             </div>
          </CardContent>
          <CardFooter>
             <Button variant="outline" size="sm" className="w-full bg-white text-black hover:bg-zinc-100">View All</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
