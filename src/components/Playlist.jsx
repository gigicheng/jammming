/* eslint-disable react/prop-types */
import styles from './Playlist.module.css'
import Tracklist from './Tracklist';

function Playlist({tracks, playlistName, setPlaylistTracks, onNameChange, onRmTrack, onSave}) {
    function handlePlaylistNameChange(e) {
        onNameChange(e.target.value);
    };

    return (
        <>
            <div className={styles.track}>
                <input className={styles.input} value={playlistName} type="text" placeholder="Please name your playlist here" onChange={handlePlaylistNameChange} />
                <Tracklist tracks={tracks} setPlaylistTracks={setPlaylistTracks} signType='delete' onRmTrack={onRmTrack} />
                <button className={styles.saveBtn} onClick={onSave}>SAVE TO SPOTIFY</button>
            </div>
        </>
    );
};

export default Playlist;