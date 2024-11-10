'use client'
import { cookies } from "@/constant";
import { getRequest } from "@/crud_operations/RequestHandler";
import CommonHeader from "@/modules/common_modules/CommonHeader";
import Footer from "@/modules/common_modules/Footer";
import QuizPage from "@/modules/ui_modules/QuizPage";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

const customHeader = {
    headers: {
        "Authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`, // Replace with your actual token or header value
        // Add any other custom headers here
    },
}

export default function Page() {
    const [data, setData] = useState(undefined);

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
            } else {
                setData(response.result)
            }
        } catch (err) {
            throw new Error(err.message); // Set any errors that occur
        }
    };
    return <>
        <CommonHeader />
        <QuizPage />
        <Footer />
    </>
}