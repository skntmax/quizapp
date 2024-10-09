import { Gift } from "lucide-react";
import { ThremeToggle } from "./ThremeToggle";
import Timer from "./Timer";

const QuizHeader = ({ correct, incorrect, remaining }) => {
    return (
        <>
            <div class="flex flex-row justify-between shadow hover:bg-primary/90 p-6 items-center">
                <div class="flex-shrink-0">
                    {/* Correct */}
                    <div className="text-lg font-semibold">Correct: {correct}</div>
                </div>
                <div class="flex-grow">
                    {/* Incorrect */}
                    <div className="text-lg font-semibold">Incorrect: {incorrect}</div>

                </div>
                <div class="flex-grow">
                    {/* Remaining */}
                    <div className="text-lg font-semibold">Remaining: {remaining}</div>
                </div>
                <div class="flex-grow">
                    {/* Refer & Earn */}
                    <div className="flex items-center text-lg font-semibold">
                        Rewards: <Gift className="ml-2" />
                    </div>
                </div>
                <div class="flex-grow">
                    {/* Refer & Earn */}
                    <div className="text-lg font-semibold"><Timer /></div>
                </div>
                <div class="flex-shrink-0">
                    <ThremeToggle />
                </div>
            </div>
        </>
    );
};

export default QuizHeader;
