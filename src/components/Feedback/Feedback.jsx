import PropTypes from "prop-types";
import "./Feedback.css";

const Feedback = ({ feedbacks, totalFeedback, positiveFeedbackPercentage }) => {
  return (
    <div>
        <p>Good: {feedbacks.good}</p>
        <p>Neutral: {feedbacks.neutral}</p>
        <p>Bad: {feedbacks.bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive: {positiveFeedbackPercentage}%</p>
    </div>
  );
};

Feedback.propTypes = {
  feedbacks: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
    totalFeedback: PropTypes.number.isRequired,
    positiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Feedback;