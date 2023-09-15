import * as React from "react"
import { ThemeProvider } from 'next-themes'
import Hero from "./components/hero/Hero"
import Skills from "./components/skills/Skills"
import Projects from "./components/projects/Projects"
import About from "./components/about/About"
import IconList from "./components/iconList/IconList"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/footer"


export default function Home() {
  return (
      <div>
        <IconList />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
  )
}
