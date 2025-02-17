import { FaSignal } from 'react-icons/fa6';
import { MdOutlineWbSunny } from 'react-icons/md';
import { IoMdSunny } from 'react-icons/io';
import { ThemeContext } from '../contexts/ThemeContext';
import { useContext } from 'react';

function Header() {
  // Access the context
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <>
      <div
        style={{
          backgroundColor: '#4C85BE',
          padding: '2rem 6rem',
          display: 'flex',
          color: '#fff',
          alignItems: 'center',
        }}
      >
        <FaSignal size={30} />
        <span
          style={{ marginLeft: '1rem', fontSize: '24px', fontWeight: '500' }}
        >
          Expendo
        </span>
        <button
          onClick={toggleTheme}
          style={{
            marginLeft: 'auto',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          {theme === 'light' ? (
            <IoMdSunny size={30} color="#fff" />
          ) : (
            <MdOutlineWbSunny size={30} color="#fff" />
          )}
        </button>
      </div>
    </>
  );
}

export default Header;
