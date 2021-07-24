import Song from "../Song";

const SongList = ({ songs, playlist, setPlaylist}) => {
    return(
        <table>
            <thead>
            <tr>
                <th>#</th>
                <th></th>
                <th>Title</th>
                <th>Release Date</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {songs.map((song, id)=> {
                    return(
                        <Song key={song.id} id={id} song={song} playlist={playlist} setPlaylist={setPlaylist}/>
                    )
                })}
            </tbody>
        </table>
    )
}

export default SongList;