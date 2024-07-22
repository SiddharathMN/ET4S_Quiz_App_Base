import React, { useState } from 'react';
import { auth, createUserWithEmailAndPassword, signInWithGoogle } from './firebase';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUpWithEmail = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSignUpWithGoogle = async () => {
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
      <h1 style={styles.header}>Create an Account</h1>
        <h1 style={styles.title}>Sign Up</h1>
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
          onClick={handleSignUpWithEmail}
          style={styles.button}
        >
          Sign Up with Email
        </button>
        <button
          onClick={handleSignUpWithGoogle}
          style={{ ...styles.button, ...styles.googleButton }}
        >
          Sign Up with Google
        </button>
        <div style={styles.footer}>
          Already have an account? <Link to="/login" style={styles.link}>Log in</Link>
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
    backgroundColor: '#f0f2f5',
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
  title: {
    marginBottom: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000', 

  },
  error: {
    marginBottom: '20px',
    color: 'red',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
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
    backgroundColor: '#4a148c',
    color: '#fff',
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  footer: {
    marginTop: '20px',
  },
  link: {
    color: '#4a148c',
    textDecoration: 'none',
  },
};

export default SignUp;
