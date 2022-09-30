import React, { useRef } from 'react';
import styles from './search_header.module.css';

function SearchHeader({ onSearch, onLogoClick }) {
  console.log('header')
  const inputRef = useRef();
  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };
  const onClick = () => {
    handleSearch();
  };

  const onKeyPrees = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={onLogoClick}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        className={styles.input}
        type="search"
        placeholder="Search..."
        onKeyPress={onKeyPrees}
        ref={inputRef}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img
          className={styles.buttonImg}
          src="/images/search.png"
          alt="search"
        />
      </button>
    </header>
  );
}

export default React.memo(SearchHeader);
