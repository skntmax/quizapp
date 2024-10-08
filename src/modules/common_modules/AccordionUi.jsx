import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionUi({ title, description, disabled }) {
    return (
        <Accordion type="single" collapsible className={`w-full ${disabled ? ' cursor-not-allowed' : 'opacity-50'}`} disabled={!disabled}>
            <AccordionItem value="item-1">
                <AccordionTrigger className='font-semibold border-t' disabled={!disabled} >{title}</AccordionTrigger>
                <AccordionContent>
                    {description}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
