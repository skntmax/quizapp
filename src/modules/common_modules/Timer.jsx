'use client'
import { useEffect, useState } from "react";
import { ClockLoader } from "react-spinners";

export default function Timer() {
    const [time, setTime] = useState(6000); // Initialize time to 10 seconds for testing

    useEffect(() => {
        // Check if time is greater than 0 before setting the interval
        if (time > 0) {
            const timer = setInterval(() => {
                setTime((prevTime) => prevTime > 0 ? prevTime - 1 : 0); // Ensure it doesn't go below 0
            }, 1000);

            return () => clearInterval(timer); // Cleanup the interval on unmount
        } else {
            // When time reaches 0, refresh the page
            window.location.reload();
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
            <div className="flex items-center text-lg font-semibold">
                <ClockLoader
                    loading={true} // Keep the loader visible
                    size={25}
                    speedMultiplier={time > 0 ? 0.5 : 0} // Stop the loader animation when time hits 0
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                :{formatTime(time)}
            </div>
        </div>
    );
}
