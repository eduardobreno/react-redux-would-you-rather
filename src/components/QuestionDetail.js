import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Button, Card, Image } from 'semantic-ui-react';
import { formatQuestionObject } from '../utils/questionsUtil';

class QuestionDetail extends Component {

    render() {
        const { id, author, avatarURL, optionOne, optionTwo } = this.props.question;
        console.log(this.props)
        return (
            <Card centered>
                <Card.Content>
                    <Image floated='left' size='mini' src={avatarURL} />
                    <Card.Header>{author}</Card.Header>
                    <Card.Meta>asked</Card.Meta>
                    <Card.Description>
                        <Grid>
                            <Grid.Row columns={2} divided>
                                <Grid.Column style={{ textAlign: 'right' }}>
                                    {optionOne.text}
                                </Grid.Column>
                                <Grid.Column style={{ textAlign: 'left' }}>
                                    {optionTwo.text}
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>

                    {this.props.isAnswered}

                </Card.Content>
            </Card >
        );
    }
}

function mapStateToProps({ questions, authedUser, users }, { match }) {
    const { params } = match;

    return {
        question: formatQuestionObject(questions[params.id], users),
        isAnswered: params.id in authedUser.answers
    };
}

export default connect(mapStateToProps)(QuestionDetail)