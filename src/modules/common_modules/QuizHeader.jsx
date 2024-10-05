const QuizHeader = ({ correct, incorrect, remaining }) => {
    return (
        <>

                {/* Correct */}
                <div className="text-lg font-semibold">Correct: {correct}</div>

                {/* Incorrect */}
                <div className="text-lg font-semibold">Incorrect: {incorrect}</div>

                {/* Remaining */}
                <div className="text-lg font-semibold">Remaining: {remaining}</div>

        </>
    );
};

export default QuizHeader;
