import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { askQuestion } from '../actions/actions';

const AskPage = React.createClass({
  displayName: 'AskPage',

  getInitialState() {
    return ({ title: '', body: '' });
  },

  handleTitle(e) {
    this.setState({ title: e.target.value });
  },

  handleBody(e) {
    this.setState({ body: e.target.value });
  },

  handleSubmit(e) {
    e.preventDefault();
    this.props.dispatch(askQuestion({ title: this.state.title, body: this.state.body }));
  },

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleTitle} type='text' value={this.state.title} />
        <input onChange={this.handleBody} type='text' value={this.state.body} />
        <input type='submit' className='btn btn-primary' />
      </form>
    );
  }
});

AskPage.propTypes = {
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AskPage);
