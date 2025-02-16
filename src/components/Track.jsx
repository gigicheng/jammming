/* eslint-disable react/prop-types */
import styles from './Track.module.css'

function Track({track, signType, setPlaylistTracks}) {
    function handleAdd() {
        setPlaylistTracks((prev) => 
            [track, ...prev]
        )
    };

    function handleDelete() {
        setPlaylistTracks((prev) =>
            prev.filter(p => p.data.id !== track.data.id)
        )
    };

    return (
        <>
        <li>
            <div>
                <p>{track.data.name}</p>
                <p className={styles.subtitle}>{track.data.artists?.items.map(artist => artist.profile.name).join(' & ')} | {track.data.albumOfTrack.name}</p>
            </div>
            <div>
                {signType === 'add'
                    ? <button className={styles.plusSign} onClick={handleAdd}>+</button>
                    : <button className={styles.deleteSign} onClick={handleDelete}>-</button>
                }
            </div>
        </li>
        </>
    )
}

export default Track;