
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import InternalToolPage from './components/InternalToolPage';
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './services/auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public homepage */}
          <Route path="/" element={<HomePage />} />
          
          {/* Login page */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected internal tool (your original App.tsx content will go here) */}
          <Route 
            path="/internal/maps" 
            element={
              <ProtectedRoute>
                <InternalToolPage />
              </ProtectedRoute>
            } 
          />
          
          {/* Redirect any other paths to homepage */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
