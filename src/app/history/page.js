'use client'
import { cookies } from "@/constant";
import { getRequest } from "@/crud_operations/RequestHandler";
import CommonHeader from "@/modules/common_modules/CommonHeader";
import Footer from "@/modules/common_modules/Footer";
import QuizPage from "@/modules/ui_modules/QuizPage";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import HistoryList from "@/modules/HistoryList/HistoryList.jsx";
import DnaLoder from "@/modules/loders/DnaLoder";

const customHeader = {
    headers: {
        "Authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`, // Replace with your actual token or header value
    },
}

export default function Page() {
    const [data, setData] = useState(undefined)
    const [top, setTop] = useState(undefined)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        setLoader(true)
        try {
            const response = await getRequest("quiz/get-users-quiz-history",
                customHeader
            );
            if (response.status) {
                setData(response.result.data)
            }
            const response2 = await getRequest("quiz/top-five-reward-winners",
                customHeader
            );
            if (response2.status) {
                setTop(response2.result.data)
            }
        } catch (err) {
            setLoader(false)
            throw new Error(err.message); // Set any errors that occur
        }
        setLoader(false)
    };

    return <>
        {
            data !== undefined && data.length > 0 ? <>
                <CommonHeader />
                <HistoryList data={data} top={top} />
                <Footer />
            </> :
                <>
                    <DnaLoder />
                </>
        }


    </>
}
