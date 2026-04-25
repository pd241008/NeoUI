import { ComponentShowcase } from "@/components/docs/component-showcase"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CardPage() {
  const cardCode = `<Card className="w-[350px]">
  <CardHeader>
    <CardTitle>Create Project</CardTitle>
    <CardDescription>Deploy your new project in one-click.</CardDescription>
  </CardHeader>
  <CardContent>
    <div className="p-4 bg-muted neo-border italic font-medium">
      Card Content goes here with specific Neo-brutalist padding and borders.
    </div>
  </CardContent>
  <CardFooter className="flex justify-between">
    <Button variant="outline">Cancel</Button>
    <Button variant="primary">Deploy</Button>
  </CardFooter>
</Card>`

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black uppercase tracking-tight">Card</h1>
        <p className="text-lg text-muted-foreground mt-2">
          The foundation of the Neo-brutalist layout. Flexible containers with thick borders and hard shadows.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-2xl font-black uppercase underline decoration-neo-yellow decoration-4 underline-offset-8">Standard Card</h2>
        <ComponentShowcase code={cardCode} title="card.tsx">
          <Card className="w-[450px]">
            <CardHeader>
              <CardTitle>Create Project</CardTitle>
              <CardDescription>Deploy your new project in one-click.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-muted neo-border italic font-medium dark:text-black dark:bg-zinc-200">
                Neo-brutalism is about honesty in materials and stark geometric clarity.
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Cancel</Button>
              <Button variant="primary">Deploy</Button>
            </CardFooter>
          </Card>
        </ComponentShowcase>
      </section>
    </div>
  )
}
