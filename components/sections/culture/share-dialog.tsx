"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Check, Copy } from "lucide-react"

interface ShareDialogProps {
  jobTitle: string
  jobId: string
}

export function ShareDialog({ jobTitle, jobId }: ShareDialogProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  // Get the base URL (works in both client and server components)
  const getShareUrl = () => {
    if (typeof window !== "undefined") {
      const baseUrl = window.location.origin
      return `${baseUrl}/jobs/${jobId}`
    }
    return ""
  }

  const handleCopy = async () => {
    const url = getShareUrl()
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="flex-1 bg-secondary">Share</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md p-4">
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <p className="text-sm text-muted-foreground">Share: {jobTitle}</p>
            <div className="flex items-center gap-2">
              <Input value={getShareUrl()} readOnly className="flex-1" />
              <Button size="icon" onClick={handleCopy} className="shrink-0">
                {copied ? <Check className="h-4 w-4 text-white" /> : <Copy className="h-4 w-4 text-white" />}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

