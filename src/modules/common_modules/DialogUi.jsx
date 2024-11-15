'use client';
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent
} from "@/components/ui/dialog";
import { getRandomVariant } from "@/utils/logix";
import { Stepper } from 'react-form-stepper';
import { InfinitySpin } from "react-loader-spinner";
import { ShimmerButtonTen, ShimmerButtonThree } from "./shimmer-effects/ShimmerButtonUi";
import { useState } from "react";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";

export function DialogUi({ data, setData, handleCategories, handleDefficultLevel, steps, handleMoreCategory, loder, handleNext }) {
    const { categories, difficulty_level, more_cat_loder } = data;
    const [checked, setChecked] = useState(false);

    return (
        <Dialog open={data.dialog} onOpenChange={(open) => open && setData(prev => ({ ...prev, dialog: open }))}>

            <DialogContent className="sm:max-w-[425px]">
                <Stepper
                    steps={steps}
                    activeStep={data.activeStep}
                />
                {
                    loder ? <div className="flex flex-wrap justify-center gap-4 p-4">
                        <InfinitySpin
                            visible={true}
                            width="200"
                            color="#ed1d24"
                            ariaLabel="infinity-spin-loading"
                        />
                    </div>
                        :
                        <>

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
                                                    <InfinitySpin
                                                        visible={true}
                                                        width="200"
                                                        color="#ed1d24"
                                                        ariaLabel="infinity-spin-loading"
                                                    />
                                                </div>)
                                        }
                                        {
                                            more_cat_loder &&
                                            (
                                                <div className="flex flex-wrap justify-center gap-4 p-4">
                                                    <InfinitySpin
                                                        visible={true}
                                                        width="200"
                                                        color="#ed1d24"
                                                        ariaLabel="infinity-spin-loading"
                                                    />
                                                </div>)
                                        }
                                        {
                                            categories.data !== undefined && categories.data.length > 0 && !more_cat_loder &&
                                            (
                                                <div className="flex flex-wrap justify-center gap-4 p-4">
                                                    {categories.data.map((item) =>
                                                        <Button
                                                            variant={getRandomVariant()}
                                                            size='lg'
                                                            onClick={() => handleCategories(item._id)}
                                                        >
                                                            {`${item.TITLE} - ${item.totalCount}`}
                                                        </Button>
                                                    )}
                                                    <Button
                                                        variant={getRandomVariant()}
                                                        size='lg'
                                                        onClick={handleMoreCategory}
                                                    >
                                                        more...
                                                    </Button>
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
                                            difficulty_level.data === undefined &&
                                            (
                                                <div className="flex flex-wrap justify-center gap-4 p-4">
                                                    <InfinitySpin
                                                        visible={true}
                                                        width="200"
                                                        color="#ed1d24"
                                                        ariaLabel="infinity-spin-loading"
                                                    />
                                                </div>)
                                        }
                                        {
                                            difficulty_level.data !== undefined && difficulty_level.data.length > 0 &&
                                            (
                                                <div className="flex flex-wrap justify-center gap-4 p-4">
                                                    {difficulty_level.data.map((item) =>
                                                        <Button
                                                            variant={getRandomVariant()}
                                                            size="lg"
                                                            onClick={() => handleDefficultLevel(item._id)}
                                                        >
                                                            <div className="flex flex-col items-center">
                                                                <div className="text-lg font-semibold">
                                                                    {`${item.DIFFICULTY_LEVEL} ${item.TOTAL_COUNT}`}
                                                                </div>
                                                                <div className="flex items-center space-x-2 mt-1">
                                                                    <span>{item.QUIZ_TIMESPAN}</span>
                                                                    <Clock className="w-5 h-5" /> {/* Adjust size as needed */}
                                                                </div>
                                                            </div>
                                                        </Button>
                                                    )}
                                                </div>)
                                        }
                                    </>

                                )
                            }
                            {
                                data.activeStep == 2 && (
                                    <div>
                                        <div className={cn("flex flex-wrap justify-center text-center gap-4 p-4")}>By proceeding with this test, you acknowledge that you have read and understood the information provided and consent to participate voluntarily. Your participation implies agreement with the terms outlined, including any data usage as described.</div>
                                        <div className="flex items-center  justify-center text-center space-x-2 px-4">
                                            <Checkbox
                                                onClick={() => setChecked(!checked)}
                                                checked={checked}
                                            />
                                            <label
                                                htmlFor="terms"
                                                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                            >
                                                Accept terms and conditions
                                            </label>
                                        </div>
                                        <div className={cn("flex flex-wrap justify-center gap-4 p-4")}>
                                            <Button disabled={!checked} variant={getRandomVariant()} size='lg' onClick={() => handleNext()}>Start Test...</Button>
                                        </div>
                                    </div>
                                )
                            }
                        </>
                }
            </DialogContent>
        </Dialog>
    );
}
