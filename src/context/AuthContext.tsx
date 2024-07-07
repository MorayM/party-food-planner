import { createContext, ReactNode, useMemo, useCallback, useState } from 'react';
import { User } from '@supabase/supabase-js';
import { signInWithPassword, signOut } from 'services/auth';
import { useLocalStorage } from 'hooks/useLocalStorage';

export interface IAuthContext {
  user: User | null;
  login: (password: string) => Promise<void>;
  logout: () => Promise<void>;
  loading: boolean;
}

export const AuthContext = createContext<IAuthContext>({
  user: null,
  login: async () => {},
  logout: async () => {},
  loading: false,
});

export function AuthProvider({ children }: { children?: ReactNode }) {
  const [loading, setLoading] = useState(false);
  const [user, setUser, clearUser] = useLocalStorage<User>('USER_SESSION');

  const login = useCallback(
    async (password: string) => {
      setLoading(true);
      const { data, error } = await signInWithPassword(password);
      if (error) {
        throw error;
      }
      setUser(data.user);
      setLoading(false);
    },
    [setUser, setLoading],
  );

  const logout = useCallback(async () => {
    await signOut();
    clearUser();
  }, [clearUser]);

  const memoedValue = useMemo(
    () => ({
      user,
      login,
      logout,
      loading,
    }),
    [user, login, logout, loading],
  );

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>;
}
