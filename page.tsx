import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* Sidebar Navigation */}
      <nav className="fixed left-0 top-0 h-screen w-64 border-r border-gray-800 p-8">
        <div className="mb-16">
          <Image
            src="/placeholder.svg"
            alt="WayRay Logo"
            width={100}
            height={30}
            className="text-red-500"
          />
        </div>
        <div className="space-y-6">
          <Link
            href="#"
            className="block text-sm text-red-500 hover:text-red-400"
          >
            Main
          </Link>
          <Link
            href="#"
            className="block text-sm text-gray-400 hover:text-white"
          >
            Holograktor
          </Link>
          <Link
            href="#"
            className="block text-sm text-gray-400 hover:text-white"
          >
            Deep Reality Display™
          </Link>
          <Link
            href="#"
            className="block text-sm text-gray-400 hover:text-white"
          >
            Technology
          </Link>
          <Link
            href="#"
            className="block text-sm text-gray-400 hover:text-white"
          >
            Culture & Jobs™
          </Link>
          <div className="pt-40">
            <Link
              href="#"
              className="block text-sm text-gray-400 hover:text-white"
            >
              Press Area
            </Link>
            <Link
              href="#"
              className="block text-sm text-gray-400 hover:text-white"
            >
              Contacts
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 pl-64">
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-screen w-full">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="City street with AR overlay"
              fill
              className="object-cover brightness-50"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent" />
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 p-20">
            <div className="space-y-4">
              <div className="flex gap-4">
                <Badge className="bg-red-500 hover:bg-red-600">
                  TRUE AR™ Display
                </Badge>
                <Badge variant="secondary">#1 in Holography</Badge>
                <Badge variant="secondary">Focus on Deep Tech</Badge>
              </div>

              <h1 className="max-w-2xl text-5xl font-bold leading-tight">
                The first-ever Holographic Augmented Reality Display
              </h1>

              <p className="max-w-2xl text-lg text-gray-300">
                We are the first company to invent and master the technology for
                creating a True Augmented Reality experience for the automotive
                industry and beyond. The information displayed on WayRay's
                Holographic AR Display is seamlessly integrated into the real world at
                various depths. Currently, no other existing head-up display can
                create such a vivid 3D image.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

