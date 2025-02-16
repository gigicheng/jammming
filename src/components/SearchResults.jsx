/* eslint-disable react/prop-types */
import styles from './SearchResults.module.css'
import Tracklist from './Tracklist';

function SearchResults({tracks, setPlaylistTracks}) {
    return (
        <>
            <div className={styles.results}>
                <h2>Results</h2>
                <Tracklist tracks={tracks} setPlaylistTracks={setPlaylistTracks} signType='add' />
            </div>
        </>
    );
};

export default SearchResults;