import './App.css'
import styles from './App.module.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'
import Sidebar from './components/Sidebar'
import { useState } from 'react'

function App() {
  // TODO: useState here
  // const [searchText, setSearchText] = useState('');
  const [searchTracks, setSearchTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);

  async function onSearchClick(text) {
    const url = `https://spotify23.p.rapidapi.com/search/?type=tracks&offset=0&limit=10&numberOfTopResults=5&q=${text}`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
        'x-rapidapi-host': 'spotify23.p.rapidapi.com'
        }
    };
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setSearchTracks(result.tracks.items);
    } catch (error) {
      console.error(error);
    }
  }


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
        <div className={styles.gridContainer}>
          <Sidebar className={styles.gridSidebar} />
          <SearchBar onSearchClick={onSearchClick}/>
          <div className={styles.gridWrapper}>
            <SearchResults className={styles.gridResults} tracks={searchTracks} setPlaylistTracks={setPlaylistTracks} />
            <Playlist className={styles.gridPlaylist} tracks={playlistTracks} setPlaylistTracks={setPlaylistTracks} handleClick={saveToSpotify} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App;