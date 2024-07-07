import { Link, Outlet } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import Curl from './assets/curl.svg?react';

import styles from './App.module.scss';

function App() {
  const { user } = useAuth();
  return (
    <div className={styles.wrap}>
      <header>
        <h1>Charlotte&apos;s birthday food planner</h1>
        <Curl />
      </header>
      <div className={styles.page}>
        <main role="main">
          <Outlet />
        </main>
      </div>
      <footer>
        &copy; <a href="https://github.com/MorayM/party-food-planner">Moray Macdonald 2024</a> |
        {user && <Link to="logout">Logout</Link>}
      </footer>
    </div>
  );
}

export default App;
