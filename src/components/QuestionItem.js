import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Grid, Button, Card, Image } from 'semantic-ui-react';

class QuestionItem extends Component {

    render() {
        const { id, author, avatarURL, optionOne, optionTwo } = this.props.item;

        return (
            <Card centered>
                <Card.Content>
                    <Image floated='left' size='mini' src={avatarURL} />
                    <Card.Header>{author}</Card.Header>
                    <Card.Meta>asks</Card.Meta>
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
                    <Button fluid color='blue' onClick={() => {
                        this.props.history.push(`questions/${id}`);
                    }}>
                        View Poll
                    </Button>
                </Card.Content>
            </Card >
        );
    }
}

export default withRouter(QuestionItem);