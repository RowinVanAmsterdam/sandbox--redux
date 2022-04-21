import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className='header'>
      <h1>Sandbox--redux</h1>

      <ul className='navigation'>
        <li>
          <Link className='navigation__item' to="/toolkit">Toolkit</Link>
        </li>
        <li>
          <Link className='navigation__item' to="core">Core</Link>
        </li>
      </ul>
    </div>
  )
}

export default Header; 