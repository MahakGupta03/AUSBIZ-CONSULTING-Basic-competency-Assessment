"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { greet } from "../actions"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </Button>
  )
}

export default function GreetingForm() {
  const [greeting, setGreeting] = useState<string | null>(null)

  async function handleSubmit(formData: FormData) {
    const result = await greet(formData)
    setGreeting(result)
  }

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <form action={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Input type="text" name="name" placeholder="Enter your name" className="flex-grow" required />
            <SubmitButton />
          </div>
        </form>
        {greeting && <p className="mt-4 text-lg font-semibold text-center">{greeting}</p>}
      </CardContent>
    </Card>
  )
}

