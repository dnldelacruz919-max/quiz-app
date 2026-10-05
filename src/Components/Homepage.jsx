function HomePage({ onStart }) {
    return (
      <div className="home-page">
        <div className="home-content">
          <p className="welcome-text">
            Welcome to the
          </p>
  
          <h1>Frontend Quiz!</h1>
  
          <button
            className="start-button"
            onClick={onStart}
          >
            Start Quiz
          </button>
        </div>
      </div>
    )
  }
  
  export default HomePage