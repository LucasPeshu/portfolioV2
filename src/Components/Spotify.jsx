import { FaSpotify, FaTimes } from "react-icons/fa";
import { useState, useEffect } from 'react';
import fetchPlaylistSongs from '../APIs/spotifyAPI';

const Spotify= () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

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

  return(
    <div className="relative">
      <div className="p-4 text-neutral-900 hover:text-neutral-800 rounded-lg w-full h-full flex justify-center items-center bg-gradient-to-r from-green-400 to-green-700 hover:from-green-400 hover:to-green-600 cursor-pointer"
        onClick={togglePopup}>
          <FaSpotify  className="text-9xl" />
      </div>

      {isPopupOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex justify-center items-center z-50">
          <div className="m-4 bg-white rounded-lg relative flex flex-col gap-2">
            <div className="container text-white rounded-lg">
            <h1 className="text-neutral-900 flex items-center justify-center gap-2 text-2xl font-bold p-2 border-2 border-zinc-800 border-b-zinc-600 rounded-t-lg bg-gradient-to-r from-green-400 to-green-600"><FaSpotify /> Mi playlist en spotify</h1>
            {error ? (
                <div className="text-red-500">{error}</div>
            ) : (
                <ul className='bg-neutral-800 grid p-2 overflow-y-auto rounded-b-lg' style={{ maxHeight: '350px' }}>
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
            <div className="absolute top-0 right-0 p-2">
              <FaTimes className="cursor-pointer" onClick={togglePopup} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Spotify;