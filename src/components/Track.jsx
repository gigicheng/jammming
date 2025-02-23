/* eslint-disable react/prop-types */
import styles from './Track.module.css'

function Track({track, signType, onAddTrack, onRmTrack}) {
    return (
        <>
        <li className={styles.track}>
            <div>
                <p>{track.name}</p>
                <p className={styles.subtitle}>{track.artists} | {track.album}</p>
            </div>
            <div>
                {signType === 'add'
                    ? <button className={styles.plusSign} onClick={() => onAddTrack(track)}>+</button>
                    : <button className={styles.deleteSign} onClick={() => onRmTrack(track)}>-</button>
                }
            </div>
        </li>
        </>
    )
}

export default Track;