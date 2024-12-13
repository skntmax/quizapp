'use client'
import { getRandomVariant, isTimeLeftOrNot } from "@/utils/logix";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ClockLoader } from "react-spinners";


export default function Timer({timerSession}) {
   
    let initTimer =0 
    const {QUIZ_TIMESPAN ,CREATED_ON }  = timerSession 
    if(QUIZ_TIMESPAN && CREATED_ON ) {
        initTimer= isTimeLeftOrNot(CREATED_ON ,QUIZ_TIMESPAN )
     }

    const [time, setTime] = useState(initTimer); // Initialize time to 10 seconds for testing

    useEffect(() => {
        // Check if time is greater than 0 before setting the interval
        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime > 0 ? prevTime - 1 : 0); // Ensure it doesn't go below 0
            }, 1000);

            return () => clearInterval(timer); // Cleanup the interval on unmount
        } else {
            // When time reaches 0, refresh the page
            // window.location.reload();
            // calling submti api , then return to
            // https://bytecode.live/quiz/history
            // window.location.href= window.location.origin+"/quiz/history"
        }
    }, [time]); // Re-run effect whenever 'time' changes

    // Function to format time in mm:ss format
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    return (
        <div className="flex flex-col items-center">
            <div className="flex items-center mb-2 text-lg font-semibold">
            {formatTime(time)}&nbsp;:&nbsp;
                <ClockLoader
                    loading={true} // Keep the loader visible
                    size={25}
                    color='#6ee7b7'
                    speedMultiplier={time > 0 ? 0.5 : 0} // Stop the loader animation when time hits 0
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                  
            </div>
        </div>
    );
}
