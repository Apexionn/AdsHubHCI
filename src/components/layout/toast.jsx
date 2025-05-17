import { Toaster } from "@/components/ui/sonner"

export default function ToasterLayout({ children }) {
  return (
    <div>
      <main>{children}</main>
      <Toaster />
    </div>
  )
}