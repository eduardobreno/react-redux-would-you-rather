import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';

class Questions extends Component {
    componentDidUpdate() {
        const { answered, unanswered } = this.props;
        this.panes = [
            { menuItem: 'Unanswered', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
            {
                menuItem: 'Answered', pane: {
                    key: 'Answered',
                    content: (answered.map(item => {
                        return <div key={item.id}>
                            {item.author} asks Would you rather
                         <p>
                                {item.optionOne.text} OR ${item.optionTwo.text}
                            </p>
                        </div>
                    })),
                },
            }
        ]
    }

    render() {
        const { answered, unanswered } = this.props;

        return (
            <div className="container">
                <Tab renderActiveOnly={false} panes={this.panes} /> }
                <b>Unanswered</b>
                {unanswered.map(item => {
                    return <div key={item.id}>
                        {item.author} asks Would you rather
                        <p>
                            {item.optionOne.text} OR ${item.optionTwo.text}
                        </p>
                    </div>
                })}
                <hr />
                <b>Answered</b>
                {answered.map(item => {
                    return <div key={item.id}>
                        {item.author} asks Would you rather
                         <p>
                            {item.optionOne.text} OR ${item.optionTwo.text}
                        </p>
                    </div>
                })}
            </div>
        );
    }
}

export default Questions