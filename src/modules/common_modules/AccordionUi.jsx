import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export function AccordionUi({ title, description, disabled }) {
    const handleClick = (e) => {
        if (!disabled) {
            e.preventDefault()  // Prevent default accordion behavior if disabled
            alert('This section is disabled!')
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
