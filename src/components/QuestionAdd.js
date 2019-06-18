import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Card, Image } from 'semantic-ui-react';

import { formatQuestionObject } from '../utils/questionsUtil';

class QuestionAdd extends Component {

    render() {
        return (
            <Card centered>
                <Card.Content>
                    <Card.Header>Would you rather?</Card.Header>
                    <Card.Description>
                        <Grid celled>
                            <Grid.Row>
                                <Grid.Column style={{ textAlign: 'center' }}>
                                   
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column style={{ textAlign: 'center' }}>
                                    <Button positive fluid onClick={this.handleSubmit}>
                                        SUBMIT
                                            </Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Card.Description>
                </Card.Content>
            </Card >
        );
    }
}

function mapStateToProps() {

    return {
    };
}


export default connect(mapStateToProps)(QuestionAdd)