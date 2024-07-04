import { Outlet } from 'react-router-dom';
import Nav from './layout/Nav';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrap}>
      <header>
        <h1>React + Vite + Supabase boilerplate</h1>
      </header>
      <div className={styles.page}>
        <Nav />
        <main role="main">
          <Outlet />
        </main>
      </div>
      <footer>Copyright notices etc</footer>
    </div>
  );
}

export default App;
