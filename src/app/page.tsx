"use client"

import Hero from "@/components/sections/Hero"
import GettingStarted from "@/components/sections/GettingStarted"
import ApiEndpoints from "@/components/sections/ApiEndpoints"
import ResponseFormat from "@/components/sections/ResponseFormat"
import IntegrationExamples from "@/components/sections/IntegrationExamples"
import ErrorHandling from "@/components/sections/ErrorHandling"
import Support from "@/components/sections/Support"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Hero />
      <main className="container mx-auto px-6 max-w-9xl py-20">
        <GettingStarted />
        <ApiEndpoints />
        <ResponseFormat />
        <IntegrationExamples />
        <ErrorHandling />
        <Support />
      </main>
    </div>
  )
}