import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestions } from '../actions/actions';

const QuestionsPage = React.createClass({
  displayName: 'QuestionsPage',

  componentDidMount() {
    this.props.dispatch(fetchQuestions());
  },

  render() {
    const questions = this.props.questions.map(function(question, index) {
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
  questions: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

function select(state) {
  return state;
}

export default connect(select)(QuestionsPage);
