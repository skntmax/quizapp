"use client"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"

export function ToastDestructive() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your selction to show the description please select option first.",
          action: <ToastAction altText="Try again">Try after select</ToastAction>,
        })
      }}
    >
      Show Toast
    </Button>
  )
}
