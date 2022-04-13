import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontWeight: 500,
    fontSize: 56,
    textAlign: 'center',
    alignItems: 'center',
    color: '#154584',
    margin: 0,
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h2 style={styles.title}>WELCOME TO THE PHONEBOOK</h2>
  </div>
);

export default HomeView;
