'use client';
import { Button } from "@/components/ui/button";
import { Step, Stepper } from 'react-form-stepper';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { SelectUi } from "./SelectUi";

export function DialogUi() {
    const [open, setOpen] = useState(true); // Open the dialog by default
    const [activeStep, setActiveStep] = useState(0); // State to manage active step

    // Optionally, you can manage dialog state using useEffect if needed
    useEffect(() => {
        // Example: Open dialog when component mounts
        setOpen(true);
    }, []);

    const handleNext = () => {
        if (activeStep < 2) { // Assuming there are 3 steps (0, 1, 2)
            setActiveStep((prevStep) => prevStep + 1);
        }
    };

    const handleBack = () => {
        if (activeStep > 0) {
            setActiveStep((prevStep) => prevStep - 1);
        }
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <Stepper
                    steps={[{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }]}
                    activeStep={activeStep}
                />

                {
                    activeStep == 0 && (
                        <>
                            <DialogHeader>
                                <DialogTitle>Select language preference</DialogTitle>
                                <DialogDescription>
                                    Choose your preferences from the available options. Your selection will help us tailor your experience to better suit your needs. Make sure to review and save your changes before proceeding.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <SelectUi />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <SelectUi />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 p-4">
                                {/* Rainbow Color Buttons */}
                                <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-red-400">
                                    Red
                                </button>
                                <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-yellow-400">
                                    Yellow
                                </button>
                                <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-green-400">
                                    Green
                                </button>
                                <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-blue-400">
                                    Blue
                                </button>
                                <button className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-indigo-400">
                                    Indigo
                                </button>
                                <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-orange-400">
                                    Orange
                                </button>
                                <button className="bg-purple-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-purple-400">
                                    Purple
                                </button>
                            </div>
                        </>
                    )
                }

                {
                    activeStep == 1 && (
                        <>
                            <DialogHeader>
                                <DialogTitle>Select catogo preference</DialogTitle>
                                <DialogDescription>
                                    Choose your preferences from the available options. Your selection will help us tailor your experience to better suit your needs. Make sure to review and save your changes before proceeding.
                                </DialogDescription>
                            </DialogHeader>

                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <SelectUi />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <SelectUi />
                                </div>
                            </div>
                            <div className="flex flex-wrap gap-4 p-4">
                                {/* Rainbow Color Buttons */}
                                <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-red-400">
                                    Red
                                </button>
                                <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-yellow-400">
                                    Yellow
                                </button>
                                <button className="bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-green-400">
                                    Green
                                </button>
                                <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-blue-400">
                                    Blue
                                </button>
                                <button className="bg-indigo-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-indigo-400">
                                    Indigo
                                </button>
                                <button className="bg-orange-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-orange-400">
                                    Orange
                                </button>
                                <button className="bg-purple-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-purple-400">
                                    Purple
                                </button>
                            </div>
                        </>
                    )
                }

                {
                    activeStep == 2 && (
                        <>
                            Ready...
                        </>
                    )
                }

                <DialogFooter>
                    {/* <Button type="submit" onClick={() => setOpen(false)}>
                        Save changes
                    </Button> */}

                    {/* Navigation Buttons */}
                    <div className="flex justify-between flex-row-reverse  mt-4">
                        <Button
                            variant="outlined"
                            onClick={handleBack}
                            className='bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-red-400'
                            disabled={activeStep === 0} // Disable back button on first step
                        >
                            Back
                        </Button>
                        <Button
                            variant="contained"
                            onClick={handleNext}
                            className='bg-green-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-green-400'
                        >
                            {activeStep === 2 ? 'Finish' : 'Next'} {/* Change button text on last step */}
                        </Button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
