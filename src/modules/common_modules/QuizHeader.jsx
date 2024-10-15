
import { cookies } from "@/constant";
import getSingleCookiesCSR from "@/utils/cookies";
import { Trophy, User } from "lucide-react";

import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/config/site";
import Link from "next/link";

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
            </div>
        </>
    );
};

export default QuizHeader;
