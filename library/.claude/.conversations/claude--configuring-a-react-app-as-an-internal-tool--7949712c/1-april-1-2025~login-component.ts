
import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../services/auth';

type LocationState = {
  from: {
    pathname: string;
  };
};

const Login: React.FC = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the page user was trying to access
  const from = (location.state as LocationState)?.from?.pathname || '/internal/maps';
  
  // Create a div for Google Sign-In button
  useEffect(() => {
    if (isAuthenticated) {
      // Redirect to the original page if already authenticated
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Internal Tool Login</h1>
        <p>This area is restricted to authorized personnel only.</p>
        <p>Please sign in with your company Google Workspace account.</p>
        
        <div className="login-buttons">
          <button 
            onClick={login}
            className="google-login-button"
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
