const SongDetails = ({imageUrl, imageAlt, title, artist, album}) => {
    return <div>
        <img src={imageUrl} alt={imageAlt} />
        <p>{title}</p>
        <p>{artist}</p>
        <p>{album}</p>
    </div>
}
export default SongDetails;