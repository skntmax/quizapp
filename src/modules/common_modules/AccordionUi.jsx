import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionUi({ title, description, disabled }) {
    return (
        <Accordion type="single" collapsible className={`w-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={!disabled}>
            <AccordionItem value="item-1">
                <AccordionTrigger className='font-semibold border-t'disabled={!disabled} >{title}</AccordionTrigger>
                <AccordionContent>
                    {description}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
