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
    let incorrect = apiData.RESPONDED_QUIZ_QUESTION_LIST.filter(q => q.CORRECT_ANSWER !== q.USER_RESPONDED_ANSWER).length;
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
            quizCat: apiData.QUIZ_CATEGORY,
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

const calculateReward = (processPercentage, lastSentReward) => {
    let reward = 0;

    if (processPercentage >= 10 && processPercentage < 20 && lastSentReward < 10) {
        reward = 10;
        lastSentReward = 10;
    } else if (processPercentage >= 20 && processPercentage < 30 && lastSentReward < 20) {
        reward = 20;
        lastSentReward = 20;
    } else if (processPercentage >= 30 && processPercentage < 40 && lastSentReward < 30) {
        reward = 30;
        lastSentReward = 30;
    } else if (processPercentage >= 40 && processPercentage < 50 && lastSentReward < 40) {
        reward = 40;
        lastSentReward = 40;
    } else if (processPercentage >= 50 && processPercentage < 60 && lastSentReward < 50) {
        reward = 50;
        lastSentReward = 50;
    } else if (processPercentage >= 60 && processPercentage < 70 && lastSentReward < 60) {
        reward = 60;
        lastSentReward = 60;
    } else if (processPercentage >= 70 && processPercentage < 80 && lastSentReward < 70) {
        reward = 70;
        lastSentReward = 70;
    } else if (processPercentage >= 80 && processPercentage < 90 && lastSentReward < 80) {
        reward = 80;
        lastSentReward = 80;
    } else if (processPercentage >= 90 && processPercentage < 99 && lastSentReward < 90) {
        reward = 90;
        lastSentReward = 90;
    }else if(processPercentage === 100){
        reward = 100;
        lastSentReward = 100;
    }
    else{
        reward = 0;
        lastSentReward = lastSentReward;
    }

    return { reward, lastSentReward };
};


const calculateProgressPercentage = (correct, incorrect, remaining) => {
    const total = correct + incorrect + remaining;
    if (Math.ceil(total) > 0) {
        return Math.round(((correct + incorrect) / total) * 100); // No division by 10, so it returns exact percentages
    } else {
        return 0;
    }
}



export { getRandomVariant, isTimeLeftOrNot, mapApiDataToReduxModel, calculateReward, calculateProgressPercentage }