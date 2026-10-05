import AnswerOption from './AnswerOption'

function QuestionCard({
  question,
  selectedAnswer,
  setSelectedAnswer
}) {
  return (
    <div className="question-card">
      <p className="question-number">
        Question {question.id}
      </p>

      <h2>{question.question}</h2>

      <div className="answers">
        {question.choices.map((choice) => (
          <AnswerOption
            key={choice}
            choice={choice}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
          />
        ))}
      </div>
    </div>
  )
}

export default QuestionCard