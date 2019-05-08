import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import QuestionItem from "./QuestionItem";

class QuestionList extends Component {

    componentDidUpdate() {
        const { answered, unanswered } = this.props;
        this.panes = [
            {
                menuItem: 'Unanswered', pane: {
                    key: 'Unanswered',
                    content: unanswered.map(item => <QuestionItem key={item.id} item={item} />),
                },
            },
            {
                menuItem: 'Answered', pane: {
                    key: 'Answered',
                    content: answered.map(item => <QuestionItem key={item.id} item={item} />),
                },
            }
        ]
    }

    render() {
        return (
            <div className="container">
                <Tab renderActiveOnly={false} panes={this.panes} />
            </div>
        );
    }
}

export default QuestionList;