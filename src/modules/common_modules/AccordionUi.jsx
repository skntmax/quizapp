import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ToastDestructive } from "./ToastDestructive"
import { toast } from "@/hooks/use-toast"
import { ToastAction } from "@radix-ui/react-toast"

export function AccordionUi({ title, description, disabled }) {
    const handleClick = (e) => {
        if (!disabled) {
            e.preventDefault()  // Prevent default accordion behavior if disabled
            toast({
                variant: "red",
                title: "Uh oh! Something went wrong.",
                description: "There was a problem with your selction to show the description please select option first.",
                action: <ToastAction altText="Try again">Try after select</ToastAction>,
              })
        }
    }

    return (
        <Accordion
            type="single"
            collapsible
            className={`w-full ${!disabled ? 'cursor-not-allowed opacity-50' : ''}`}
        >
            <AccordionItem value="item-1">
                <AccordionTrigger
                    className='font-semibold border-t'
                    onClick={handleClick}
                >
                    {title}
                </AccordionTrigger>
                <AccordionContent>
                    {description}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
