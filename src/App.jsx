/* eslint-disable no-unused-vars */
import './App.css'
import styles from './App.module.css'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Playlist from './components/Playlist'

import { useState } from 'react'
import { Spotify } from './utils/Spotify'

function App() {
  // TODO: useState here
  // const [searchText, setSearchText] = useState('');
  const [searchTracks, setSearchTracks] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState('');

  async function onSearch(text) {
    const results = await Spotify.search(text);
    setSearchTracks(results);
  };

  function handleAddTrack(track) {
    const trackExists = playlistTracks.find((t) => t.id === track.id);
    if(trackExists) {
      alert('Track has been add');
    } else {
      setPlaylistTracks([track, ...playlistTracks]);
    }
  };

  function handleRmTrack(track) {
    const trackExists = playlistTracks.filter((t) => t.id !== track.id);
    setPlaylistTracks(trackExists);
  };

  function handleNameChange(name) {
    setPlaylistName(name);
  };

  async function saveToSpotify() {
    // TODO: save playlist name and clear all tracks
    if(!playlistName) {
      alert('Please enter a playlist name');
      return;
    };

    const trackUris = playlistTracks.map((track) => track.uri);
    await Spotify.savePlaylist(playlistName, trackUris);

    setPlaylistTracks([]);
    setPlaylistName('');
  };

  return (
    <>
      <header>
        <h1>Ja<span className={styles.highlight}>mmm</span>ing</h1>
      </header>
      <main>
        <div className={styles.gridContainer}>
          
          <SearchBar onSearch={onSearch}/>
          <div className={styles.gridWrapper}>
            <SearchResults className={styles.gridResults} tracks={searchTracks} onAddTrack={handleAddTrack} onRmTrack={handleRmTrack} />
            <Playlist 
            className={styles.gridPlaylist} 
            tracks={playlistTracks} 
            setPlaylistTracks={setPlaylistTracks} 
            playlistName={playlistName} 
            onNameChange={handleNameChange} 
            onSave={saveToSpotify}
            onRmTrack={handleRmTrack} />
          </div>
        </div>
      </main>
    </>
  )
}

export default App;