import moment from "moment";

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
    return timeLeft *60  // in seconds
}

const mapApiDataToReduxModel = (apiData) => {
    debugger
    return {
        sessionId: apiData.SESSION_QUIZ_LIST.questionList[0]?.QUIZ_SESSION_ID || null,
        correct: apiData.SESSION_QUIZ_LIST.questionList.filter(q => q.CORRECT_ANSWER === 1).length,
        incorrect: apiData.SESSION_QUIZ_LIST.questionList.filter(q => q.CORRECT_ANSWER === 0).length,
        remaining: apiData.SESSION_QUIZ_LIST.questionList.filter(q => q.USER_RESPONDED_ANSWER === undefined).length,
        processPercentage: apiData.PROGRESS_STATUS || 0,
        questions_list: {
            pn: 1,
            total: apiData.SESSION_QUIZ_LIST.totalQuizItems,
            itemsPerPage: 10,
            data: apiData.SESSION_QUIZ_LIST.questionList,
        },
        userResponse: apiData.RESPONDED_QUIZ_QUESTION_LIST
    };
};


export { getRandomVariant, isTimeLeftOrNot, mapApiDataToReduxModel  }