/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './SearchBar.module.css'

function SearchBar({onSearch}) {
    const [text, setText] = useState('')
    function handleChange(e) {
        setText(e.target.value)
    };

    return (
        <>
            <div className={styles.gridSearchBar}>
                <input className={styles.input} type="text" value={text} onChange={handleChange} />
                <div>
                    <button className={styles.button} onClick={() => {onSearch(text)}}>SEARCH</button>
                </div>
            </div>
        </>
    )
}

export default SearchBar;
