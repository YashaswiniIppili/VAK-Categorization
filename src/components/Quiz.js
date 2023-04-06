import React from 'react';
import './Quiz.css';
import { createObjectCsvWriter } from 'csv-writer';

const csvWriter = createObjectCsvWriter({
  path: 'learning-style.csv',
  header: [
    { id: 'q1', title: 'Question 1' },
  ],
  append: true,
});

class QuizForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      q1: formData.get('q1'),
    };
    csvWriter.writeRecords([data])
      .then(() => alert('Data saved to CSV file successfully'));
  };

  render() {
    return (
      <div className='body'>
        <h1>What is your learning style?</h1>
        <form onSubmit={this.handleSubmit}>
          <h2>Question 1:</h2>
          <p>How do you prefer to learn?</p>
          <label><input type="radio" name="q1" value="By reading or listening to information"/>By reading or listening to information</label><br />
          <label><input type="radio" name="q1" value="By watching someone else do it"/>By watching someone else do it</label><br />
          <label><input type="radio" name="q1" value="By trying it yourself"/>By trying it yourself</label><br />
          <button className="quiz-button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default QuizForm;
