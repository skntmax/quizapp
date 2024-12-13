'use client'
import { ThemeToggle } from "@/components/theme-toggle"
import { siteConfig } from "@/config/site"
import { cookies } from "@/constant"
import getSingleCookiesCSR from "@/utils/cookies"
import { Link, Trophy, User } from "lucide-react"
import Timer from "./Timer"
import { useSelector } from "react-redux"
import { useCallback } from "react"

export default function CommonHeader() {
    const cdDetails = getSingleCookiesCSR(cookies.btcode_live_cd)
    let quizDetails = useSelector(ele => ele?.quiz?.quizSessionDetails)
    const lastSentReward = useSelector((state) => state.quiz.lastSentReward);
    const dialog = useSelector((state) => state.quiz.dialog);

    let TimerCmp = useCallback(() => {
        return <Timer timerSession={quizDetails} />
    }, [quizDetails?.QUIZ_TIMESPAN, quizDetails?.CREATED_ON])

    return (
        <>
            {/* <header className="sticky top-0 z-40 w-full px-4 bg-background">
                <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                    <div className="flex gap-6 md:gap-10">
                        <div className="flex items-center text-black dark:text-white space-x-4">
                            <a href="https://bytecode.live/">
                                <span className="inline-block font-bold ">
                                    <img
                                        width="170" height="25"
                                        src="https://bytecode.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flightlogo.178ba7a4.png&w=256&q=75"
                                        style={{ color: "transparent" }} />
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-end space-x-4">
                        <nav className="flex items-center space-x-1">
                            {!dialog && quizDetails?.QUIZ_TIMESPAN && quizDetails?.CREATED_ON && TimerCmp()}
                            <User /> {cdDetails ? cdDetails.USERNAME : null}
                            <Trophy className="ml-2" />
                            {lastSentReward}
                            <ThemeToggle />
                        </nav>
                    </div>
                </div>
            </header> */}
            <header className="sticky top-0 z-40 w-full px-4 bg-background">
                <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                    <div class="flex flex-wrap justify-between items-center mx-auto w-full">
                        <a href="https://bytecode.live/" class="flex items-center">
                            <img
                                width="150" height="25"
                                src="https://bytecode.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flightlogo.178ba7a4.png&w=256&q=75"
                                class="h-6 sm:h-9" alt="Flowbite Logo" />
                            {/* <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                        </a>
                        <div class="flex items-center lg:order-1">
                            <div class="flex space-x-2 items-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                {!dialog && quizDetails?.QUIZ_TIMESPAN && quizDetails?.CREATED_ON && TimerCmp()}
                            </div>

                            <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open main menu</span>
                                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                                <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div class="hidden md:rounded-xl  justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul class="flex justify-center items-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <div class="flex space-x-2 items-center md:border-b md:border-gray-100 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-foreground dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                        <span><Trophy className="ml-2" /></span>
                                        <span>{lastSentReward}</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="py-2 pr-4 pl-3 space-x-2 flex text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        <span><User /></span>
                                        <span>{cdDetails ? cdDetails.USERNAME : null}</span>
                                    </div>
                                </li>
                                <li>
                                    <div class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">
                                        <ThemeToggle />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}