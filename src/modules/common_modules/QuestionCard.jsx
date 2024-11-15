'use client'
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { cookies } from "@/constant";
import { postRequest } from "@/crud_operations/RequestHandler";
import { incrementCorrect, incrementIncorrect, setLastSentReward, setRemaining, setUserResponseData } from "@/redux/counterSlice";
import { calculateProgressPercentage, calculateReward } from "@/utils/logix";
import { getCookie } from "cookies-next";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import MdEditorCmp from "../md-editor/page";
import { AccordionUi } from "./AccordionUi";

const customHeader = {
  headers: {
    "Authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`, // Replace with your actual token or header value
  },
}

export function QuestionCard({ data, index, setData, pn, sessionId, correct, incorrect, remaining }) {
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.quiz.userResponse);
  const processPercentage = useSelector((state) => state.quiz.processPercentage);
  const lastSentReward = useSelector((state) => state.quiz.lastSentReward);
  const [percentgae, setPercentage] = useState(null);
  const [filter, setFilter] = useState(null);
  const [userResponse, setUserResponse] = useState({
    selectedIndex: null,
    isDisabled: false,
    quizQuestionId: undefined
  });

  useEffect(() => {
    const filterData = reduxData.find((item) => item.quizQuestionId === data._id);
    setFilter(filterData);
  }, [reduxData, processPercentage, data]);

  const updateResponce = async (idx, latestProgressPercentage, isCorrect) => {
  
    // Calculate rewards based on the latest progress percentage
    const rewardsValue = calculateReward(latestProgressPercentage, lastSentReward ,isCorrect);
  
    // Update the last sent reward in Redux
    if(isCorrect){
      dispatch(setLastSentReward(rewardsValue.lastSentReward));
    }
  
    // Build the model with the latest progress percentage
    const model = {
      quizSessionId: sessionId,
      quizQuestionId: data._id,
      userResponse: idx,
      currentAnswer: data.QUIZ_QUESTION.CORRECT_ANSWER,
      reward: rewardsValue.reward,
      timeCollapsed: 20,
      progressStatus: latestProgressPercentage // Updated with the latest progress percentage
    };
  
    try {
      const response = await postRequest('quiz/update-quiz-response', model, customHeader);
      if (response.status) {
        dispatch(setUserResponseData(model));
      }
    } catch (error) {
      console.error("Error updating response:", error);
    }
  };
  

  const handleOptionClick = async (idx) => {
    setUserResponse({ selectedIndex: idx, isDisabled: true, setUserResponse: data._id });
  
    // Update the state based on the user's selection
    setData(prevState => ({
      ...prevState,
      remaining: prevState.remaining - 1,
      correct: data.QUIZ_QUESTION.CORRECT_ANSWER === idx ? prevState.correct + 1 : prevState.correct,
      incorrect: data.QUIZ_QUESTION.CORRECT_ANSWER !== idx ? prevState.incorrect + 1 : prevState.incorrect
    }));
  
    // Dispatch actions to update Redux state
    dispatch(incrementCorrect(data.QUIZ_QUESTION.CORRECT_ANSWER === idx));
    dispatch(incrementIncorrect(data.QUIZ_QUESTION.CORRECT_ANSWER !== idx));
    dispatch(setRemaining());
  
    // Calculate the latest progress percentage after the answer selection
    const latestProgressPercentage = calculateProgressPercentage(
      data.QUIZ_QUESTION.CORRECT_ANSWER === idx ? correct + 1 : correct,
      data.QUIZ_QUESTION.CORRECT_ANSWER !== idx ? incorrect + 1 : incorrect,
      remaining - 1
    );
  
    const isCorrect = data.QUIZ_QUESTION.CORRECT_ANSWER === idx;
    // Pass the selected index and latest progress percentage to updateResponce
    await updateResponce(idx, latestProgressPercentage, isCorrect);
  };
  
  

  return (
    <div>
      <Card className="my-4">
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
              // Check the filter data and determine the variant based on previous response and correct answer
              if (filter && filter.userResponse !== null && filter.quizQuestionId == data._id) {
                if (idx === filter.userResponse) {
                  // If it's the selected response, check if it's correct or incorrect
                  variant = data.QUIZ_QUESTION.CORRECT_ANSWER === idx ? 'success' : 'danger';
                } else if (idx === data.QUIZ_QUESTION.CORRECT_ANSWER) {
                  // If it's the correct answer but not selected, mark as success
                  variant = 'success';
                } else {
                  variant = 'gray'; // Default for unselected and incorrect options
                }
              }
              else if (userResponse.selectedIndex !== null) {
                // If current user has selected, apply the same logic
                if (idx === userResponse.selectedIndex) {
                  variant = data.QUIZ_QUESTION.CORRECT_ANSWER === idx ? 'success' : 'danger';
                } else if (data.QUIZ_QUESTION.CORRECT_ANSWER === idx) {
                  variant = 'success';
                } else {
                  variant = 'gray';
                }
              }

              return (
                <div className='my-4 sm:my-4 lg:my-4 xl:my-4'>
                  <Button
                    className={userResponse.isDisabled || filter ? 'no-opacity w-full' : 'w-full'}
                    key={idx}
                    variant={variant}
                    onClick={() => handleOptionClick(idx)}
                    disabled={userResponse.isDisabled || !!filter}
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
          <AccordionUi disabled={userResponse.isDisabled || filter?.quizQuestionId ? true : false} title='Show Explanation' description={<MdEditorCmp disc={data.QUIZ_QUESTION.DISC} />} />
        </CardFooter>
      </Card>
    </div>
  );
}
