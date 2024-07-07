import { Outlet } from 'react-router-dom';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.wrap}>
      <header>
        <h1>Charlotte&apos;s birthday food planner</h1>
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
