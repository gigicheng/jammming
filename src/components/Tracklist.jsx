/* eslint-disable react/prop-types */
import styles from './Tracklist.module.css'
import Track from './Track'

function Tracklist({tracks, setPlaylistTracks, signType}) {
    return (
        <ul className={styles.listItem}>
            {tracks?.map(track => <Track key={track.data.id} track={track} signType={signType} setPlaylistTracks={setPlaylistTracks} />)}
        </ul>
    )
}

export default Tracklist;