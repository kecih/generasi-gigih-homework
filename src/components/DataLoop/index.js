import data from "../../data"
import SongDetails from "../SongDetails"

const DataLoop = () => {
return data.map(e =>(
<div key={e.id}>
    <SongDetails imageUrl={e.album.images[0].url} imageAlt={e.album.name} title={e.name}
        artist={e.artists[0].name} album={e.album.name} />
</div>
))
}

export default DataLoop;