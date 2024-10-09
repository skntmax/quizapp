import React, { useState, useEffect } from "react";
import { ClockLoader } from "react-spinners";

export default function Timer() {
    const [time, setTime] = useState(600); // Initialize time to 600 seconds (10 minutes)

    useEffect(() => {
        if (time > 0) { // Only set the interval if time is greater than 0
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1); // Decrement time every second
            }, 1000);

            return () => clearInterval(timer); // Cleanup the interval on unmount
        }
    }, [time]); // Re-run effect whenever 'time' changes

    // Function to format time in mm:ss format
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? `0${secs}` : secs}`;
    };

    return (
        <>
            <div className="flex flex-col items-center">
                
                <div className="flex items-center text-lg font-semibold">
                    <ClockLoader
                    // color={"#4CAF50"} // Spinner color, you can customize it
                    loading={time > 0} // Spinner only shows if time is greater than 0
                    size={25}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />:{formatTime(time)}
                </div>
            </div>
        </>
    );
}
