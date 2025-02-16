import './App.css'
import styles from './App.module.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Track from './components/Track'
import { useState, useEffect } from 'react'

function App() {
  // TODO: useState here
  const [results, setResults] = useState([{
    song,
    artist,
    album,
  }]);

  const playlistUrl = 'https://spotify23.p.rapidapi.com/playlist/?id=37i9dQZF1DX4Wsb4d7NKfP';

  useEffect(() => {
    fetch(playlistUrl).then((response) => setResults(results.response))
  });

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
        <SearchBar />
        <div className={styles.gridContainer}>
          <SearchResults className={styles.gridResults} />
          <Track className={styles.gridTrack} handleClick={saveToSpotify} />
        </div>
      </main>
    </>
  )
}

export default App;