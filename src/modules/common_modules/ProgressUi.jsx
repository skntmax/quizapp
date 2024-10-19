"use client"

import * as React from "react"
import { Progress } from "@/components/ui/progress"
import { useDispatch } from "react-redux";
import { setProgressPercentage } from "@/redux/counterSlice";

export function ProgressUi({ correct, incorrect, remaining }) {
    const [progress, setProgress] = React.useState(0);
    const dispatch = useDispatch();

    React.useEffect(() => {
        // Calculate the total number of questions
        const total = correct + incorrect + remaining;

        // Calculate progress based on answered questions (correct + incorrect)
        const answered = correct + incorrect;
        const progressPercentage = total > 0 ? (answered / total) * 100 : 0;

        setProgress(progressPercentage);
        dispatch(setProgressPercentage(Math.ceil(correct + incorrect + remaining) > 0
            ? Math.round(((correct + incorrect) / (correct + incorrect + remaining)) * 100 / 10) * 10
            : 0));
    }, [correct, incorrect, remaining]); // Recalculate when any of these values change

    return <>
        <Progress value={progress} className="w-[60%]" />
        <div className='flex justify-center items-center'>{Math.ceil(correct + incorrect + remaining) > 0
            ? Math.round(((correct + incorrect) / (correct + incorrect + remaining)) * 100 / 10) * 10
            : 0

        }%</div>
    </>
}
