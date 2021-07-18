import data from "../../data"
import SongDetails from "../SongDetails"
import Button from "../Button"
const DataLoop = () => {
return data.map(e =>(
<div>
    <SongDetails key={e.id} imageUrl={e.album.images[0].url} imageAlt={e.album.name} title={e.name}
        artist={e.artists[0].name} album={e.album.name} />
    <Button value="Select"/>
</div>
))
}

export default DataLoop;