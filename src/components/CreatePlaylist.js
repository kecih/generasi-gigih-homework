import data from "../data"
const CreatePlaylist = () => {
    // console.log(data.album.images[0].url)
    return <div>
    <h1>Create Playlist</h1>
    <img src={data.album.images[0].url} alt="album" />
    <p>{data.name}</p>
    <p>{data.artists[0].name}</p>
    <p>{data.album.name}</p>
    <input type="button" value="Select" />
    </div>
}

export default CreatePlaylist;