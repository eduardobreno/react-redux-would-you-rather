import React from 'react';
import { Grid, Progress, Label } from 'semantic-ui-react';

export const QuestionDetailResultOption = ({ text, isAnswered, qtd, total }) => {

    let shadow = isAnswered && "inset 0px 0px 20px 0px green";

    return (
        <Grid.Row>
            <Grid.Column style={{ textAlign: 'center', boxShadow: shadow }}>
                {isAnswered &&
                    <Label as='a' color='green' attached='top right'>
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
    )
}