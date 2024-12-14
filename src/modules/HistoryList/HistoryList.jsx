'use client'
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getRandomVariant } from "@/utils/logix";
import { Coins, IndianRupee, Trophy, User } from "lucide-react";
import CardImg from '@/images/5165532.jpg'
import Image from "next/image";
import { postRequest } from "@/crud_operations/RequestHandler";
import { useGetReferralCodeQuery, useRedeemRewardIntoCoinsMutation } from "@/app/AsyncApi/referral";
import SharableContent from "@/components/SharableContent";



export default function HistoryList({ data ,top }) {



    // api section
    const {data: referralCode ,  isLoading :referralCodeLoading   }  = useGetReferralCodeQuery()
    const [ redeemCoins , {data: redeemCoinsData ,  isLoading :redeemCoinsLoading   }  ]   = useRedeemRewardIntoCoinsMutation()

    
    let referral_link = `${process.env.NEXT_PUBLIC_WEB_LOCAL_URL}/students?referralCode=${referralCode?.result?.data?.REFERREL_CODE}`  


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
                        <div className="flex flex-wrap">
                            <div className="px-2 w-[50%]">
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
                                    <h4 className="text-lg font-semibold">REDEEM&nbsp;NOW</h4>
                                    <div className="flex mt-4">
                                        <Button className="mr-4"
                                            variant={getRandomVariant()}
                                            size='lg'
                                        >
                                            UPI&nbsp;CASH
                                        </Button>
                                        <Button
                                            variant='success'
                                            size='lg'
                                        >
                                            REWARDS
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            
                      



                            
                            
                            <div className="px-2  w-[50%]">
                                <div className="flex justify-between">
                                    <span className="ant-typography css-fypblu font-semibold ">YOUR QUIZ HISTORIES</span>
                                </div>
                                <div className="" style={{ maxHeight: "300px", maxHeight: "300px", overflow: 'auto' }}>
                                    {data && data.length > 0 ? (
                                        data.map((item, index) => (
                                            <div key={item._id} className="bg-white shadow-md p-4 rounded-md flex justify-between items-center">
                                                {/* Rank */}
                                                <span className="font-bold text-xs">{index + 1}</span>
                                                {/* Name */}
                                                <span className="text-xs">{item.QUIZ_CAT} - {item.QUIZ_DIFF}</span>
                                                {/* Avatar and Coins */}
                                                <div className="flex items-center gap-2">
                                                    <span className="text-xs"><Trophy /></span>
                                                    <span className="font-medium">{item.REWARD || 0}</span>
                                                </div>
                                                {/* Reward */}
                                                <span className="text-green-600 font-semibold">
                                                    <Button variant={getRandomVariant()} size='sm' onClick={() => redeemCoins({quizHistoryId:item._id}) }>₹ REDEEM</Button>
                                                </span>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-center text-gray-500">No data available</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                
                

      <h4 className="text-lg font-semibold mb-4"> REFERRAL LINK</h4>
      <div className="flex justify-between items-center">
        <a
          href={referral_link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-bold underline break-all"
        >
          {referral_link}
        </a>

        <SharableContent shareUrl={referral_link} title={"Invite"} />
      
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
                            <Image
                                width='100%'
                                src={CardImg}
                                className="mt-4"
                                style={{ color: "transparent", height: "476px" }}
                            />
                        </div>
                        {/* Right Section */}
                        <div >
                        <span className="ant-typography css-fypblu font-semibold border-b-1 border-gray">TOP FIVE REWARDS WINNER OF THE MONTH</span>
                            {top && top.length > 0 ? (
                                top.map((item, index) => (
                                    <div key={item._id} className="bg-white shadow-md p-4 rounded-md flex justify-between items-center">
                                        {/* Rank */}
                                        <span className="font-bold text-xs">{index + 1}</span>
                                        {/* Name */}
                                        <span className="text-xs">{item.USER_INFO.username}</span>
                                        {/* Avatar and Coins */}
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs"><Coins /></span>
                                            <span className="font-medium">{item.COINS || 0}</span>
                                        </div>
                                        {/* Reward */}
                                        <span className="text-green-600 font-semibold">
                                            {/* <Button variant={getRandomVariant()} size='sm' onClick={() => handleRedeem(item.sectionId)}>₹ REDEEM</Button> */}
                                            ₹ 200
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