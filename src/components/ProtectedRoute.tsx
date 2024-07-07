import { useAuth } from 'hooks/useAuth';
import { Outlet, Navigate } from 'react-router-dom';

export function ProtectedRoute() {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
