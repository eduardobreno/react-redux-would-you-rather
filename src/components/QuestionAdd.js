import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Card, Divider, Form } from 'semantic-ui-react';
import { addQuestionByUser } from '../actions/shared';

class QuestionAdd extends Component {

    state = {
        error: false,
        error2: false,
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { authedUser, dispatch, history } = this.props;
        const [optionOne, optionTwo] = e.target;
        if (optionOne.value === '') { this.setState({ error: true }); return }
        if (optionTwo.value === '') { this.setState({ error2: true }); return }


        dispatch(addQuestionByUser(authedUser, optionOne.value, optionTwo.value));
        history.push("home");

    }

    render() {
        return (
            <Card centered>
                <Card.Content>
                    <Card.Header>Create New Question</Card.Header>
                    <Card.Description>
                        <Form onSubmit={this.handleSubmit}>
                            <Grid>
                                <Grid.Row>
                                    <Grid.Column style={{ textAlign: 'center' }}>
                                        Would you rather...
                                </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column style={{ textAlign: 'center' }}>
                                        <Form.Input error={this.state.error} onKeyDown={() => { this.setState({ error: false }) }} name="optionOne" placeholder='Enter Option One Text here' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Divider horizontal>Or</Divider>
                                <Grid.Row>
                                    <Grid.Column style={{ textAlign: 'center' }}>
                                        <Form.Input error={this.state.error2} onKeyDown={() => { this.setState({ error2: false }) }} name="optionTwo" placeholder='Enter Option Two Text here' />
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column style={{ textAlign: 'center' }}>
                                        <Button positive fluid type="submit">
                                            SUBMIT
                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </Form>
                    </Card.Description>
                </Card.Content>
            </Card >
        );
    }
}

function mapStateToProps({ authedUser }) {

    return { authedUser };
}


export default connect(mapStateToProps)(QuestionAdd)