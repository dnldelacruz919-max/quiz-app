function ResultCard({ score, total }) {
    const incorrect = total - score
    const percentage = (score / total) * 100
  
    return (
      <div className="result-card">
        <h1>Quiz Complete!</h1>
  
        <p>Total Questions: {total}</p>
        <p>Correct Answers: {score}</p>
        <p>Incorrect Answers: {incorrect}</p>
        <p>Final Score: {score} / {total}</p>
        <p>Percentage: {percentage}%</p>
      </div>
    )
  }
  
  export default ResultCard