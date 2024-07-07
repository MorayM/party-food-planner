import { Link, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

import styles from './App.module.scss';

function App() {
  const { user } = useAuth();
  return (
    <div className={styles.wrap}>
      <header>
        <h1>Charlotte&apos;s birthday food planner</h1>
        {user && <Link to="logout">Logout</Link>}
      </header>
      <div className={styles.page}>
        <main role="main">
          <Outlet />
        </main>
      </div>
      <footer>Copyright notices etc</footer>
    </div>
  );
}

export default App;
