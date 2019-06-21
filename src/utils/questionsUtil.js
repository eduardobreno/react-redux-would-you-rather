export const getQuestionsStatus = (questions, authedUser, users) => {
    const answered = Object.values(questions)
        .filter(question => isAnswered(question, authedUser.id))
        .map(question => formatQuestionObject(question, users))
        .sort((a, b) => {
            return b.timestamp - a.timestamp;
        });
    const unanswered = Object.values(questions)
        .filter(question => !isAnswered(question, authedUser.id))
        .map(question => formatQuestionObject(question, users))
        .sort((a, b) => {
            return b.timestamp - a.timestamp;
        });

    return { unanswered, answered };
}

function isAnswered(question, id) {
    return (question.optionOne.votes.includes(id) ||
        question.optionTwo.votes.includes(id));
}

export const formatQuestionObject = (question, users) => {
    return { ...question, avatarURL: "/" + users[question.author].avatarURL };
}