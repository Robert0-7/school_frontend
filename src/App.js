import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import AdminLogin from './admin/pages/AdminLogin';
import Dashboard from './admin/pages/Dashboard';
import ChatWidget from './components/ChatWidget/ChatWidget';
import TopHeader from './components/TopHeader/TopHeader';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <TopHeader />
            <div className="App">
              <Header />
              <Hero />
              <Features />
            </div>
            <ChatWidget />
          </>
        } />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
