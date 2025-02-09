import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ExplanationSection() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How it works</AccordionTrigger>
        <AccordionContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Server Actions:</strong> The form submission is handled by a server action (greet function in
              actions.ts). This function processes the input on the server and returns a greeting message.
            </li>
            <li>
              <strong>Shadcn UI Components:</strong> We use Shadcn UI for styling, including Button, Input, Card, and
              Accordion components. These provide a consistent and modern look to our application.
            </li>
            <li>
              <strong>Next.js 15.1 Features:</strong> We utilize the latest Next.js features such as the App Router,
              Server Components, and Server Actions. The page.tsx file is a Server Component, while GreetingForm is a
              Client Component to enable client-side interactivity.
            </li>
            <li>
              <strong>TypeScript:</strong> The entire application is built with TypeScript, ensuring type safety and
              improving developer experience.
            </li>
            <li>
              <strong>Responsiveness:</strong> The layout is designed to be responsive, adjusting for both desktop and
              mobile views using Tailwind CSS classes.
            </li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

