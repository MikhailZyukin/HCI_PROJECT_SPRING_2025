import { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../firebase';

export default function ParentLogin() {
  const [user, setUser] = useState(null);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (

    
    <div style={{ padding: '2rem' }}>
      <h1>Parent Login</h1>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <img src={user.photoURL} alt="Profile" width="50" />
        </div>
      ) : (
        <button onClick={handleLogin}>Login with Google</button>
      )}
    </div>
  );
}
