function AnswerOption({
    choice,
    selectedAnswer,
    setSelectedAnswer
  }) {
    return (
      <button
        className={`answer-option ${
          selectedAnswer === choice ? 'selected' : ''
        }`}
        onClick={() => setSelectedAnswer(choice)}
      >
        {choice}
      </button>
    )
  }
  
  export default AnswerOption
  