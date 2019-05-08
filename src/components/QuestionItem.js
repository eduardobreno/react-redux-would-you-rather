import React, { Component } from 'react';
import { Grid, Button, Card } from 'semantic-ui-react';

class QuestionItem extends Component {

    render() {
        const { author, avatarURL, optionOne, optionTwo } = this.props.item;
        console.log(this.props.item)
        return (
            <Card centered>
            <Card.Content>
                <Grid columns={1} style={{ textAlign: 'center' }}>
                    <Grid.Row>
                        <Grid.Column>
                            <p>Image Here </p>
                            <p>{author} asks:</p>
                            <p>Would you rather</p>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row columns={2} divided>
                        <Grid.Column style={{ textAlign: 'right' }}>
                            {optionOne.text}
                        </Grid.Column>
                        <Grid.Column style={{ textAlign: 'left' }}>
                            {optionTwo.text}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Button>View Poll</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Card.Content>
            </Card>
        );
    }
}

export default QuestionItem;