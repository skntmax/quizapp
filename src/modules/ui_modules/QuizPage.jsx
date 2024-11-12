'use client'
import "@/app/globals.css";
import { getRequest, postRequest } from "@/crud_operations/RequestHandler";
import DataNotFound from '@/images/DataNotFound.png';
import Image from 'next/image';
import { useCallback, useEffect, useState } from "react";
import { DialogUi } from "../common_modules/DialogUi";
import { PaginationUi } from "../common_modules/PaginationUi";
import { QuestionCard } from "../common_modules/QuestionCard";
import QuizHeader from "../common_modules/QuizHeader";
import { ShimmerCardUi } from "../common_modules/shimmer-effects/ShimmerCardUi";
import ShimmerHeader from "../common_modules/shimmer-effects/ShimmerHeader";
import { ProgressUi } from "../common_modules/ProgressUi";
import { useDispatch, useSelector } from "react-redux";
import DnaLoder from "../loders/DnaLoder";
import { resetQuiz, setActiveStep, setCategories, setDialog, setDifficultyLevel, setQuestionsList, setQuizSessionDetails, setRemaining, setRemainingTotal, setSessionId } from "@/redux/counterSlice";
import { getCookie } from "cookies-next";
import { cookies, quizUrls } from "@/constant";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { getRandomVariant } from "@/utils/logix";
import { set, throttle } from "lodash";

const customHeader = {
    headers: {
        "Authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`, // Replace with your actual token or header value
        // Add any other custom headers here
    },
}

const steps = [{ label: 'Step 1' }, { label: 'Step 2' }, { label: 'Step 3' }];

export default function QuizPage() {
    const dispatch = useDispatch();
    const router = useRouter();
    const reduxData = useSelector((state) => state.quiz);
    const [loader, setLoader] = useState(true);
    const [catAndDiffloader, setCatAndDiffloader] = useState(false);
    const [result, setResult] = useState(false);
    const [data, setData] = useState({
        dialog: true,
        sessionId: null,
        activeStep: 0,
        processPercentage: undefined,
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
            sessionId: reduxData.sessionId
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

    const createUserSesion = async (_id) => {
        try {
            let responce = await postRequest('quiz/create-user-quiz-session', { quizCat: data.questions_list.quizCat, difficultyId: _id }, customHeader)
            if (responce.status) {
                const sessionData = responce.result.data;
                dispatch(setQuizSessionDetails({
                    _id: sessionData._id,
                    CREATED_ON: sessionData.CREATED_ON,
                    QUIZ_TIMESPAN: sessionData.QUIZ_TIMESPAN,
                }));
                dispatch(setSessionId(sessionData._id));
            }
        }
        catch (error) {

        }
    };

    const handleCategories = async (_id) => {
        setCatAndDiffloader(true);
        try {
            let responce = await getRequest(`quiz/get-difficulty-level?quizCat=${_id}`)
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
                handleNext();
                setCatAndDiffloader(false)
            }
        }
        catch (error) {
            setCatAndDiffloader(false)
        }
    };

    const handleDefficultLevel = async (_id) => {
        setCatAndDiffloader(true)
        try {
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
                handleNext()
                await createUserSesion(_id);
                // Dispatch actions to update the Redux store

                dispatch(setDifficultyLevel({
                    _id: _id, // Update difficulty level with the ID
                    // data: responce.result.data.questionList, // Optional: if difficulty level has related data
                }));

                dispatch(setQuestionsList({
                    data: responce.result.data.questionList, // Set the questions data
                    total: responce.result.data.totalQuizItems // Set the total number of quiz items
                }));
                dispatch(setRemainingTotal(responce.result.data.totalQuizItems));
                setCatAndDiffloader(false)
            }
        }
        catch (error) {
            setCatAndDiffloader(false)
        }
    };

    const handleNext = () => {
        if (data.activeStep < steps.length - 1) {
            setData(prevState => ({
                ...prevState,
                activeStep: data.activeStep + 1
            }));
            dispatch(setActiveStep(data.activeStep + 1));
        } else if (data.activeStep == steps.length - 1) {
            setData(prevState => ({
                ...prevState,
                dialog: false
            }));
            dispatch(setDialog(false))
        }
    };

    const handlePagination = useCallback(
        throttle(async (pn) => {
            try {
                setData(prevState => ({
                    ...prevState,
                    pagination_loder: true,
                }));
                // setLoader(true);
                let response = await postRequest('quiz/get-relvent-questions', {
                    quizCat: data.questions_list.quizCat,
                    difficultyId: data.difficulty_level._id,
                    pn: pn,
                    itemsPerPage: data.questions_list.itemsPerPage
                });

                if (response.status) {
                    setData(prevState => ({
                        ...prevState,
                        pagination_loder: false,
                        questions_list: {
                            ...prevState.questions_list,
                            data: response.result.data.questionList,
                            pn: pn
                        }
                    }));

                    dispatch(setQuestionsList({
                        data: response.result.data.questionList,
                        pn: pn
                    }));
                }
            } catch (error) {
                // Handle error
            }
        }, 2000),
        [data.questions_list.quizCat, data.difficulty_level._id, data.questions_list.itemsPerPage, data.questions_list.pn]
    );



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

    const handleRedirect = async () => {
        setLoader(true)
        try {
            const response = await getRequest("quiz/finished-quiz",
                customHeader
            );

            if (response.status) {
                router.push(quizUrls.history)
                dispatch(resetQuiz())
                setLoader(false)
            }
        } catch (err) {
            throw new Error(err.message);
        }
    }

    return (
        <>
            {
                loader ?
                    <>
                        <DnaLoder />
                    </>
                    :
                    <>
                        <DialogUi handleNext={handleNext} loder={catAndDiffloader} steps={steps} data={data} setData={setData} handleCategories={handleCategories} handleDefficultLevel={handleDefficultLevel} handleMoreCategory={handleMoreCategory} />

                        {
                            data.questions_list.data === undefined && (
                                <ShimmerHeader />
                            )
                        }

                        <div className="sticky z-40 bg-background" style={{ top: '64px' }}>
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
                        </div>

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
                                data.questions_list.data.map((item, index) => <QuestionCard data={item} sessionId={data.sessionId} setData={setData} index={index} pn={data.questions_list.pn} correct={data.correct} incorrect={data.incorrect} remaining={data.remaining} />)
                            }

                            {data.questions_list.data !== undefined && data.remaining === 0 &&
                                <div className='my-4 sm:my-4 lg:my-4 xl:my-4 flex justify-end'>
                                    <Button
                                        className={cn('w-full')}
                                        variant='success'
                                        size='lg'
                                        onClick={() => setResult(true)}
                                    >
                                        FINISH
                                    </Button>
                                </div>
                            }

                            {
                                <>
                                    <AlertDialog open={result} onOpenChange={setResult}>
                                        <AlertDialogContent>
                                            <AlertDialogHeader>
                                                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    This action cannot be undone. This will permanently.
                                                </AlertDialogDescription>
                                            </AlertDialogHeader>
                                            <AlertDialogFooter>
                                                <Button onClick={handleRedirect} variant={getRandomVariant()}>Yes</Button>
                                                <Button onClick={() => setResult(false)} variant={getRandomVariant()}>No</Button>
                                            </AlertDialogFooter>
                                        </AlertDialogContent>
                                    </AlertDialog>
                                </>
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