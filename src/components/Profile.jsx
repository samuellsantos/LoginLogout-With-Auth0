import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      {isAuthenticated && (
        <>
          <h1>Your Profile</h1>
          <img
            src={user?.picture}
            style={{ width: '300px', borderRadius: '50%' }}
          />
          <h1 style={{ fontSize: '22px' }}>Name: {user?.name}</h1>
          <h2 style={{ fontSize: '16px' }}>Email: {user?.email}</h2>
        </>
      )}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};
