import PropTypes from "prop-types";
import "./Options.css";

const Options = ({ options, onLeaveFeedback, onResetFeedback, totalFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}

      {totalFeedback > 0 && (
        <button onClick={onResetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
};

Options.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  onResetFeedback: PropTypes.func.isRequired,
  totalFeedback: PropTypes.number.isRequired,
};

export default Options;