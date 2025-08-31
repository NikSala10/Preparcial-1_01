import CardSong from "./CardSong";

const CardList = ({songs, onLike, onDelete, isFavorite}) => {

    return(
        <>
            {songs.map((song) => 
            <CardSong 
            key={song.trackId}
            song={song}
            onLike={onLike}
            onDelete={onDelete}
            isFavorite={isFavorite}/>)}
        </>
    )
}

export default CardList;