import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Card, Image } from 'semantic-ui-react';

import { formatQuestionObject } from '../utils/questionsUtil';
import { QuestionDetailResultOption } from './QuestionDetailResultOption';
import { addAnswer } from '../actions/shared';
import NotFound from './NotFound';

const OPT_ONE = "optionOne";
const OPT_TWO = "optionTwo";

class QuestionDetail extends Component {
    state = {
        answer: ''
    }

    handleSubmit = () => {
        const { dispatch, question, authedUser } = this.props;
        const { answer } = this.state;

        dispatch(addAnswer(authedUser, question.id, answer));
    }

    render() {
        if (this.props.notFound) return <NotFound />

        const { author, avatarURL, optionOne, optionTwo } = this.props.question;
        const { isAnswered, isOptionOne, isOptionTwo, statistics } = this.props;
        return (
            <Card centered>
                <Card.Content>
                    <Image floated='left' size='mini' src={avatarURL} />
                    <Card.Header>{author}</Card.Header>
                    <Card.Meta>{isAnswered ? 'asked' : 'asks'}</Card.Meta>
                    <Card.Description>
                        <Grid celled>
                            {!isAnswered &&
                                <Fragment>
                                    <Grid.Row>
                                        <Grid.Column style={{ textAlign: 'center' }}>
                                            <h3>Would You Rather...</h3>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column style={{ textAlign: 'center' }}>
                                            <Button.Group>
                                                <Button style={style}
                                                    positive={this.state.answer === OPT_ONE}
                                                    onClick={() => { this.setState({ answer: OPT_ONE }) }}>
                                                    {optionOne.text}
                                                </Button>
                                                <Button.Or text='or' />
                                                <Button style={style}
                                                    positive={this.state.answer === OPT_TWO}
                                                    onClick={() => { this.setState({ answer: OPT_TWO }) }}>
                                                    {optionTwo.text}
                                                </Button>
                                            </Button.Group>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <Grid.Row>
                                        <Grid.Column style={{ textAlign: 'center' }}>
                                            <Button positive fluid onClick={this.handleSubmit}>
                                                SUBMIT
                                            </Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Fragment>
                            }
                            {isAnswered &&
                                <Fragment>
                                    <Grid.Row>
                                        <Grid.Column style={{ textAlign: 'center' }}>
                                            <h3>Results</h3>
                                        </Grid.Column>
                                    </Grid.Row>
                                    <QuestionDetailResultOption
                                        isAnswered={isOptionOne}
                                        text={optionOne.text}
                                        qtd={statistics.qtdOne}
                                        total={statistics.totalVotes}
                                    />
                                    <QuestionDetailResultOption
                                        isAnswered={isOptionTwo}
                                        text={optionTwo.text}
                                        qtd={statistics.qtdTwo}
                                        total={statistics.totalVotes}
                                    />
                                </Fragment>
                            }
                        </Grid>
                    </Card.Description>
                </Card.Content>
            </Card >
        );
    }
}

function mapStateToProps({ questions, authedUser, users }, { match }) {
    const { params } = match;
    let notFound = false;
    if (questions[params.id] === undefined) {
        return {
            notFound: true
        }
    }
    const q = formatQuestionObject(questions[params.id], users);

    const qtdOne = q.optionOne.votes.length;
    const qtdTwo = q.optionTwo.votes.length;
    const totalVotes = qtdOne + qtdTwo;

    return {
        notFound,
        authedUser,
        question: q,
        statistics: { qtdOne, qtdTwo, totalVotes },
        isAnswered: params.id in authedUser.answers,
        isOptionOne: authedUser.answers[params.id] === 'optionOne',
        isOptionTwo: authedUser.answers[params.id] === 'optionTwo',
    };
}

const style = {
    wordBreak: "break-word",
    maxWidth: "120px"
}

export default connect(mapStateToProps)(QuestionDetail)