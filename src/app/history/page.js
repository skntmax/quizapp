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
    },
}

export default function Page() {
    const [data, setData] = useState(undefined)

    useEffect(() => {
        fetchHistory();
    }, []);

    const fetchHistory = async () => {
        try {
            const response = await getRequest("quiz/get-users-quiz-history",
                customHeader
            );

            if (response.status) {
                setData(response.result.data)
            }
        } catch (err) {
            throw new Error(err.message); // Set any errors that occur
        }
    };

    return <>




        <CommonHeader />
        
        { data !==undefined && data.length > 0 &&
            <div>
                <h1>Quiz List</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Difficulty</th>
                            <th>Reward</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((quiz) => (
                            <tr key={quiz._id}>
                                <td>{quiz._id}</td>
                                <td>{quiz.QUIZ_CAT}</td>
                                <td>{quiz.QUIZ_DIFF}</td>
                                <td>{quiz.REWARD}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        }

        <Footer />

    </>
}
