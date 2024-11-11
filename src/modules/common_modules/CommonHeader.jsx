'use client'
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site"
import { cookies } from "@/constant"
import getSingleCookiesCSR from "@/utils/cookies"
import { Link, Trophy, User } from "lucide-react"
import Timer from "./Timer"
import { useCallback } from "react"
import { useSelector } from "react-redux"

export default function CommonHeader() {
    const cdDetails = getSingleCookiesCSR(cookies.btcode_live_cd)
    let quizDetails = useSelector(ele => ele?.quiz?.quizSessionDetails)
    const lastSentReward = useSelector((state) => state.quiz.lastSentReward);

    let TimerCmp = useCallback(() => {
        return <Timer timerSession={quizDetails} />
    }, [quizDetails?.QUIZ_TIMESPAN, quizDetails?.CREATED_ON])

    return (
        <header className="sticky top-0 z-40 w-full px-4 bg-background">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <div className="flex items-center text-black dark:text-white space-x-4">
                        {/* <Icons.logo className="h-6 w-6" /> */}
                        <span className="inline-block font-bold ">BYTE CODE</span>
                    </div>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        {quizDetails?.QUIZ_TIMESPAN && quizDetails?.CREATED_ON && TimerCmp()}
                        <User /> {cdDetails ? cdDetails.USERNAME : null}
                        <Trophy className="ml-2" />
                        {lastSentReward}
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    )
}