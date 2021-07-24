import React, { useState } from "react";

const Song = ({id, song, playlist, setPlaylist}) => {
    const [isSelected, setIsSelected] = useState(false)

    const handleSelectClick = (e) => {
        let uri = e.target.value;
        setIsSelected(!isSelected);
        if (playlist.includes(uri)) {
          let newPlaylist = playlist.filter((song) => song !== uri);
          setPlaylist(newPlaylist);
        } else {
          setPlaylist([...playlist, uri]);
        }
    }

    return (
        <tr>
          <td>{id + 1}</td>
          <td>
            <img src={song.album.images[2].url} alt={song.name} />
          </td>
          <td>
            <p>{song.name}</p>
            <p>{song.artists[0].name}</p>
          </td>
          <td>{song.album.release_date}</td>
          <td>
            <button
              onClick={(e) => handleSelectClick(e)}
              value={song.uri}
              className='btn btn-success'
            >
              {playlist.includes(song.uri) ? "Deselect" : "Select"}
            </button>
          </td>
        </tr>
      );
}

export default Song;