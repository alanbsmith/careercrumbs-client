import React, { PropTypes } from 'react';
import { connect, pushState } from 'react-redux';
import Question from '../components/Question';

const QuestionsPage = React.createClass({
  displayName: 'QuestionsPage',

  render() {
    const questions = this.props.questions.questions.map(function(question, index) {
      return <Question key={index} title={question.title} body={question.body} />;
    });

    return (
      <div className='container'>
        {questions}
      </div>
    );
  }
});

QuestionsPage.propTypes = {
  questions: PropTypes.object
};

function select(state) {
  return state;
}

export default connect(select, { pushState })(QuestionsPage);
