'use client'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { cookies, quizUrls } from "@/constant";
import { getRequest } from "@/crud_operations/RequestHandler";
import { resetQuiz, setCorrect, setDialog, setDifficultyLevel, setIncorrect, setProgressPercentage, setQuestionsList, setRemaining, setRemainingTotal, setSessionId, setUserResponseData, setUserResumeResponseData } from "@/redux/counterSlice";
import { getRandomVariant, mapApiDataToReduxModel } from "@/utils/logix";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const customHeader = {
  headers: {
    "Authorization": `Bearer ${getCookie(cookies.btcode_live_cd_key)}`, // Replace with your actual token or header value
    // Add any other custom headers here
  },
}

export function AlertDialogDemo() {
  const sessionId = useSelector((state) => state.quiz.sessionId);
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true); // Dialog state
  const dispatch = useDispatch()

  const resetQuizSession = async () => {
    try {
      const response = await getRequest("quiz/reset-active-quiz-session",
        customHeader
      );
      if (!response.status) {
        throw new Error("Failed to fetch data");
      }
    } catch (err) {
      throw new Error(err.message); // Set any errors that occur
    }
  };
  const handleRestart = async () => {
    // Logic for restart action
    if (sessionId) {
      await resetQuizSession()
    }
    dispatch(resetQuiz())
    dispatch(setDialog(true))
    setIsOpen(true); // Close dialog after restart action
    router.push(quizUrls.start)
  };

  const handleResume = async () => {
    // Logic for resume action
    // dispatch(setDialog(false))
    if (sessionId) {
      try {
        const response = await getRequest("quiz/get-paused-quiz-session-data",
          customHeader
        );
        
        if (response.status) {
          let data = mapApiDataToReduxModel(response.result.data);
          dispatch(setSessionId(data.sessionId))
          dispatch(setProgressPercentage(data.process_percentage))
          dispatch(setQuestionsList(data.questions_list))
          dispatch(setCorrect(data.correct))
          dispatch(setIncorrect(data.incorrect))
          dispatch(setRemainingTotal(data.remaining))
          dispatch(setUserResumeResponseData(data.userResponse))
          dispatch(setDifficultyLevel(data.difficulty_level))
          dispatch(setDialog(false))
        }
      } catch (err) {
        throw new Error(err.message); // Set any errors that occur
      }
    }
    router.push(quizUrls.start)
    setIsOpen(false); // Close dialog after resume action
  };
  return (
    <>
      {/* Button to trigger the dialog */}
      {/* <Button variant="outline" onClick={openDialog}>
        Show Dialog
      </Button> */}

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <Button onClick={handleRestart} variant={getRandomVariant()}>Restart</Button>
            <Button onClick={handleResume} variant={getRandomVariant()}>Resume</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
