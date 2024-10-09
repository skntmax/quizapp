
import { Gift, Trophy, User } from "lucide-react";
import { ThremeToggle } from "./ThremeToggle";
import Timer from "./Timer";
import { DropdownMenuUi } from "./DropdownMenuUi";
import { Button } from "@/components/ui/button";
import getSingleCookiesCSR from "@/utils/cookies";
import { cookies } from "@/constant";
import { setCookie } from "cookies-next";

const QuizHeader = ({ correct, incorrect, remaining }) => {
    const cdDetails = getSingleCookiesCSR(cookies.btcode_live_cd)
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
                        Rewards: <Trophy className="ml-2" />
                    </div>
                </div>
                <div class="flex-grow">
                    {/* Refer & Earn */}
                    <div className="text-lg font-semibold"><Timer /></div>
                </div>
                <div class="flex-shrink-0">
                    {/* <DropdownMenuUi/> */}
                    <Button variant="outline"><User /> {cdDetails ? cdDetails.USERNAME : null} </Button>
                    <ThremeToggle />
                </div>
            </div>
        </>
    );
};

export default QuizHeader;
