import React from 'react';

const styles: { [key: string]: React.CSSProperties } = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#444',
    padding: '20px 20px',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    width: '200px',
    height: 'auto',
  },
  profile: {
    height: '40px',
    borderRadius: '50%',
  },
};

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <div className="navbar-logo">
        <img src="/logo.png" alt="Logo" style={styles.logo} />
      </div>
    </nav>
  );
};

export default Navbar;
