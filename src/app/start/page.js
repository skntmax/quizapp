'use client'
import { cookies } from "@/constant";
import { getRequest } from "@/crud_operations/RequestHandler";
import CommonHeader from "@/modules/common_modules/CommonHeader";
import Footer from "@/modules/common_modules/Footer";
import QuizPage from "@/modules/ui_modules/QuizPage";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useReducer, useState } from "react";
import { useSelector } from "react-redux";

const customHeader = {
    headers: {
        "Authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`, // Replace with your actual token or header value
        // Add any other custom headers here
    },
}

export default function Page() {
    const [data, setData] = useState(undefined);
    const router = useRouter();
   let  quizStates= useSelector(ele=> ele.quiz)
  
    
  useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await getRequest("quiz/get-users-quiz-history",
                customHeader
            );
            if (!response.status) {
                throw new Error({ success: false, message: "Failed to fetch data" });
            } else if (response.result.data.length === 0) {
                // router.push('/')
            }
            else {
                setData(response.result)
            }
        } catch (err) {
            throw new Error(err.message); // Set any errors that occur
        }
    };


    return <>
        { !quizStates.dialog && <CommonHeader />} 
        <QuizPage  setActiveStepData={ ({step ,  dialogue})=> setStepperState({step ,  dialogue})  } />
        <div className="my-4">
        <Footer />
        </div>
    </>
}