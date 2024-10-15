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
import { quizUrls } from "@/constant";
import { resetQuiz, setDialog } from "@/redux/counterSlice";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export function AlertDialogDemo() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true); // Dialog state
  const dispatch = useDispatch()

  const handleRestart = () => {
    // Logic for restart action
    dispatch(resetQuiz())
    dispatch(setDialog(true))
    setIsOpen(true); // Close dialog after restart action
    router.push(quizUrls.start)
  };

  const handleResume = () => {
    dispatch(setDialog(false))
    // Logic for resume action
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
