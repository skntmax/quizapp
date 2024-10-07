'use client'
import "@/app/globals.css";
import { getRequest, postRequest } from "@/crud_operations/RequestHandler";
import DataNotFound from '@/images/DataNotFound.png';
import Image from 'next/image';
import { useEffect, useState } from "react";
import { DialogUi } from "../common_modules/DialogUi";
import { PaginationUi } from "../common_modules/PaginationUi";
import { QuestionCard } from "../common_modules/QuestionCard";
import QuizHeader from "../common_modules/QuizHeader";
import { ShimmerCardUi } from "../common_modules/shimmer-effects/ShimmerCardUi";
import ShimmerHeader from "../common_modules/shimmer-effects/ShimmerHeader";

const steps = [{ label: 'Step 1' }, { label: 'Step 2' }];

export default function QuizPage() {
    const [data, setData] = useState({
        dialog: true,
        activeStep: 0,
        difficulty_level: undefined,
        categories: {
            pn: 1,
            itemsPerPage: 10,
            data: undefined
        },
        questions_list: {
            quizCat: '67018195a8c5272ddcecb8d6',
            data: undefined
        }
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            let responce = await postRequest('quiz/get-quiz-categories', { pn: data.categories.pn, itemsPerPage: data.categories.itemsPerPage })
            if (responce.status) {
                setData(prevState => ({
                    ...prevState,
                    categories: {
                        ...prevState.categories,
                        data: responce.result.data.quiz_cat
                    }
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
                    difficulty_level: responce.result.data,
                    questions_list: {
                        ...prevState.questions_list,
                        quizCat: _id
                    }
                }));
            }
        }
        catch (error) {

        }
    };

    const handleDefficultLevel = async (_id) => {
        try {
            handleNext()
            let responce = await postRequest('quiz/get-relvent-questions', { quizCat: data.questions_list.quizCat, difficultyId: _id })
            if (responce.status) {
                setData(prevState => ({
                    ...prevState,
                    questions_list: {
                        ...prevState.questions_list,
                        data: responce.result.data.questionList,
                    }
                }));
            }
        }
        catch (error) {
        }
    };

    const handleNext = () => {
        if (data.activeStep < steps.length - 1) {
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

            {
                data.questions_list.data === undefined && (
                    <ShimmerHeader />
                )
            }

            {
                data.questions_list.data !== undefined && data.questions_list.data.length > 0 &&
                <QuizHeader correct={1} incorrect={5} remaining={153} />
            }

            <div style={{ width: "80%", margin: 'auto', padding: '100px' }}>

                {
                    data.questions_list.data !== undefined && data.questions_list.data.length > 0 &&
                    <PaginationUi />
                }

                {
                    data.questions_list.data === undefined && (
                        <ShimmerCardUi />
                    )
                }

                {
                    data.questions_list.data !== undefined && data.questions_list.data.length === 0 &&
                    <div className='flex justify-center'>
                        <Image
                            src={DataNotFound}
                            width={300}
                            height={300}
                            alt="data not found."
                        />
                    </div>
                }
                {
                    data.questions_list.data !== undefined &&
                    data.questions_list.data.map((item, index) => <QuestionCard data={item} index={index} />)
                }

                {
                    data.questions_list.data !== undefined && data.questions_list.data.length > 0 &&
                    <PaginationUi />
                }

            </div>
        </>
    )
}