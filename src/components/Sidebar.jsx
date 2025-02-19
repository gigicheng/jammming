/* eslint-disable react/prop-types */
import styles from './Sidebar.module.css'

function Sidebar({className}) {
    return (
        <div className={className}>
            <div className={styles.myPlaylist}>
                <h2>💜 My Playlist 💜</h2>
                <ul className={styles.list}>
                    <li className={styles.listItem}>playlist1</li>
                    <li className={styles.listItem}>playlist2</li>
                    <li className={styles.listItem}>playlist3</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;