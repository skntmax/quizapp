
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

export function QuestionCard({ data, index }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleOptionClick = (idx) => {
    setSelectedIndex(idx);
    setIsDisabled(true);
  };

  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle className='text-lg  font-semibold'>
            ({index + 1}) {data.QUIZ_QUESTION.QUESTION}
          </CardTitle>
          <CardDescription className='shadow-lg hover:bg-primary/90 p-6'>
            <pre>
              {data.code}
            </pre>
          </CardDescription>
        </CardHeader>
        <CardContent>
          {
            data.QUIZ_QUESTION.OPTIONS.map((item, idx) => {
              let variant;
              // Check if the option has been selected
              if (selectedIndex !== null) {
                if (idx === selectedIndex) {
                  // If the selected index is the correct answer
                  variant = (data.correctAnswer === idx) ? 'success' : 'danger';
                } else if (data.correctAnswer === idx) {
                  // If this is the correct answer and not selected
                  variant = 'success';
                }
              }

              return (
                <Button
                  className={isDisabled ? 'no-opacity w-full' : 'w-full'}
                  key={idx}
                  variant={variant}
                  onClick={() => handleOptionClick(idx)}
                  disabled={isDisabled}
                >
                  {item}
                </Button>
              );
            })
          }
        </CardContent>
        <CardFooter className="flex justify-between">
          <AccordionUi disabled={isDisabled} title='Show Explanation' description={data.description} />
        </CardFooter>
      </Card>
    </>
  );
}
