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
import { resetQuiz, setDialog } from "@/redux/counterSlice";
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
  const handleRestart = () => {
    // Logic for restart action
    if(sessionId){
      resetQuizSession()
    }
    dispatch(resetQuiz())
    dispatch(setDialog(true))
    setIsOpen(true); // Close dialog after restart action
    router.push(quizUrls.start)
  };

  const handleResume = () => {
    // Logic for resume action
    // dispatch(setDialog(false))
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
            <Button onClick={handleRestart}>Restart</Button>
            <Button onClick={handleResume}>Resume</Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
