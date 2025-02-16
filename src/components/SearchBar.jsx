/* eslint-disable react/prop-types */
import styles from './SearchBar.module.css'

function SearchBar({searchText, setSearchText, setSearchTracks}) {
    function handleChange(e) {
        setSearchText(e.target.value)
    };

    async function handleSearchClick() {
        // alert(searchText)
        const url = `https://spotify23.p.rapidapi.com/search/?type=tracks&offset=0&limit=10&numberOfTopResults=5&q=${searchText}`;
        const options = {
	        method: 'GET',
	        headers: {
		        'x-rapidapi-key': 'ac9807aaafmsh215f2a71abd01aep1601efjsn283c673b3c9f',
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
    };

    return (
        <>
            <input className={styles.input} type="text" value={searchText} onChange={handleChange} />
            <div>
                <button className={styles.button} onClick={handleSearchClick}>SEARCH</button>
            </div>
        </>
    )
}

export default SearchBar;
