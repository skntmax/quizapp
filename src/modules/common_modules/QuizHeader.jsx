import { ThremeToggle } from "./ThremeToggle";

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
                    {/* Incorrect */}
                    <div className="text-lg font-semibold">Refer & Earn</div>

                </div>
                <div class="flex-grow">
                    {/* Remaining */}
                    <div className="text-lg font-semibold">Remaining: {remaining}</div>
                </div>
                <div class="flex-shrink-0">
                    <ThremeToggle />
                </div>
            </div>
        </>
    );
};

export default QuizHeader;
