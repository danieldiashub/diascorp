"use client" // Necessário se estiver usando Next.js App Router

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose, // Importe o SheetClose
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"

// Importando os ícones
import {
  Hash,
  Clock,
  Plane,
  Headset,
  Send,
  Menu, // Ícone para abrir
  PanelLeftClose, // Ícone para fechar
} from "lucide-react"

export function SidebarWithToggle() {
  // O estado continua controlando a visibilidade
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { icon: <Hash className="h-4 w-4" />, label: "Design Engineering" },
    { icon: <Clock className="h-4 w-4" />, label: "Sales & Marketing" },
    { icon: <Plane className="h-4 w-4" />, label: "Travel" },
    { icon: <Headset className="h-4 w-4" />, label: "Support" },
    { icon: <Send className="h-4 w-4" />, label: "Feedback" },
  ]

  return (
    <>
      {/* Botão principal na página para ABRIR a sidebar */}
      <div className="p-4">
        <Button onClick={() => setIsOpen(true)} size="icon" variant="outline">
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent side="left" className="w-[300px] sm:w-[350px]">
          <SheetHeader className="flex flex-row items-center justify-between">
            <SheetTitle className="text-left text-xl font-semibold">
              Projects
            </SheetTitle>
            {/* Ícone para FECHAR a sidebar dentro dela mesma */}
            <SheetClose asChild>
              <Button size="icon" variant="ghost">
                <PanelLeftClose className="h-5 w-5" />
              </Button>
            </SheetClose>
          </SheetHeader>

          <div className="mt-6 flex flex-col space-y-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start text-base"
              >
                {item.icon}
                <span className="ml-3">{item.label}</span>
              </Button>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}