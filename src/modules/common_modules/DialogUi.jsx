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
import { ShimmerButton } from "react-shimmer-effects";
import { ShimmerButtonThree, ShimmerButtonTen } from "./shimmer-effects/ShimmerButtonUi";
import { Button } from "@/components/ui/button";


export function DialogUi({ data, setData, handleCategories, handleDefficultLevel, steps }) {
    const { categories, difficulty_level } = data;

    return (
        <Dialog open={data.dialog} onOpenChange={(open) => open && setData(prev => ({ ...prev, dialog: open }))}>

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
                                categories.data === undefined &&
                                (
                                    <div className="flex flex-wrap justify-center gap-4 p-4">
                                        <ShimmerButtonTen className='' />
                                    </div>)
                            }
                            {
                                categories.data !== undefined && categories.data.length > 0 &&
                                (
                                    <div className="flex flex-wrap justify-center gap-4 p-4">
                                        {categories.data.map((item) =>
                                            <Button
                                                variant='destructive'
                                                size='lg'
                                                onClick={() => handleCategories(item._id)}
                                            >
                                                {item.TITLE}
                                            </Button>
                                        )}
                                    </div>)
                            }
                        </>
                    )
                }

                {
                    data.activeStep == 1 && (
                        <>
                            {/* <DialogHeader>
                                <DialogTitle>Select catogo preference</DialogTitle>
                                <DialogDescription>
                                    Choose your preferences from the available options. Your selection will help us tailor your experience to better suit your needs. Make sure to review and save your changes before proceeding.
                                </DialogDescription>
                            </DialogHeader> */}
                            {
                                difficulty_level === undefined &&
                                (
                                    <div className="flex flex-wrap justify-center gap-4 p-4">
                                        <ShimmerButtonThree className='' />
                                    </div>)
                            }
                            {
                                difficulty_level !== undefined && difficulty_level.length > 0 &&
                                (
                                    <div className="flex flex-wrap justify-center gap-4 p-4">
                                        {difficulty_level.map((item) =>
                                            <Button
                                                variant='destructive'
                                                size='lg'
                                                onClick={() => handleDefficultLevel(item._id)}
                                            >
                                                {item.DIFFICULTY_LEVEL}
                                            </Button>
                                        )}
                                    </div>)
                            }
                        </>

                    )
                }
            </DialogContent>
        </Dialog>
    );
}
