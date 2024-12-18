import './App.css'
import { Page1 } from './pages/pg1'
import { SummaryPage } from './pages/pg2'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return(
    <Router>
      <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/summary" element={<SummaryPage />} />
      </Routes>
    </Router>
  )
}

export default App
