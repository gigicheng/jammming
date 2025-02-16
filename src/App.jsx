import './App.css'
import styles from './App.module.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import { useState } from 'react'

function App() {
  // TODO: useState here
  const [searchText, setSearchText] = useState('');
  const [searchTracks, setSearchTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);


  function saveToSpotify() {
    // TODO: save playlist name and clear all tracks
    alert('saveToSpotify')
  };

  return (
    <>
      <header>
        <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      </header>
      <main>
        <SearchBar searchText={searchText} setSearchText={setSearchText} setSearchTracks={setSearchTracks} />
        <div className={styles.gridContainer}>
          <SearchResults className={styles.gridResults} tracks={searchTracks} setPlaylistTracks={setPlaylistTracks} />
          <Playlist className={styles.gridTrack} tracks={playlistTracks} setPlaylistTracks={setPlaylistTracks} handleClick={saveToSpotify} />
        </div>
      </main>
    </>
  )
}

export default App;