const getRandomVariant = () => {
    const variants = [
        // "default",
        "destructive",
        // "outline",
        "secondary",
        // "ghost",
        // "link",
        "success",
        "danger",
        "info",
        "warning",
        // "light",
        "dark",
        // "primaryVariant",
        "accent",
        // "slate",
        "teal",
        "violet",
        "pink",
        "coral",
        "indigo",
        "olive",
        "navy",
        "gray",
        "brown",
        "mint",
        "beige",
        "lavender",
        "apricot",
        "charcoal",
        // "silver",
        // Add more variant names as needed
    ];
    const randomIndex = Math.floor(Math.random() * variants.length);
    return variants[randomIndex];
};


function isTimeLeftOrNot(createdOn, quizTimeSpan) {

    let startTime = moment(createdOn).format('HH:mm:ss');
    let currentTime = moment(new Date()).format('HH:mm:ss');


    const sTime = moment(startTime, 'HH:mm:ss');
    const eTime = moment(currentTime, 'HH:mm:ss');

    const diffInMinutes = eTime.diff(sTime, 'minutes');

    let timeLeft = quizTimeSpan - diffInMinutes
    return timeLeft
}

const mapApiDataToReduxModel = (apiData) => {
    let correct = apiData.RESPONDED_QUIZ_QUESTION_LIST.filter(q => q.CORRECT_ANSWER === q.USER_RESPONDED_ANSWER).length; 
    let incorrect =apiData.RESPONDED_QUIZ_QUESTION_LIST.filter(q => q.CORRECT_ANSWER !== q.USER_RESPONDED_ANSWER).length;
    let userResponse = apiData.RESPONDED_QUIZ_QUESTION_LIST.map(item => ({
        quizSessionId: item.QUIZ_SESSION_ID,
        quizQuestionId: item.QUIZ_QUESITION_ID,
        userResponse: item.USER_RESPONDED_ANSWER,
        currentAnswer: item.CORRECT_ANSWER,
        reward: item.REWARD,
        timeCollapsed: item.TIME_COLLAPSED,
        progressStatus: item.PROGRESS_STATUS,
      }));
    return {
        sessionId: apiData.RESPONDED_QUIZ_QUESTION_LIST[0]?.QUIZ_SESSION_ID || null,
        correct: correct,
        incorrect: incorrect,
        remaining: apiData.SESSION_QUIZ_LIST.totalQuizItems - (incorrect + correct),
        process_percentage: apiData.PROGRESS_STATUS || 0,
        quiz_time_span: apiData.QUIZ_TIME_SPAN,
        reward: apiData.REWARD,
        quiz_category_name: apiData.SESSION_QUIZ_LIST.questionList[0].QUIZ_CATEGORY_NAME,
        questions_list: {
            pn: 1,
            total: apiData.SESSION_QUIZ_LIST.totalQuizItems,
            itemsPerPage: 10,
            quizCat:apiData.QUIZ_CATEGORY,
            data: apiData.SESSION_QUIZ_LIST.questionList,
        },
        difficulty_level: {
            pn: 1,
            itemsPerPage: 10,
            data: undefined,
            _id: apiData.QUIZ_DIFFICULTY
          },
        userResponse: userResponse
    };
};


export { getRandomVariant, isTimeLeftOrNot, mapApiDataToReduxModel }