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


function isTimeLeftOrNot ( createdOn , quizTimeSpan) {
   
    let startTime= moment(createdOn).format('HH:mm:ss');
    let currentTime= moment(new Date()).format('HH:mm:ss');
    
    
    const sTime = moment(startTime, 'HH:mm:ss');
    const eTime = moment(currentTime, 'HH:mm:ss');
    
    const diffInMinutes = eTime.diff(sTime, 'minutes');
    
    let timeLeft  = quizTimeSpan-diffInMinutes 
    return timeLeft 
    }
    

export { getRandomVariant, isTimeLeftOrNot }