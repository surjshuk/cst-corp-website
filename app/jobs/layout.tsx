import type { Metadata } from "next"

export const metadata: Metadata = {  
  title: "Careers at CST Corp",  
  description: "Join us in building autonomous defense robots.",  
}

export default function JobsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}