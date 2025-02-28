import { Routes, Route } from "react-router-dom"
import LoginGame from "./pages/LoginGame"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginGame />} />
      </Routes>
    </div>
  )

}

export default App
