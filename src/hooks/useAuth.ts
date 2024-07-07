import { useContext } from 'react';
import { AuthContext, IAuthContext } from 'context/AuthContext';

export function useAuth(): IAuthContext {
  return useContext(AuthContext);
}
