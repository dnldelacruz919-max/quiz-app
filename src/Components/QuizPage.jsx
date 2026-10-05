import { useState } from 'react'
import questions from '../data/questions'
import QuestionCard from './QuestionCard'
import QuizHeader from './QuizHeader'
import ProgressBar from './ProgressBar'

function QuizPage({ onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [score, setScore] = useState(0)

  const question = questions[currentQuestion]

  const handleNext = () => {
    if (!selectedAnswer) {
      alert('Please select an answer first.')
      return
    }

    let newScore = score

    if (selectedAnswer === question.correctAnswer) {
      newScore = score + 1
      setScore(newScore)
    }

    if (currentQuestion === questions.length - 1) {
      onFinish(newScore)
      return
    }

    setCurrentQuestion(currentQuestion + 1)
    setSelectedAnswer('')
  }

  return (
    <div className="quiz-page">
      <QuizHeader
        current={currentQuestion + 1}
        total={questions.length}
      />

      <ProgressBar
        current={currentQuestion + 1}
        total={questions.length}
      />

      <QuestionCard
        question={question}
        selectedAnswer={selectedAnswer}
        setSelectedAnswer={setSelectedAnswer}
      />

      <button className="next-button" onClick={handleNext}>
        {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next'}
      </button>
    </div>
  )
}

export default QuizPage
