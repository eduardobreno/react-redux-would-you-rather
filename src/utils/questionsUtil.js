export const getQuestionsStatus = (questions, authedUser, users) => {
    let answered = [];
    let unanswered = [];
    Object.keys(questions).forEach(key => {
        if (questions[key].optionOne.votes.indexOf(authedUser.id) !== -1 ||
            questions[key].optionTwo.votes.indexOf(authedUser.id) !== -1) {
            answered.push(formatQuestionObject(questions[key], users));
        }

        if (questions[key].optionOne.votes.indexOf(authedUser.id) === -1 &&
            questions[key].optionTwo.votes.indexOf(authedUser.id) === -1) {
            unanswered.push(formatQuestionObject(questions[key], users));
        }
    });
    return { unanswered, answered };
}


export const formatQuestionObject = (question, users) => {
    return { ...question, avatarURL: "/" + users[question.author].avatarURL };
}