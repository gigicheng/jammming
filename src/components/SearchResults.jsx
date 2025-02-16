import styles from './SearchResults.module.css'

function SearchResults() {
    return (
        <>
            <div className={styles.results}>
                <h2>Results</h2>
                <ul className={styles.listItem}>
                    <li>
                        <div>
                            <p>Song</p>
                            <p className={styles.subtitle}>Artist<span> | Album</span></p>
                        </div>
                        <div>
                            <button className={styles.plusSign}>+</button>
                        </div>
                    </li>
                    <div className={styles.divider}></div>
                    <li>
                        <div>
                            <p>Song</p>
                            <p className={styles.subtitle}>Artist<span> | Album</span></p>
                        </div>
                        <div>
                            <button className={styles.plusSign}>+</button>
                        </div>
                    </li>
                    <div className={styles.divider}></div>
                    <li>
                        <div>
                            <p>Song</p>
                            <p className={styles.subtitle}>Artist<span> | Album</span></p>
                        </div>
                        <div>
                            <button className={styles.plusSign}>+</button>
                        </div>
                    </li>
                    <div className={styles.divider}></div>
                </ul>
            </div>
        </>
    );
};

export default SearchResults;