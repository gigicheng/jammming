/* eslint-disable react/prop-types */
import styles from './Playlist.module.css'
import Tracklist from './Tracklist';

function Playlist({tracks, setPlaylistTracks}) {
    return (
        <>
            <div className={styles.track}>
                <input className={styles.input} type="text" placeholder="Please name your playlist here"/>
                <Tracklist tracks={tracks} setPlaylistTracks={setPlaylistTracks} signType='delete' />
                <button className={styles.saveBtn}>SAVE TO SPOTIFY</button>
            </div>
        </>
    );
};

export default Playlist;