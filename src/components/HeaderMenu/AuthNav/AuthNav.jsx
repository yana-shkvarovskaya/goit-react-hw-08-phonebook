import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  const styles = {
    link: {
      display: 'inline-block',
      textDecoration: 'none',
      padding: 12,
      fontWeight: 700,
      color: 'hsl(236deg 72% 36% / 72%)',
    },
    activeLink: {
      color: 'hsl(357deg 87% 53%)',
    },
  };

  return (
    <div>
      <NavLink
        to="/register"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Register
      </NavLink>

      <NavLink
        to="/login"
        exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
