/* eslint-disable react/prop-types */
import styles from './Tracklist.module.css'
import Track from './Track'

function Tracklist({tracks, onAddTrack, onRmTrack, signType}) {
    return (
        <ul className={styles.listItem}>
            {tracks?.map(track => <Track key={track.id} track={track} signType={signType} onAddTrack={onAddTrack} onRmTrack={onRmTrack} />)}
        </ul>
    )
}

export default Tracklist;