'use client'
import { questionArray } from "@/Data";
import { DialogUi } from "../common_modules/DialogUi";
import { PaginationUi } from "../common_modules/PaginationUi";
import QuizHeader from "../common_modules/QuizHeader";
import { QuestionCard } from "../common_modules/QuestionCard";
import { useEffect, useState } from "react";
import { postRequest } from "@/crud_operations/RequestHandler";

export default function QuizPage() {
    const [data, setData] = useState({
        dialog: true,
        activeStep: 0,
        language: undefined,
        defficult_level: undefined
    });

    useEffect(() => {
        fetchLanguage();
    }, []);

    const fetchLanguage = async () => {
        try {
            let responce = await postRequest('quiz/get-quiz-categories', { "pn": 1, "itemsPerPage": 10 })
            console.log('responce.data.quiz_cat' ,responce.result.data.quiz_cat);
            if (responce.status) {
                setData(prevState => ({
                    ...prevState,
                    language: responce.result.data.quiz_cat
                }));
            }
        }
        catch (error) {

        }
    };

    const handleNext = () => {
        if (activeStep < 2) { // Assuming there are 3 steps (0, 1, 2)
            set({
                ...data,
                activeStep: data.prevStep + 1
            });
        }
    };

    const handleLanguage = async () => {
        try {
            let responce = await getRequest('')
            if (responce.status) {
                setData()
            }
        }
        catch (error) {

        }
        handleNext();
    };

    const handleDefficultLevel = async () => {
        try {
            let responce = await getRequest('')
            if (responce.status) {
                setData()
            }
        }
        catch (error) {

        }
        handleNext()
    };
    return (
        <>            
            <DialogUi data={data} setData={setData} handleLanguage={handleLanguage} />
            <QuizHeader correct={1} incorrect={5} remaining={153} />
            <div style={{ width: "80%", margin: 'auto', padding: '100px' }}>
                <PaginationUi />
                {
                    questionArray.map((item, index) => <QuestionCard data={item} index={index} />)
                }
                <PaginationUi />
            </div>
        </>
    )
}