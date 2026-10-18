import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Authentication Service v1 ]]</Title>
        <CodeBox
            language="typescript"
        >
            {`${''}
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define auth types
type User = {
  email: string;
  name: string;
  picture?: string;
  hd?: string; // Hosted domain (workspace domain)
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
};

// Create context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider props
type AuthProviderProps = {
  children: ReactNode;
};

// Google auth configuration
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;
const WORKSPACE_DOMAIN = process.env.REACT_APP_WORKSPACE_DOMAIN as string; // e.g., "yourcompany.com"

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize Google Auth on component mount
  useEffect(() => {
    const loadGoogleAuth = async () => {
      try {
        // Load the Google Identity Services script
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        script.onload = () => {
          // Check if user is already logged in
          const storedUser = localStorage.getItem('user');
          if (storedUser) {
            setUser(JSON.parse(storedUser));
          }
          setIsLoading(false);
        };
      } catch (error) {
        console.error('Error loading Google authentication:', error);
        setIsLoading(false);
      }
    };

    loadGoogleAuth();
  }, []);

  // Handle login with Google
  const login = () => {
    if (!window.google) {
      console.error('Google Identity Services not loaded');
      return;
    }

    const handleCredentialResponse = (response: any) => {
      // Parse the JWT token
      const payload = parseJwt(response.credential);
      
      // Verify workspace domain if hd (hosted domain) exists
      if (WORKSPACE_DOMAIN && payload.hd !== WORKSPACE_DOMAIN) {
        console.error('User not part of the authorized workspace domain');
        logout();
        return;
      }
      
      const user = {
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
        hd: payload.hd
      };
      
      setUser(user);
      localStorage.setItem('user', JSON.stringify(user));
    };

    window.google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
      auto_select: false,
    });

    window.google.accounts.id.prompt();
  };

  // Logout handler
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    if (window.google) {
      window.google.accounts.id.disableAutoSelect();
    }
  };

  // Parse JWT token
  const parseJwt = (token: string) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };

  // Check if user is authenticated
  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// Type for global window object with Google Identity Services
declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: any) => void;
          prompt: (callback?: any) => void;
          disableAutoSelect: () => void;
        };
      };
    };
  }
}
`}
        </CodeBox>
    </Chapter>
);
