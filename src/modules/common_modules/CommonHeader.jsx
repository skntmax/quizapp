'use client';
import { ThemeToggle } from "@/components/theme-toggle";
// import { cookies } from "@/constant";
// import getSingleCookiesCSR from "@/utils/cookies";
// import { Coins, Trophy, User } from "lucide-react";
import { bytecodeUrls, cookies, quizUrls } from "@/constant";
import getSingleCookiesCSR, { deleteSingleCookie } from "@/utils/cookies";
import { Power, PowerOff, Trophy, User } from "lucide-react";
import Timer from "./Timer";
import { useSelector } from "react-redux";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function CommonHeader() {
    const router = useRouter();
    const [menuOpen, setMenuOpen] = useState(false);
    const cdDetails = getSingleCookiesCSR(cookies.btcode_live_cd);
    const quizDetails = useSelector((ele) => ele?.quiz?.quizSessionDetails);
    const lastSentReward = useSelector((state) => state.quiz.lastSentReward);
    const dialog = useSelector((state) => state.quiz.dialog);
   const totalCoins = useSelector((state) => state.quiz.totalCoins);
    
    const TimerCmp = useCallback(() => {
        return <Timer timerSession={quizDetails} />;
    }, [quizDetails?.QUIZ_TIMESPAN, quizDetails?.CREATED_ON]);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleLogout = () => {
        deleteSingleCookie(cookies.btcode_live_cd);
        deleteSingleCookie(cookies.btcode_live_cd_key);
        router.push(bytecodeUrls.home);
    };

    return (
        <>
            <header className="z-40 w-full px-1 md:px-4 bg-background">
                <nav className="border-gray-200 px-1 md:px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto w-full">
                        <a href="https://bytecode.live/" className="flex items-center">
                            <img
                                width="150"
                                height="25"
                                src="https://bytecode.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flightlogo.178ba7a4.png&w=256&q=75"
                                className="h-6 sm:h-9"
                                alt="Flowbite Logo"
                            />
                        </a>
                        <div className="flex items-center lg:order-1">
                            <div className="flex space-x-2 items-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                {!dialog &&
                                    quizDetails?.QUIZ_TIMESPAN &&
                                    quizDetails?.CREATED_ON &&
                                    TimerCmp()}
                            </div>

                            <button
                                type="button"
                                onClick={toggleMenu}
                                className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open main menu</span>
                                {menuOpen ? (
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                ) : (
                                    <svg
                                        className="w-6 h-6"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                            clipRule="evenodd"
                                        ></path>
                                    </svg>
                                )}
                            </button>
                        </div>
                        <div
                            className={`${
                                menuOpen ? "block" : "hidden"
                            } md:rounded-xl justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
                            id="mobile-menu-2"
                        >
                            <ul
                                className="flex justify-center items-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0
                            md:border-b md:border-gray-100 rounded-lg"
                            >
                                <li>
                                    <div className="flex space-x-2 items-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-foreground dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                        <span>
                                            <Trophy className="ml-2" />
                                        </span>
                                        <span>{lastSentReward}</span>

                                        <span>
                                            <Coins className="ml-2" />
                                        </span>
                                        <span>{totalCoins}</span>

                                    </div>
                                </li>
                                <li>
                                    <div className="py-2 pr-4 pl-3 space-x-2 flex lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:bg-transparent">
                                        <span>
                                            <User />
                                        </span>
                                        <span>
                                            {cdDetails ? cdDetails.USERNAME : null}
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="block py-2 pr-4 pl-3 hover:bg-accent hover:text-accent-foreground rounded p-4 lg:border-0 lg:hover:text-primary-700 lg:p-1 lg:dark:hover:bg-transparent"
                                    onClick={handleLogout}
                                    >
                                        <Power />
                                    </div>
                                </li>
                                <li>
                                    <div className="block py-2 pr-4 pl-3 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 lg:dark:hover:bg-transparent">
                                        <ThemeToggle />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
