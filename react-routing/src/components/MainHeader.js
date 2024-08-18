import { NavLink } from 'react-router-dom';

import styles from './MainHeader.module.css';

const MainHeader = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
        <li>
            <NavLink to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/welcome'>
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink to='/products'>
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;