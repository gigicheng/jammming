import styles from './SearchBar.module.css'

function SearchBar() {
    return (
        <>
            <input className={styles.input} type="text" />
            <div>
                <button className={styles.button}>SEARCH</button>
            </div>
        </>
    )
}

export default SearchBar;
