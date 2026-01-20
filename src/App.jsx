import "./App.css";
import "./index.css";
import Quiz from "./components/quiz.jsx";
import Result from "./components/result.jsx";

function App() {
  return (
    <div className="containers">
      <div className="app-container">
        <h1 className="h1">QUIZ</h1>
        <Quiz></Quiz>
      </div>
    </div>
  );
}

export default App;
