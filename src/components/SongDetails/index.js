import "./style.css"
import Button from "../Button";
const SongDetails = ({imageUrl, imageAlt, title, artist, album}) => {
    return <div className="song-container">
        <img src={imageUrl} alt={imageAlt} />
        <p>{title}</p>
        <p>{artist}</p>
        <p>{album}</p>
        <Button value="Select"/>
    </div>
}
export default SongDetails;