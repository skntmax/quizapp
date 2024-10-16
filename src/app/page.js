'use client'
import { cookies, quizUrls } from "@/constant";
import { getRequest } from "@/crud_operations/RequestHandler";
import { AlertDialogDemo } from "@/modules/common_modules/AlertDialogDemo";
import CommonHeader from "@/modules/common_modules/CommonHeader";
import Footer from "@/modules/common_modules/Footer"; // Ensure this is correct
import DnaLoder from "@/modules/loders/DnaLoder";
import QuizPage from "@/modules/ui_modules/QuizPage";
import { resetQuiz, setSessionId } from "@/redux/counterSlice";
import getSingleCookiesCSR from "@/utils/cookies";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const customHeader = {
  headers: {
    "Authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`, // Replace with your actual token or header value
    // Add any other custom headers here
  },
}

export default function Home() {
  const router = useRouter();
  const [data, setData] = useState(
    {
      loader: true,
    }
  );
  const dispatch = useDispatch()
  const fetchData = async () => {
    try {
      const response = await getRequest("quiz/is-user-runnning-quiz-session",
        customHeader
      );
      if (!response.status) {
        throw new Error({ success: false, message: "Failed to fetch data" });
      } else if (Object.keys(response?.result?.data)?.length > 0) {
        setData((pre) => {
          return {
            ...pre,
            loader: false
          }
        })
        dispatch(setSessionId(response?.result?.data?.user_quiz_session))
      } else if (Object.keys(response?.result?.data)?.length == 0) {
        dispatch(setSessionId(null))
        dispatch(resetQuiz())
        router.push(quizUrls.start)
      }
    } catch (err) {
      throw new Error(err.message); // Set any errors that occur
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {
        data.loader ?
          <DnaLoder />
          :
          <AlertDialogDemo />
      }
    </>
  );
}
