import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ components∕shared∕ProtectedRoute..tsx v2 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}
import React, { useState, useEffect } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

// You can customize this to be more secure later
const PASSWORD = 'your-secret-password';

// Store auth state in sessionStorage so it persists during the session
const isAuthenticated = (): boolean => {
  return sessionStorage.getItem('isAuthenticated') === 'true';
};

const setAuthenticated = (value: boolean): void => {
  sessionStorage.setItem('isAuthenticated', value.toString());
};

// Styled Components
const AuthContainer = styled.div\`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa;
\`;

const AuthForm = styled.form\`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
\`;

const Title = styled.h1\`
  margin-bottom: 1.5rem;
  color: #343a40;
  font-size: 1.5rem;
  text-align: center;
\`;

const InputGroup = styled.div\`
  margin-bottom: 1rem;
\`;

const Label = styled.label\`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #495057;
\`;

const Input = styled.input\`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ced4da;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #80bdff;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
\`;

const Button = styled.button\`
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
  
  &:hover {
    background-color: #0069d9;
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
  }
\`;

const ErrorMessage = styled.div\`
  color: #dc3545;
  margin-top: 1rem;
  text-align: center;
\`;

const LoginMessage = styled.p\`
  margin-bottom: 1.5rem;
  color: #6c757d;
  text-align: center;
\`;

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [auth, setAuth] = useState(isAuthenticated());
  const location = useLocation();

  // Effect to add noindex meta tag for protected routes
  useEffect(() => {
    // Add meta robots tag
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);
    
    // Clean up on unmount
    return () => {
      document.head.removeChild(metaRobots);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setAuth(true);
      setAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (auth) {
    return <>{`}
        </CodeBox>
    </Chapter>
);
