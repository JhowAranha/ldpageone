"use client" // Obrigatório no Next.js para usar hooks de estado e eventos de clique

import * as React from "react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { GlassWater, Moon, Sun } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  // Função simples para alternar entre claro e escuro
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleTheme}
        aria-label="Alternar tema"
      >
        <Sun className="h-[1.4rem] w-[1.4rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        
        <Moon className="absolute h-[1.4rem] w-[1.4rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      </Button>
  )
}