import { Link } from 'react-router-dom';

/**
 * The `Link` component is used here instead of `a` to route the link through React Router
 * Using `a` will have the same result, but will result in the browser loading a new page, something to be avoided!
 * @returns The nav component
 */
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
