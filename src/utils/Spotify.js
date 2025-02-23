/* eslint-disable no-unused-vars */
let accessToken = "";
const clientID = import.meta.env.VITE_SPOTIFY_CLIENT_ID;
const redirectUrl = import.meta.env.VITE_REDIRECT_URL;

const Spotify = {
    // 這個 method 目的在取得 Token, 有了 Token 以後才有權限去使用 Spotify 的功能
    getAccessToken() {
        // first check: 檢查 accessToken 是否為空字串, 如不為空字串(ture), 則 retrun 該值, 不用再重新取得令牌
        if(accessToken) return accessToken;

        // take all data comes after query string ?...
        // const urlParams = new URLSearchParams(window.location.hash);
        // gets data comes after access_token=
        // const tokenInUrl = urlParams.get("access_token");
        // gets data comes after expires_in=
        // const expiryTime = urlParams.get("expires_in");
        
        const tokenInUrl = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        // secound check: 如果有取得 tokenInUrl 和 expiryTime 的值, 將 tokenInUrl 設為 accessToken
        if(tokenInUrl && expiryTime) {
            accessToken = tokenInUrl[1];
            // 將 expiryTime 由 string 轉為 number
            const expiresIn = Number(expiryTime[1]);
            
            // setTimeout 設定到期時間清空 accessToken, accessToken = "" 用 ( ) 包裝起來, 因此處不需 return 所以不能寫單行表達式, 也不能寫 { }
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
            //  pushState 清除搜尋資訊使 url 回到首頁 .../
            window.history.pushState(null, null, "/");

            return accessToken;
        };
        // third check: 如果檢查一和二都為false, 則會造訪 Spotify 去重新取得授權
        // 授權請求 url 撰寫條線參考: https://developer.spotify.com/documentation/web-api/tutorials/code-flow
        // scpoe 為可選, 限制使用者只能管理自己的播放列表
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUrl}`;
        window.location = redirect;
    },

    // 這個 method 會依使用者搜尋文字尋找曲目, 並取得每一首相關曲目的個別資訊
    async search(text) {
        accessToken = Spotify.getAccessToken();
        // 依使用者搜尋文字 text 尋找曲目
        const response = await fetch(`https://api.spotify.com/v1/search?q=${text}&type=track`, {
            // method 預設為 "GET", 所以這邊可以省略不寫
            method: "GET",
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        const searchData = await response.json();

        if(!searchData) {
            // 同為 console.log, 只是 error 會在瀏覽器標示為紅字
            console.error("Response Error");
        };
        // 取得每首歌曲的資訊
        return searchData.tracks.items.map((item) => {
            return {
                id: item.id,
                name: item.name,
                artists: item.artists.map(artist => artist.name).join(' & '),
                album: item.album.name,
                uri: item.uri,
            }
        });

    },

    // 這個 method 將使用者創建的 playlist 歌單, 添加進 Spotify App 的播放列表內
    // 共有三步驟, 第一先取得使用者的 user id, 第二用 userId 去創建一個 playlist, 第三用 playlistId 去新增底下的歌用
    async savePlaylist(playlistName, trackUris) {
        if(!playlistName || !trackUris) return;
        accessToken = Spotify.getAccessToken();
        const headers = { Authorization: `Bearer ${accessToken}` };

        const userResponse = await fetch(`https://api.spotify.com/v1/me`, {
            method: "GET",
            headers,
        });
        const userData = await userResponse.json();
        const userId = userData.id;

        const playlistResponse = await fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: "POST",
            headers,
            // 依照 Spotify 文件要求的 Request body 需要包含 "name":"New Playlist" (JSON 語法)
            body: JSON.stringify({name: playlistName})
        });
        const playlistData = await playlistResponse.json();
        const playlistId = playlistData.id;

        // 最後一步 call 這個 API 的時候就會把使用者創建的 playlist, 添加進 Spotify App 的播放列表內
       await fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            method: "POST",
            headers,
            // 依照 Spotify 文件要求的 Request body 需要包含 "uris":"string" (JSON 語法)
            body: JSON.stringify({uris: trackUris}),
        });
    },
};

export { Spotify };