"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getRandomVariant } from "@/utils/logix";
import { Coins, IndianRupee, Trophy, User } from "lucide-react";
import CardImg from "@/images/5165532.jpg";
import Image from "next/image";
import NoData from '@/images/nodata.png'
import { ColorRing } from "react-loader-spinner";
import { postRequest } from "@/crud_operations/RequestHandler";
import {
  useGetQuizHistoryQuery,
  useGetReferralCodeQuery,
  useRedeemRewardIntoCoinsMutation,
} from "@/app/AsyncApi/referral";
import SharableContent from "@/components/SharableContent";
import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLastSentReward, setTotalCoins } from "@/redux/counterSlice";
import TopWinnersSlider from "./TopWinnersSlider";
// import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { quizUrls } from "@/constant";
import TsParticles from "../Particles";

export default function HistoryList({  top }) {
  const config = [
    { coins: 10, rupees: 1 },
    { coins: 500, rupees: 50 },
    { coins: 1000, rupees: 100 },
    { coins: 1500, rupees: 150 },
  ];

  const calculateRs = (coins) => {
    return (coins / 10) * 1;
  };

  let dispatch = useDispatch();
  const router = useRouter();
  
  
  // api section

  const {data:quizHistory , isLoading:quizHistoryLoading ,  refetch: refetchQuizHistory } = useGetQuizHistoryQuery()

  const { data: referralCode, isLoading: referralCodeLoading , refetch: refetchReferral } =
    useGetReferralCodeQuery();
  
  
    const [
    redeemCoins,
    { data: redeemCoinsData, isLoading: redeemCoinsLoading },
  ] = useRedeemRewardIntoCoinsMutation();

 

  let referral_link = `${process.env.NEXT_PUBLIC_WEB_LOCAL_URL}/students?referralCode=${referralCode?.result?.data?.REFERREL_CODE}`;

  useEffect(() => {
   
    if (referralCode?.result.data?.COINS)
      dispatch(setTotalCoins(referralCode?.result.data?.COINS || 0));
  }, [referralCode?.result]);

  useEffect(() => {
    
    if (redeemCoinsData?.result.data?.COINS)
       // updating coing as well 
       dispatch(setTotalCoins(redeemCoinsData?.result.data?.COINS || 0));
       dispatch(setLastSentReward(redeemCoinsData?.result.data?.TOTAL_REWARD || 0))
       refetchQuizHistory()
  
      }, [redeemCoinsData?.result]);


      useEffect(()=>{
        
        if(quizHistory?.result?.data && quizHistory?.result?.data.length>0 ) {
            let arr = quizHistory?.result?.data
              let totalReward  = arr.reduce((acc,ele)=>acc+ele.REWARD, 0 )
              dispatch(setLastSentReward(totalReward || 0))
        }

        
      }, [quizHistory?.result])

       
  const handleRestart = async () => {
    dispatch(resetQuiz());
    router.push(quizUrls.home);
  };




   const MyParticle =  useCallback(()=>(redeemCoinsData?.result.data?.COINS && <TsParticles />) , [redeemCoinsData?.result])

  return (
    <>
    
     
         {MyParticle()}  
          
          <div className="w-full px-4 py-4">
        <div className="w-full px-2 py-1">
          <div className="flex justify-between">
            <span className="ant-typography css-fypblu font-semibold">
              Play quiz , earn rewards and redeem that reward into cash 🪙
            </span>
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
                  <h4 className="text-lg font-semibold mb-4">
                    REFER AND EARN{" "}
                  </h4>
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
                          for every refer and successful signup (Mobile
                          verification)
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
                        <div className="font-semibold text-sm">
                          Redeem your Coins
                        </div>
                        <div className="text-sm text-gray-500">
                          directly to bank and earn up to ₹1 Lac
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-4">
                    <h4 className="text-lg font-semibold">REDEEM&nbsp;NOW</h4>
                    <div className="flex mt-4">
                      <Button
                        className="mr-4"
                        variant={getRandomVariant()}
                        size="lg"
                      >
                        UPI&nbsp;CASH
                      </Button>
                      <Button variant="success" size="lg">
                        REWARDS
                      </Button>
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
            <div className="py-4">
                    <h4 className="text-lg font-semibold">START THE QUIZ</h4>
                    <div className="flex mt-4">
                      <Button
                        className={cn("mr-4 w-full mr-0")}
                        variant={getRandomVariant()}
                        onClick={() => handleRestart()}
                        size="lg"
                      >
                        START NOW
                      </Button>
                    </div>
                  </div>
                  
                </div>

                <div className="px-2  w-[50%]">
                  <div className="flex justify-between">
                    <span className="ant-typography css-fypblu font-semibold ">
                      YOUR QUIZ HISTORIES
                    </span>
                  </div>

                  
                  <div
                    className=""
                    style={{
                      maxHeight: quizHistory?.result?.data &&  quizHistory?.result?.data.length > 0 ?"400px":"600px",
                      overflow:quizHistory?.result?.data &&  quizHistory?.result?.data.length > 0 ?"auto":'hidden',
                    }}
                  >
               

                   
         


                { quizHistoryLoading && 
                  <div className="flex items-center justify-center align-items-center ">
                  <ColorRing
                   visible={true}
                    height="20"
                    width="20"
                    wrapperClass=""
                    colors={['#e15b64']}
                  />
                </div>}

                    { quizHistory?.result?.data && quizHistory?.result?.data.length > 0 ? (
                      quizHistory?.result?.data.map((item, index) => (
                        <div
                          key={item._id}
                          className="bg-white dark:bg-black shadow-md p-4 rounded-md flex justify-between items-center"
                        >
                          {/* Rank */}
                          <span className="font-bold text-xs">{index + 1}</span>
                          {/* Name */}
                          <span className="text-xs">
                            {item.QUIZ_CAT} - {item.QUIZ_DIFF}
                          </span>
                          {/* Avatar and Coins */}
                          <div className="flex items-center gap-2">
                            <span className="text-xs">
                              <Trophy />
                            </span>
                            <span className="font-medium">
                              
                              
                              {
                                redeemCoinsLoading?
                            <ColorRing
                            visible={true}
                            height="20"
                            width="20"
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64']}
                            /> : item.REWARD || 0}


                            </span>
                          </div>
                          {/* Reward */}
                          <span className="text-green-600 font-semibold">
                            
                            {redeemCoinsLoading?
                              
                              <Button
                              variant="pink"
                              size="sm"
                            >
                            <ColorRing
                            visible={true}
                            height="20"
                            width="20"
                            wrapperClass="color-ring-wrapper"
                            colors={['#e15b64']}
                            /> processing                             
                            </Button>
                        : 
                        <Button
                              variant="pink"
                              size="sm"
                              onClick={() =>
                                redeemCoins({ quizHistoryId: item._id })
                              }
                            >
                              🪙 REDEEM
                            </Button>

   } 
                             
                         
                          </span>
                        </div>
                      ))
                    ) :

                    (!quizHistoryLoading &&  quizHistory?.result?.data.length==0) ?  
                     (
                      <Image
                      width='100%'
                      src={NoData}
                      className="mt-4"
                      style={{ color: "transparent", height: "390px", }}
                  />
                    ) :""
                    
                    }





                  </div>
                </div>
              </div>
            </div>

            
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch p-6 bg-gray-100 dark:bg-black dark:bg-black border rounded-lg p-6">
          {/* Left Section */}
          <div className="flex-1 p-6  from-blue-50 to-indigo-100 rounded-lg shadow-lg dark:bg-black">
            <h1 className="text-3xl font-bold text-center text-indigo-700 dark:text-white mb-6 ">
              Coin to Rupee Conversion
            </h1>
            <div className="space-y-4">
              {config.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-white dark:bg-black p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center">
                    <span className="text-lg">🪙</span>
                    <div>
                      <p className="text-lg font-semibold text-gray-800 dark:text-white ml-2">
                        {item.coins} Coins
                      </p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xl font-bold text-indigo-600 dark:text-white">
                      {item.rupees} ₹
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="flex-1 p-6  dark:bg-black from-blue-50  to-indigo-100 rounded-lg shadow-lg">
            <h1 className="text-xl font-bold text-center text-indigo-700 dark:text-white mb-6 border-b pb-2">
              TOP FIVE REWARDS WINNER OF THE MONTH
            </h1>
            {top && top.length > 0 ? (
              <div className="space-y-4">
                {top.map((item, index) => (
                  <div
                    key={item._id}
                    className="bg-white dark:bg-black shadow-md p-4 rounded-md flex justify-between items-center"
                  >
                    {/* Rank */}
                    <span className="font-bold text-lg text-indigo-600 dark:text-white">
                      {index + 1}
                    </span>

                    {/* Name */}
                    <span className="text-gray-700 dark:text-white text-base font-medium">
                      {item.USER_INFO.username}
                    </span>

                    {/* Avatar and Coins */}
                    <div className="flex items-center gap-2">
                      <span className="text-lg">🪙</span>
                      <span className="text-gray-800 dark:text-white font-medium">
                        {item.COINS || 0}
                      </span>
                    </div>

                    {/* Reward */}
                    <span className="text-green-600 font-semibold text-lg">
                      ₹ {calculateRs(item.COINS)}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <Image
                                width='100%'
                                src={NoData}
                                className="mt-4"
                                style={{ color: "transparent", height: "320px", }}
                            />
            )}
          </div>
        </div>

        <TopWinnersSlider top={top} />
        <Image
          width="100%"
          src={CardImg}
          className="mt-4"
          style={{ color: "transparent", height: "700px" }}
        />
      </div>
    </>
  );
}
