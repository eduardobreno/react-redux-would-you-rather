import React from 'react';
import { Grid, Progress, Label } from 'semantic-ui-react';

export const QuestionDetailResultOption = ({ text, isAnswered, qtd, total }) =>
    (
        <Grid.Row>
            <Grid.Column style={{ textAlign: 'center' }}>
                {isAnswered &&
                    <Label as='a' color='yellow' attached='top right'>
                        Your vote
                    </Label>
                }
                <p>Would you rather {text} ?</p>
                <p>{qtd} of {total} votes</p>
                <Progress value={qtd}
                    total={total}
                    progress='percent'
                    color='blue' />
            </Grid.Column>
        </Grid.Row>
    );