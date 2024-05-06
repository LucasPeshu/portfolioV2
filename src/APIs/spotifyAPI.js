import axios from 'axios';

const clientId = import.meta.env.VITE_CLIENT_ID;
const clientSecret = import.meta.env.VITE_CLIENT_SECRET;
let accessToken;
const refreshToken = import.meta.env.VITE_REFRESH_TOKEN;
const playlistId = import.meta.env.VITE_PLAYLIST_ID; 

const fetchPlaylistSongs = async () => {
    try {
        if (!accessToken) {
            accessToken = await renewAccessToken();
        }
        
        const response = await axios.get(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        const songsData = response.data.items.map(item => {
            const imageUrl = item.track.album.images.reduce((prevImage, currentImage) => {
                if (prevImage.height < currentImage.height) {
                    return currentImage;
                }
                return prevImage;
            }, { height: 0 }).url;

            const songLink = item.track.external_urls.spotify;

            return {
                name: item.track.name,
                artist: item.track.artists.map(artist => artist.name).join(', '),
                imageUrl: imageUrl,
                songLink: songLink 
            };
        });

        return songsData;
    } catch (error) {
        if (error.response.status === 401) {
            try {
                accessToken = await renewAccessToken();
                return fetchPlaylistSongs();
            } catch (renewError) {
                throw renewError;
            }
        } else {
            throw error.response.data;
        }
    }
};

const renewAccessToken = async () => {
    try {
        const response = await axios.post('https://accounts.spotify.com/api/token', null, {
            params: {
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
                client_id: clientId,
                client_secret: clientSecret
            }
        });

        return response.data.access_token;
    } catch (error) {
        throw new Error('Error al renovar el token de acceso');
    }
};

export default fetchPlaylistSongs;
