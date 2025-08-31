// portada, título, artista y un botón "Like".
const CardSong = ({song,  onLike, onDelete, isFavorite}) => {

    return (
    <div className="song">
        <img src={song.artworkUrl100} alt={song.collectionName}/>
        <p>{song.collectionName}</p>
        <p>{song.artistName}</p>
        {isFavorite ? (
        <button onClick={() => onDelete(song.trackId)}>Eliminar</button>
      ) : (
        <button onClick={() => onLike(song)}>Like</button>
      )}
    </div>
    )
}

export default CardSong;