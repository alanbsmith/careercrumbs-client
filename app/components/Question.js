import React, { PropTypes } from 'react';

const Question = React.createClass({
  displayName: 'Question',

  render() {
    return (
      <div className='question-container'>
        <div className='title'>{this.props.title}</div>
        <div className='body'>{this.props.body}</div>
      </div>
    );
  }
});

Question.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string
};

export default Question;
