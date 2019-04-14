import React, { Component } from 'react';

class Questions extends Component {

    componentDidUpdate() {

    }
    render() {
        const { answered, unanswered } = this.props;

        return (
            <div className="container">
                <b>Unanswered</b> | <b>Answered</b>
                <b>Unanswered</b>
                {unanswered.map(item => {
                    return <div>
                        {item.author} asks Would you rather
                        <p>
                            {item.optionOne.text} OR ${item.optionTwo.text}
                        </p>
                    </div>
                })}
                <hr />
                <b>Answered</b>
                {answered.map(item => {
                    return <div>
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