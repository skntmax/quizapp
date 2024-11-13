'use client'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getRandomVariant } from "@/utils/logix";

export default function HistoryList({ data }) {
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
                        <div className="flex flex-col-2 gap-4">
                            <div className="md:w-1/2 px-2">
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
                            <div className="md:w-1/2 px-2">
                                <div className="relative">
                                    <img
                                        alt="one-lakh-img"
                                        className="w-full rounded-lg"
                                        src="https://bytecode.live/_next/static/media/banner.0c14cfef.png"
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

            <div className="w-full px-2 py-4">
                <div className="border rounded-md p-4">
                    <div className="border rounded-md p-4">
                        <div className="flex justify-between items-center">
                            <span className="font-semibold">Quiz Id</span>
                            <span className="font-semibold">Catogery</span>
                            <div className="flex">
                                <span className="font-semibold">Diffculty level</span>
                            </div>
                            <span className="font-semibold">  Rewards</span>
                        </div>
                    </div>
                    {data && data.length > 0 &&
                        data.map((quiz) => (
                            <div key={quiz._id} className="border rounded-md p-4">
                                <div className="flex justify-between">
                                    <span className="font-semibold">{quiz._id}</span>
                                    <span>{quiz.QUIZ_CAT}</span>
                                    <div className="flex items-center space-x-2">
                                        <span>{quiz.QUIZ_DIFF}</span>
                                    </div>
                                    <span>{quiz.REWARD}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div class="w-full px-2 py-4">
                <div class="border rounded-md p-4">
                    <div>
                        <h4 class="text-xl font-semibold mb-4">REFERRAL LINK</h4>
                        <div>
                            <a hreef='#'>https://bytecode.live/students?referralCode=undefined</a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="w-full px-2 py-4">
                <div class="border rounded-md p-4">
                    <div>
                        <h4 class="text-xl font-semibold mb-4">HOW TO REFER</h4>
                        <ol class="list-decimal list-inside space-y-2">
                            <li>Go to our Full-time Job/ Other Jobs/ Internship section.</li>
                            <li>Click on the Share icon or the blue strip as shown in the figure. Copy the link and share it with your friends or in groups.</li>
                        </ol>
                    </div>
                </div>
            </div>

            <div className="w-full px-2 py-4">
                <div id="reward" className="border border-gray-300 rounded-lg">
                    <div className="p-4">
                        <h4 className="text-xl font-semibold">Rewards</h4>
                        <div className="">
                            <div class="flex space-x-4">
                                <div class="flex-1 border border-gray-300 rounded-lg">
                                    {/* Cash Redeem Reward */}
                                    <div className="w-full sm:w-1/3 p-2">
                                        <div className="">
                                            <div className="p-4">
                                                <div className="relative">
                                                    <img
                                                        alt="Cash Redeem"
                                                        className="w-full h-auto object-cover rounded-lg"
                                                        src="https://production-cuvette.s3.ap-south-1.amazonaws.com/Rewards/cash+redeem.png"
                                                    />
                                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-200">
                                                        <div className="text-white text-lg font-semibold">Preview</div>
                                                    </div>
                                                </div>
                                                <p className="text-center mt-2">Convert your Cuva coins to Cash in bank!</p>
                                                <Button
                                                    variant={getRandomVariant()}
                                                    size='sm'
                                                >
                                                    Redeem
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-1  border border-gray-300 rounded-lg">
                                    {/* DSA Roadmap Reward */}
                                    <div className="w-full sm:w-1/3 p-2">
                                        <div className="">
                                            <div className="p-4">
                                                <div className="relative">
                                                    <img
                                                        alt="DSA Roadmap"
                                                        className="w-full h-auto object-cover rounded-lg"
                                                        src="https://production-cuvette.s3.ap-south-1.amazonaws.com/Rewards/DSA_roadmap.png"
                                                    />
                                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-200">
                                                        <div className="text-white text-lg font-semibold">Preview</div>
                                                    </div>
                                                </div>
                                                <p className="text-center mt-2">Complete DSA roadmap to crack Product based companies + Certificate</p>
                                                <Button
                                                    variant={getRandomVariant()}
                                                    size='sm'
                                                >
                                                    Redeem
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-1 border border-gray-300 rounded-lg">
                                    {/* T-shirt Reward */}
                                    <div className="w-full sm:w-1/3 p-2">
                                        <div className="">
                                            <div className="p-4">
                                                <div className="relative">
                                                    <img
                                                        alt="T-Shirt"
                                                        className="w-full h-auto object-cover rounded-lg"
                                                        src="https://production-cuvette.s3.ap-south-1.amazonaws.com/Rewards/Tshirt.png"
                                                    />
                                                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-200">
                                                        <div className="text-white text-lg font-semibold">Preview</div>
                                                    </div>
                                                </div>
                                                <p className="text-center mt-2">Refer your friends and Get an exclusive Cuvette branded T-shirt</p>
                                                <Button
                                                    variant={getRandomVariant()}
                                                    size='sm'
                                                >
                                                    Redeem
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}