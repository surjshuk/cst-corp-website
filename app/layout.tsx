import type { Metadata } from "next"
import localFont from "next/font/local";
import "./globals.css"
// import SideNavbar from "@/components/sections/common/SideNavbar"
// import { Footer } from "@/components/sections"
// import Image from "next/image"
// import { LOGO } from "@/app/assets/"
import { GoogleAnalytics } from '@next/third-parties/google'
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from '@vercel/analytics/next';
import { ActiveSectionProvider } from "@/context/ActiveSectionContext";
import Sidebar from "@/components/Sidenavbar";
import { Footer } from "@/components/sections";


// const inter = Inter({ subsets: ["latin"] })

const myFont = localFont({
  src: [
    {
      path: 'fonts/WayRayGrotesk_Thin.woff2',
      weight: '100',
      style: 'normal',
    },
    {
      path: 'fonts/WayRayGrotesk_Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: 'fonts/WayRayGrotesk_Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: 'fonts/WayRayGrotesk_Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: 'fonts/WayRayGrotesk_Semibold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: 'fonts/WayRayGrotesk_Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  display: "swap"
})

export const metadata: Metadata = {
  title: "CST Corp",
  description: "",
  openGraph: {
    url: "/",
    type: "website",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className="scroll-smooth">
      
      <body className={`${myFont.className} w-full`}>

        <div className="lg:flex block">
          {/* <header className="bg-white h-[51px] flex-center fixed w-full tablet:hidden z-20">
            <Image src={LOGO} alt="Trulli" className="w-fit h-10"/>
          </header>  */}
          
          {/* <SideNavbar /> */}
          <ActiveSectionProvider>
            <Sidebar/>
            <main className=" bg-background w-full">
              {children}
              <Footer />
              {/* <UpButton/> */}
            </main>
          </ActiveSectionProvider>
        </div>
        <Toaster />
         <Analytics />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_GID || "G-XYZ"} />  
    </html>
  )
}

  