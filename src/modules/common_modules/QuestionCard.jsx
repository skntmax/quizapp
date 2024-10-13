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

export function QuestionCard({ data, index, setData, pn }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleOptionClick = (idx) => {
    setSelectedIndex(idx);
    setIsDisabled(true);

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
              if (selectedIndex !== null) {
                if (idx === selectedIndex) {
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
                    className={isDisabled ? 'no-opacity w-full' : 'w-full'}
                    key={idx}
                    variant={variant}
                    onClick={() => handleOptionClick(idx)}
                    disabled={isDisabled}
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
          <AccordionUi disabled={isDisabled} title='Show Explanation' description={<MdEditorCmp disc={data.QUIZ_QUESTION.DISC} />} />
        </CardFooter>
      </Card>
    </>
  );
}
