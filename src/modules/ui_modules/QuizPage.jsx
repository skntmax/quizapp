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
import { ProgressUi } from "../common_modules/ProgressUi";
import { useDispatch, useSelector } from "react-redux";
import DnaLoder from "../loders/DnaLoder";
import { setActiveStep, setCategories, setDifficultyLevel, setQuestionsList } from "@/redux/counterSlice";

const steps = [{ label: 'Step 1' }, { label: 'Step 2' }];

export default function QuizPage() {
    const dispatch = useDispatch();
    const reduxData = useSelector((state) => state.quiz);
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState({
        dialog: true,
        activeStep: 0,
        correct: 0,
        incorrect: 0,
        remaining: 0,
        pagination_loder: false,
        more_cat_loder: false,
        difficulty_level: {
            pn: 1,
            itemsPerPage: 10,
            data: undefined,
            _id: undefined
        },
        categories: {
            pn: 1,
            itemsPerPage: 10,
            data: undefined
        },
        questions_list: {
            pn: 1,
            total: undefined,
            itemsPerPage: 10,
            quizCat: undefined,
            data: undefined,
        }
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        // Update local state when Redux state changes
        setData({
            dialog: reduxData.dialog,
            activeStep: reduxData.activeStep,
            correct: reduxData.correct,
            incorrect: reduxData.incorrect,
            remaining: reduxData.remaining,
            pagination_loder: reduxData.pagination_loder,
            more_cat_loder: reduxData.more_cat_loder,
            difficulty_level: reduxData.difficulty_level,
            categories: reduxData.categories,
            questions_list: reduxData.questions_list,
        });
        setLoader(false);
    }, [reduxData]);

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
                dispatch(setCategories({
                    data: responce.result.data.quiz_cat,
                    pn: data.categories.pn, // Update other relevant fields if necessary
                    itemsPerPage: data.categories.itemsPerPage,
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
                    difficulty_level: {
                        ...prevState.difficulty_level,
                        data: responce.result.data,
                    },
                    questions_list: {
                        ...prevState.questions_list,
                        quizCat: _id,
                    }
                }));
                dispatch(setDifficultyLevel({
                    data: responce.result.data // Update the difficulty level data
                }));
                dispatch(setQuestionsList({
                    quizCat: _id // Update the quiz category
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
                    remaining: responce.result.data.totalQuizItems,
                    difficulty_level: {
                        ...prevState.difficulty_level.data,
                        _id: _id
                    },
                    questions_list: {
                        ...prevState.questions_list,
                        data: responce.result.data.questionList,
                        total: responce.result.data.totalQuizItems
                    }
                }));
                // Dispatch actions to update the Redux store
                dispatch(setRemaining(responce.result.data.totalQuizItems));

                dispatch(setDifficultyLevel({
                    _id: _id, // Update difficulty level with the ID
                    data: responce.result.data.questionList, // Optional: if difficulty level has related data
                }));

                dispatch(setQuestionsList({
                    data: responce.result.data.questionList, // Set the questions data
                    total: responce.result.data.totalQuizItems // Set the total number of quiz items
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
            dispatch(setActiveStep(this.activeStep + 1));
        } else if (data.activeStep == steps.length - 1) {
            setData(prevState => ({
                ...prevState,
                dialog: false
            }));
        }
    };

    const handlePagination = async (pn) => {
        try {
            setData(prevState => ({
                ...prevState,
                pagination_loder: true,
            }));
            let responce = await postRequest('quiz/get-relvent-questions', { quizCat: data.questions_list.quizCat, difficultyId: data.difficulty_level._id, pn: pn, itemsPerPage: data.questions_list.itemsPerPage })
            if (responce.status) {
                setData(prevState => ({
                    ...prevState,
                    pagination_loder: false,
                    questions_list: {
                        ...prevState.questions_list,
                        data: responce.result.data.questionList,
                        pn: pn
                    }
                }));
            }
        }
        catch (error) {
        }
    };


    const handleMoreCategory = async () => {
        try {
            setData(prevState => ({
                ...prevState,
                more_cat_loder: true,
            }));
            let responce = await postRequest('quiz/get-quiz-categories', { pn: 1 + data.categories.pn, itemsPerPage: data.categories.itemsPerPage })
            if (responce.status) {
                setData(prevState => ({
                    ...prevState,
                    more_cat_loder: false,
                    categories: {
                        ...prevState.categories,
                        pn: 1 + data.categories.pn,
                        data: [...prevState.categories.data, ...responce.result.data.quiz_cat]
                    }
                }));
            }
        }
        catch (error) {
        }
    };

    return (
        <>
            {console.log('sttae==', data)}
            {
                loader ?
                    <>
                        <DnaLoder />
                    </>
                    :
                    <>
                        <DialogUi steps={steps} data={data} setData={setData} handleCategories={handleCategories} handleDefficultLevel={handleDefficultLevel} handleMoreCategory={handleMoreCategory} />

                        {
                            data.questions_list.data === undefined && (
                                <ShimmerHeader />
                            )
                        }

                        {
                            data.questions_list.data !== undefined && data.questions_list.data.length > 0 &&
                            <QuizHeader correct={data.correct} incorrect={data.incorrect} remaining={data.remaining} />
                        }

                        {
                            data.questions_list.data !== undefined && data.questions_list.data.length > 0 &&
                            <div>
                                <ProgressUi correct={data.correct} incorrect={data.incorrect} remaining={data.remaining} />
                            </div>
                        }

                        <div className='w-[95vw] md:w-[70vw] m-auto'>
                            {
                                data.questions_list.data !== undefined && data.questions_list.data.length > 0 &&
                                <PaginationUi total={data.questions_list.total} itemsPerPage={data.questions_list.itemsPerPage} pn={data.questions_list.pn} handlePagination={handlePagination} />
                            }
                            {
                                data.questions_list.data === undefined && (
                                    <ShimmerCardUi />
                                )
                            }

                            {
                                data.pagination_loder && (
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
                                data.questions_list.data !== undefined && !data.pagination_loder &&
                                data.questions_list.data.map((item, index) => <QuestionCard data={item} setData={setData} index={index} pn={data.questions_list.pn} />)
                            }

                            {
                                data.questions_list.data !== undefined && data.questions_list.data.length > 0 &&
                                <PaginationUi total={data.questions_list.total} itemsPerPage={data.questions_list.itemsPerPage} pn={data.questions_list.pn} handlePagination={handlePagination} />
                            }

                        </div>
                    </>
            }

        </>
    )
}