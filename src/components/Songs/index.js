import datas from "../../data"
import SongDetails from "../SongDetails"

const Songs = () => {
return datas.map(data =>(
<div key={data.id}>
    <SongDetails imageUrl={data.album.images[0].url} imageAlt={data.album.name} title={data.name}
        artist={data.artists[0].name} album={data.album.name}/>
</div>
))
}

export default Songs;