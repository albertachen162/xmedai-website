'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Dna, Microscope, Stethoscope, Mail } from "lucide-react"
import Link from "next/link"

export function LandingPageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-center">
        <div className="container flex items-center justify-between">
          <Link className="flex items-center justify-center" href="#">
            <Brain className="h-6 w-6 mr-2" />
            <span className="font-bold">xMedAI</span>
          </Link>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#benefits">
              Benefits
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
              About
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to xMedAI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Revolutionizing healthcare with cutting-edge AI technology
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <Link href="#contact">Get Started</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Our Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <Dna className="w-8 h-8 mb-2" />
                  <CardTitle>AI-Powered Diagnostics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Leverage advanced AI algorithms for accurate and rapid medical diagnostics.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Microscope className="w-8 h-8 mb-2" />
                  <CardTitle>Predictive Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Utilize machine learning to predict potential health risks and outcomes.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Stethoscope className="w-8 h-8 mb-2" />
                  <CardTitle>Personalized Treatment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Tailor medical treatments based on individual patient data and AI insights.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Brain className="w-8 h-8 mb-2" />
                  <CardTitle>Continuous Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Our AI systems continuously learn and improve from new medical data and research.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Benefits of xMedAI
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">For Healthcare Providers</h3>
                <ul className="list-disc list-inside text-left">
                  <li>Improved diagnostic accuracy</li>
                  <li>Reduced time to diagnosis</li>
                  <li>Enhanced treatment planning</li>
                  <li>Streamlined workflow</li>
                </ul>
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="text-xl font-bold mb-2">For Patients</h3>
                <ul className="list-disc list-inside text-left">
                  <li>Faster and more accurate diagnoses</li>
                  <li>Personalized treatment plans</li>
                  <li>Improved health outcomes</li>
                  <li>Enhanced patient experience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              About xMedAI
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 text-center">
              xMedAI is at the forefront of medical technology, combining artificial intelligence with healthcare 
              expertise to improve patient outcomes and revolutionize medical practices. Our mission is to empower 
              healthcare professionals with cutting-edge AI tools and insights.
            </p>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Contact Us
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <Mail className="w-6 h-6" />
              <a href="mailto:sales@xmedai.com" className="text-lg hover:underline">
                sales@xmedai.com
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 w-full shrink-0 border-t">
        <div className="container px-4 md:px-6 mx-auto flex flex-col sm:flex-row justify-between items-center">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 xMedAI. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}