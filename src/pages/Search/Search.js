import React, { useState, useEffect } from "react";
import SongList from "../../components/SongList/SongList";
import Button from "../../components/Button";

const Search = ({ getAccessToken }) => {
    const [token, setToken] = useState("");
    const [search, setSearch] = useState("");
    const [playlist, setPlaylist] = useState([]);
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        if (window.location.hash) {
            const { access_token } = getAccessToken(window.location.hash);
            setToken(access_token);
        }
    }, [getAccessToken]);

    const buttonHandleSearch = () => {
        fetch(
            `https://api.spotify.com/v1/search?q=${search}&type=track&limit=10`,
            {
                headers: {
                    Authorization: "Bearer " + token,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => setSongs(data.tracks.items));
    };

    return (
        <div>
            <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)} value={search} />
            <Button className='btn btn-success' type='button' onClick={buttonHandleSearch}>
                Search
            </Button>
            </div>
            <div>
                <SongList songs={songs} playlist={playlist} setPlaylist={setPlaylist} />
            </div>
        </div>

    )
}

export default Search;