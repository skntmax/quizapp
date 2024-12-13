'use client'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getRandomVariant } from "@/utils/logix";
import { Trophy } from "lucide-react";

export default function HistoryList({ data }) {
    const handleRedeem = (sectionId) => {
        alert(sectionId)
    }
    return (<>
        <div className="w-full px-4 py-4" >

            <div className="w-full px-2 py-1">
                <div className="flex justify-between">
                    <span className="ant-typography css-fypblu font-semibold">Terms</span>
                    <span className="ant-typography font-semibold css-fypblu">
                        Rewards
                    </span>
                </div>
            </div>

            <div className="w-full px-2 py-4">
                <div className="border rounded-lg p-6">
                    <div className="mb-6">
                        <div className="flex flex-wrap gap-4">
                            <div className="px-2">
                                <h4 className="text-lg font-semibold mb-4">TERMS TO REFER</h4>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                                            <svg
                                                viewBox="64 64 896 896"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">200 Coins</div>
                                            <div className="text-sm text-gray-500">
                                                for every refer and successful signup (Mobile verification)
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white">
                                            <svg
                                                viewBox="64 64 896 896"
                                                width="1em"
                                                height="1em"
                                                fill="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm">Redeem your Coins</div>
                                            <div className="text-sm text-gray-500">
                                                directly to bank and earn up to ₹1 Lac
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="py-4">
                                    <h4 className="text-lg font-semibold">REDEEM NOW</h4>
                                    <span className="">
                                        <Button
                                            variant={getRandomVariant()}
                                            size='lg'
                                        >
                                            UPI CASH
                                        </Button>
                                    </span>
                                    <span className="px-4">
                                        <Button
                                            variant='success'
                                            size='lg'
                                        >
                                            REWARDS
                                        </Button>
                                    </span>
                                </div>
                            </div>
                            <div className="px-2">
                                <div className="relative">
                                    <img
                                        alt="one-lakh-img"
                                        width="100%"
                                        style={{ height: "450px" }}
                                        className="w-full rounded-lg"
                                        src="https://bytecode.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleaderboard.ccb97d62.png&w=384&q=75"
                                    />
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-lg">
                                        <span className="text-white text-sm">Preview</span>
                                    </div>
                                </div>
                                <span className="text-sm text-gray-500 mt-2 block">
                                    NOTE: If we find anyone doing suspicious activities to increase
                                    their coins, their complete coins will be invalid to redeem.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full px-2">
                <section className="leaderboard-section border rounded-md p-4">
                    <div className={cn("md:grid md:grid-cols-2")}>
                        {/* Left Section */}
                        <div className="py-2">
                            <h2 className="text-2xl font-bold md:text-left">
                                LEADER <span className="text-blue-500">BOARD</span>
                            </h2>
                            <img
                                width='100%'
                                src="https://bytecode.live/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fleaderboard.ccb97d62.png&w=384&q=75"
                                className="mt-4"
                                style={{ color: "transparent", height: "476px" }}
                            />
                        </div>
                        {/* Right Section */}
                        <div className="" style={{ maxHeight: "500px", maxHeight: "500px", overflow: 'hidden scroll' }}>
                            {data && data.length > 0 ? (
                                data.map((item, index) => (
                                    <div key={item._id} className="bg-white shadow-md p-4 rounded-md flex justify-between items-center">
                                        {/* Rank */}
                                        <span className="font-bold text-lg">{index + 1}</span>
                                        {/* Name */}
                                        <span className="text-base">{item.QUIZ_CAT} - {item.QUIZ_DIFF}</span>
                                        {/* Avatar and Coins */}
                                        <div className="flex items-center gap-2">
                                            <span><Trophy /></span>
                                            <span className="font-medium">{item.REWARD || 0}</span>
                                        </div>
                                        {/* Reward */}
                                        <span className="text-green-600 font-semibold">
                                            <Button variant={getRandomVariant()} size='sm' onClick={() => handleRedeem(item.sectionId)}>₹ REDEEM</Button>
                                        </span>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center text-gray-500">No data available</div>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </>)
}