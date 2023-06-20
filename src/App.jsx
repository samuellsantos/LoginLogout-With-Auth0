import './App.css';
import { LoginButton } from './components/LoginButton';
import { LogoutButton } from './components/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';
import { Profile } from './components/Profile';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated && (
        <h1 style={{ color: 'green' }}>You are Authenticated</h1>
      )}
      {!isAuthenticated && (
        <h1 style={{ color: 'red' }}>You are not Authenticated</h1>
      )}
      <Profile />
      <LoginButton />
      <LogoutButton />
    </>
  );
}

export default App;
