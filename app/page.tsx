import GreetingForm from "./components/GreetingForm"
import ExplanationSection from "./components/ExplanationSection"

export default function Home() {
  return (
    <main className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Next.js Greeting App</h1>
      <GreetingForm />
      <ExplanationSection />
    </main>
  )
}

