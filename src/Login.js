import React, { useState } from 'react';
import { auth, signInWithEmailAndPassword, signInWithGoogle } from './firebase'; // Import signInWithGoogle
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.header}>Login</h1>
        {error && <div style={styles.error}>{error}</div>}
        <div style={styles.inputGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button
          onClick={handleLogin}
          style={{ ...styles.button, ...styles.emailButton }}
        >
          Login with Email
        </button>
        <button
          onClick={handleSignInWithGoogle}
          style={{ ...styles.button, ...styles.googleButton }}
        >
          Login with Google
        </button>
        <div style={styles.footer}>
          Don't have an account? <Link to="/" style={styles.link}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #000000, #4a148c, #00274d)',
  },
  card: {
    width: '400px',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  header: {
    marginBottom: '20px',
    fontSize: '24px',
    fontWeight: 'bold',
    color: '#000', 
  },
  error: {
    marginBottom: '20px',
    color: 'red',
  },
  inputGroup: {
    marginBottom: '20px',
  },
  input: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    marginTop: '10px',
  },
  emailButton: {
    backgroundColor: '#4a148c', 
    color: '#fff',
  },
  googleButton: {
    backgroundColor: '#db4437',
    color: '#fff',
  },
  footer: {
    marginTop: '20px',
  },
  link: {
    color: '#4a148c',
    textDecoration: 'none',
  },
};

export default Login;
