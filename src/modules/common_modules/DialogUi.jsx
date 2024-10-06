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
import { getRequest } from "@/crud_operations/RequestHandler";

const steps = [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }];

export function DialogUi() {
    const [data, setData] = useState({
        dialog: true,
        activeStep: 0,
        language: undefined,
        defficult_level: undefined
    });

    useEffect(() => {
        setData({ ...data, open: true });
    }, []);

    const handleNext = () => {
        if (activeStep < 2) { // Assuming there are 3 steps (0, 1, 2)
            set({
                ...data,
                activeStep: data.prevStep + 1
            });
        }
    };

    const handleLanguage = async () => {
        try {
            let responce = await getRequest('')
            if (responce.status) {
                setData()
            }
        }
        catch (error) {

        }
        handleNext();
    };

    const handleDefficultLevel = async () => {
        try {
            let responce = await getRequest('')
            if (responce.status) {
                setData()
            }
        }
        catch (error) {

        }
        handleNext()
    };

    return (
        <Dialog open={data.open} onOpenChange={setData}>
            <DialogContent className="sm:max-w-[425px]">
                <Stepper
                    steps={steps}
                    activeStep={data.activeStep}
                />

                {
                    data.activeStep == 0 && (
                        <>
                            {/* <DialogHeader>
                                <DialogTitle>Select language preference</DialogTitle>
                                <DialogDescription>
                                    Choose your preferences from the available options. Your selection will help us tailor your experience to better suit your needs. Make sure to review and save your changes before proceeding.
                                </DialogDescription>
                            </DialogHeader> */}

                            {/* <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <SelectUi />
                                </div>
                                <div className="grid grid-cols-4 items-center gap-4">
                                    <SelectUi />
                                </div>
                            </div> */}
                            <div className="flex flex-wrap justify-center gap-4 p-4">
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
                    data.activeStep == 1 && (
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
                    data.activeStep == 2 && (
                        <>
                            Ready...
                        </>
                    )
                }
            </DialogContent>
        </Dialog>
    );
}
