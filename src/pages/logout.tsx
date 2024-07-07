import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export function Logout() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    const handleLogout = async () => {
      await logout();
      navigate('/login');
    };

    handleLogout();
  }, [logout, navigate]);

  return <div>Logging out...</div>;
}

export default Logout;
