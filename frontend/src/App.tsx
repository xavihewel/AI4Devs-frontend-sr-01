import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Importar componentes
import RecruiterDashboard from './components/RecruiterDashboard';
import AddCandidateForm from './components/AddCandidateForm';
import Positions from './components/Positions';
import PositionPage from './components/PositionPage';

// Componente de navegación
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Container fluid className="mt-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<RecruiterDashboard />} />
            <Route path="/add-candidate" element={<AddCandidateForm />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/positions/:id" element={<PositionPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

export default App;
