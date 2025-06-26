import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import Dashboard from './pages/Dashboard'
import TrainingHub from './pages/TrainingHub'
import AICoach from './pages/AICoach'
import Analytics from './pages/Analytics'
import Community from './pages/Community'
import Layout from './components/Layout'

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/training" element={<TrainingHub />} />
            <Route path="/coach" element={<AICoach />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  )
}

export default App