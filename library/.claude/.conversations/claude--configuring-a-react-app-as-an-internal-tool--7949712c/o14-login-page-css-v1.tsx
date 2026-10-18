import { Chapter, Title } from '@dna-platform/public';
import { CodeBox } from '../../../.manual/.book';
import { Version } from '../../.manual/.book';

export default () => (
    <Chapter>
        <Version />
        <Title>[[ Login Page CSS v1 ]]</Title>
        <CodeBox
            language="css"
        >
            {`
/* Login Page Styles */
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f5f5f5;
}

.login-container {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.login-container h1 {
  margin-bottom: 1.5rem;
  color: #333;
}

.login-buttons {
  margin-top: 2rem;
}

.google-login-button {
  background-color: #4285F4;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  transition: background-color 0.3s;
}

.google-login-button:hover {
  background-color: #357ae8;
}

/* Internal Tool Styles */
.internal-header {
  background-color: #2c3e50;
  color: white;
  padding: 1rem;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

.logout-button {
  background-color: transparent;
  border: 1px solid white;
  border-radius: 4px;
  color: white;
  padding: 0.25rem 0.75rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.logout-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.tool-container {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 130px);
}

.tool-sidebar {
  width: 250px;
  background-color: #f5f5f5;
  padding: 1rem;
}

.tool-sidebar ul {
  list-style: none;
  padding: 0;
}

.tool-sidebar li {
  margin-bottom: 0.5rem;
}

.tool-sidebar button {
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.tool-sidebar button:hover {
  background-color: #e0e0e0;
}

.tool-content {
  flex: 1;
  padding: 1rem;
}

.internal-footer {
  background-color: #f5f5f5;
  padding: 1rem;
  text-align: center;
  font-size: 0.8rem;
  color: #666;
}
`}
        </CodeBox>
    </Chapter>
);
