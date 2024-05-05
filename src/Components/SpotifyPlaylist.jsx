import { useState, useEffect } from 'react';
import fetchPlaylistSongs from '../APIs/spotifyAPI';

const SpotifyPlaylist = () => {
    const [songs, setSongs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const songsData = await fetchPlaylistSongs();
                setSongs(songsData);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container text-white">
            <h1 className="text-2xl font-bold bg-zinc-800 p-2 border-2 border-zinc-800 border-b-zinc-600">My coding playlist 🤪</h1>
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <ul className='bg-neutral-800 grid p-2 overflow-y-auto' style={{ maxHeight: '250px' }}>
                    {songs.map((song, index) => (
                        <li key={index} className="text-lg flex items-center p-2 border-b border-zinc-700 hover:bg-neutral-700">
                            <span className="font-semibold mr-2">{index + 1}.</span>
                            <img src={song.imageUrl} alt={song.name} className="w-10 h-10 mr-2" />
                            <a href={song.songLink} target="_blank" rel="noopener noreferrer" className="flex-1">{song.name} - {song.artist}</a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SpotifyPlaylist;

