import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { TodoContext } from './TodoContext';
const Nav = () => {
  // const [todos] = useContext(TodoContext);
  const navStyles = {
    nav: {
      height: '5rem',
      backgroundColor: 'rgb(19, 70, 128)',
      color: '#fff',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    color: {
      color: '#fff',
      textDecoration: 'none'
    }
  };

  return (
    <nav style={navStyles.nav}>
      {/* <Link style={navStyles.color} to="/"> */}
      <h2>SenthilKannan</h2>
      {/* </Link> */}
      <ul>
        <li>
          {/* <Link style={navStyles.color} to="/login"> */}
          Login
          {/* </Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
