import styles from './Track.module.css'

// eslint-disable-next-line react/prop-types
function Track({handleClick}) {
    return (
        <>
            <div className={styles.track}>
            <input className={styles.input} type="text" placeholder="Please name your playlist here"/>
            <div className={styles.divider}></div>
                <ul className={styles.listItem}>
                    <li>
                        <div>
                            <p>Song</p>
                            <p className={styles.subtitle}>Artist<span> | Album</span></p>
                        </div>
                        <div>
                            <button className={styles.deleteSign}>-</button>
                        </div>
                    </li>
                    <div className={styles.divider}></div>
                </ul>
                <button className={styles.saveBtn} onClick={handleClick}>SAVE TO SPOTIFY</button>
            </div>
        </>
    );
};

export default Track;