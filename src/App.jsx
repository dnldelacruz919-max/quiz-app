import { BrowserRouter, 
   Routes,
   Route, 
   useNavigate,
   useLocation
 } from 'react-router-dom'
import './App.css'
import HomePage from './Components/HomePage'
import QuizPage from './Components/QuizPage'
import ResultCard from './Components/ResultCard'

function Home() {
  const navigate = useNavigate()

  return (
    <HomePage
      onStart={() => navigate('/quiz')}
    />
  )
}

function Quiz() {
  const navigate = useNavigate()

  const finishQuiz = (score) => {
    navigate('/result', {
      state: { score: score }
    })
  }

  return <QuizPage onFinish={finishQuiz} />
}

function Result() {
  const navigate = useNavigate()
  const location = useLocation()
  const score = location.state?.score || 0

  return (
    <div className="quiz-page">
      <ResultCard
        score={score}
        total={10}
      />

      <button
        className="next-button"
        onClick={() => navigate('/quiz')}
      >
        Retake Quiz
      </button>

      <button
        className="next-button"
        onClick={() => navigate('/')}
      >
        Return Home
      </button>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App