import React, { Component } from 'react';
import { Grid, Label, Card, Image } from 'semantic-ui-react';

class LeaderboardItem extends Component {

    render() {
        const { name, avatarURL, answered, asked } = this.props.user;
        return (
            <Card centered>
                <Card.Content style={{ textAlign: "center" }}>
                    <Card.Header>
                        <Image centered size='mini' src={avatarURL} />
                    </Card.Header>
                    <Card.Meta>
                        {name}
                    </Card.Meta>
                    <Card.Description>
                        <Grid divided >
                            <Grid.Row columns={2} style={{paddingBotom:0}}>
                                <Grid.Column>
                                    <b>Answered:</b> {answered}
                                </Grid.Column>
                                <Grid.Column>
                                    <b>Asked:</b> {asked}
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row style={{paddingTop:0}}>
                                <Grid.Column>
                                    <Label basic color="blue" pointing>Score {asked + answered}</Label>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Description>
                </Card.Content>
            </Card>
        );
    }
}

export default LeaderboardItem;