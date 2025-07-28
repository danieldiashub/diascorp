import { SidebarDiasCorp } from "./sidebars/diascorp-sidebar" // ajuste o caminho

export default function Home() {
  return (
    // Adicionando classes para o tema escuro
    <main className="dark bg-background text-foreground min-h-screen">
      <SidebarDiasCorp />
    </main>
  )
}