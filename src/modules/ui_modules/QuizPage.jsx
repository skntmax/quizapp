'use client'
import { questionArray } from "@/Data";
import { DialogUi } from "../common_modules/DialogUi";
import { PaginationUi } from "../common_modules/PaginationUi";
import QuizHeader from "../common_modules/QuizHeader";
import { QuestionCard } from "../common_modules/QuestionCard";
import { useEffect, useState } from "react";
import { getRequest, postRequest } from "@/crud_operations/RequestHandler";
import { ShimmerCardUi } from "../common_modules/shimmer-effects/ShimmerCardUi";

const steps = [{ label: 'Step 1' }, { label: 'Step 2' }];

export default function QuizPage() {
    const [data, setData] = useState({
        dialog: true,
        activeStep: 0,
        categories: undefined,
        difficulty_level: undefined,
        questions_list: undefined
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            let responce = await postRequest('quiz/get-quiz-categories', { pn: 1, itemsPerPage: 10 })
            if (responce.status) {
                setData(prevState => ({
                    ...prevState,
                    categories: responce.result.data.quiz_cat
                }));
            }
        }
        catch (error) {

        }
    };

    const handleCategories = async (_id) => {
        try {
            handleNext();
            let responce = await getRequest('quiz/get-difficulty-level')
            if (responce.status) {
                setData(prevState => ({
                    ...prevState,
                    difficulty_level: responce.result.data
                }));
            }
        }
        catch (error) {

        }
    };

    const handleDefficultLevel = async (_id) => {
        try {
            handleNext()
            let responce = await postRequest('quiz/get-relvent-questions', { quizCat: "67018195a8c5272ddcecb8d6", difficultyId: "670181b6a8c5272ddcecb8ed" })
            if (responce.status) {
                setData(prevState => ({
                    ...prevState,
                    questions_list: responce.result.data
                }));
            }
        }
        catch (error) {
        }
    };

    const handleNext = () => {
        debugger
        if (data.activeStep < steps.length - 1) { // Assuming there are 3 steps (0, 1, 2)
            setData(prevState => ({
                ...prevState,
                activeStep: data.activeStep + 1
            }));
        } else if (data.activeStep == steps.length - 1) {
            setData(prevState => ({
                ...prevState,
                dialog: false
            }));
        }
    };

    return (
        <>
            <DialogUi steps={steps} data={data} setData={setData} handleCategories={handleCategories} handleDefficultLevel={handleDefficultLevel} />
            <QuizHeader correct={1} incorrect={5} remaining={153} />
            <div style={{ width: "80%", margin: 'auto', padding: '100px' }}>
                <PaginationUi />
                {
                    data.questions_list === undefined && (
                        <ShimmerCardUi />
                    )
                }

                {
                    data.questions_list !== undefined &&
                    data.questions_list.map((item, index) => <QuestionCard data={item} index={index} />)
                }
                <PaginationUi />
            </div>
        </>
    )
}