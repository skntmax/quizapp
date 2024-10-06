'use client';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { Stepper } from 'react-form-stepper';
import { SelectUi } from "./SelectUi";

const steps = [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }];

export function DialogUi({ data, setData }) {
    return (
        <Dialog open={data.dialog} onOpenChange={setData}>
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
                            {
                                data.language !== undefined &&
                                (
                                    <div className="flex flex-wrap justify-center gap-4 p-4">
                                        {data.language.map((item) =>
                                            <button className="bg-red-500 text-white font-bold py-2 px-6 rounded-full shadow hover:bg-red-400">
                                                {item.TITLE}
                                            </button>
                                        )}
                                    </div>)
                            }
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
