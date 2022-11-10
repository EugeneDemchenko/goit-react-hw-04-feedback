import { useState } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from "./Section/Section";
import './App.css'

export default function App() {
  const [good, setGood] = useState( 0 )
  const [neutral, setNeutral] = useState( 0 )
  const [bad, setBad] = useState(0)
  
  const countFeedback = reaction => {
    switch (reaction) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  }

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(good /  countTotalFeedback * 100)


  return (
      <>
      <div className="section">
        <Section title="Please leave feedback" >
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={countFeedback}
          />
        </Section>    
        <Section title="Statistics" >
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      </div>
      </>
    );
 }
