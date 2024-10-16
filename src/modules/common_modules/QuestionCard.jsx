'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from 'react';
import { AccordionUi } from "./AccordionUi";
import { ShimmerCardUi } from "./shimmer-effects/ShimmerCardUi";
import MdEditorCmp from "../md-editor/page";
import { ToastDestructive } from "./ToastDestructive";
import { useDispatch } from "react-redux";
import { incrementCorrect, incrementIncorrect, setRemaining } from "@/redux/counterSlice";
import { getCookie } from "cookies-next";
import { cookies } from "@/constant";
import { postRequest } from "@/crud_operations/RequestHandler";

const customHeader = {
  headers: {
    "Authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`, // Replace with your actual token or header value
    // Add any other custom headers here
  },
}

export function QuestionCard({ data, index, setData, pn, sessionId }) {
  const dispatch = useDispatch();
  const [userResponse, setUserResponse] = useState({
    selectedIndex: null,
    isDisabled: false
  });

  const updateResponce = async (idx) => {
    try {
      let responce = await postRequest('quiz/update-quiz-response',
        {
          quizSessionId: sessionId,
          quizQuestionId: data._id,
          userResponse: idx,
          currentAnswer: data.QUIZ_QUESTION.CORRECT_ANSWER,
          reward: 40,
          timeCollapsed: 20,
          progressStatus: 20
        },
        customHeader
      )
      if (responce.status) {

      }
    }
    catch (error) {

    }
  };

  const handleOptionClick = async (idx) => {
    setUserResponse({ selectedIndex: idx, isDisabled: true })
    setData(prevState => ({
      ...prevState,
      remaining: prevState.remaining - 1, // Decrement remaining by 1
      correct: data.QUIZ_QUESTION.CORRECT_ANSWER === idx
        ? prevState.correct + 1 // Increment correct if the answer is right
        : prevState.correct, // Otherwise, leave it unchanged
      incorrect: data.QUIZ_QUESTION.CORRECT_ANSWER !== idx
        ? prevState.incorrect + 1 // Increment incorrect if the answer is wrong
        : prevState.incorrect // Otherwise, leave it unchanged
    }));
    dispatch(incrementCorrect(data.QUIZ_QUESTION.CORRECT_ANSWER === idx))
    dispatch(incrementIncorrect(data.QUIZ_QUESTION.CORRECT_ANSWER !== idx))
    dispatch(setRemaining())
    await updateResponce(idx)
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className='text-lg  font-semibold'>
            {pn === 1
              ? (index + 1)
              : ((pn - 1) * 10) + (index + 1)} {data.QUIZ_QUESTION.QUESTION}
          </CardTitle>
          {/* <CardDescription className='shadow-lg hover:bg-primary/90 p-6'>
            <pre>
              {data.code}
            </pre>
          </CardDescription> */}
        </CardHeader>
        <CardContent>
          {
            data.QUIZ_QUESTION.OPTIONS.map((item, idx) => {
              let variant;

              // Determine button variant based on selected index and correct answer
              if (userResponse.selectedIndex !== null) {
                if (idx === userResponse.selectedIndex) {
                  // If the selected index is correct, mark it as success
                  variant = (data.QUIZ_QUESTION.CORRECT_ANSWER === idx) ? 'success' : 'danger';
                } else if (data.QUIZ_QUESTION.CORRECT_ANSWER === idx) {
                  // Always mark the correct answer as success
                  variant = 'success';
                } else {
                  variant = "gray"
                }
              }

              return (
                <div className='my-4 sm:my-4 lg:my-4 xl:my-4'>
                  <Button
                    className={userResponse.isDisabled ? 'no-opacity w-full' : 'w-full'}
                    key={idx}
                    variant={variant}
                    onClick={() => handleOptionClick(idx)}
                    disabled={userResponse.isDisabled}
                  >
                    {item}
                  </Button>
                </div>
              );
            })
          }
        </CardContent>
        {/* <ToastDestructive /> */}

        <CardFooter className="flex justify-between">
          <AccordionUi disabled={userResponse.isDisabled} title='Show Explanation' description={<MdEditorCmp disc={data.QUIZ_QUESTION.DISC} />} />
        </CardFooter>
      </Card>
    </>
  );
}
