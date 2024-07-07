import { FormEvent, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

function Login() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { user, login } = useAuth();

  if (user) return <Navigate to="/" />;

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage('');
    try {
      await login(password);
      navigate('/');
    } catch (error) {
      setErrorMessage('Incorrect password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <p>Please enter the password you&apos;ve been sent</p>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {errorMessage && <span>{errorMessage}</span>}
        <div>
          <button type="submit" disabled={loading}>
            {loading ? <span>Loading</span> : <span>Login</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
