
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
            <header className="sticky top-0 z-40 w-full bg-background">
                <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                    <div className="flex gap-6 md:gap-10">
                        <Link href="/" className="flex items-center space-x-4">
                            {/* <Icons.logo className="h-6 w-6" /> */}
                            <span className="inline-block font-bold">{siteConfig.name}</span>
                        </Link>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-4">
                        <nav className="flex items-center bg-gray space-x-1">
                            <User /> {cdDetails ? cdDetails.USERNAME : null}
                            <Trophy className="ml-2" />
                            <ThemeToggle />
                        </nav>
                    </div>
                </div>
            </header>
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
