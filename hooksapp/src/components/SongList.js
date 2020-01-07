import React, { useState, useEffect } from "react";
import uuid from "uuid/v1";
import NewSongForm from "./NewSongForm";

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: "Almost Home", id: 1 },
        { title: "Memory Gospel", id: 2 },
        { title: "This Wild Darkness", id: 3 }
    ]);

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuid() }]);
    };

    useEffect(() => {
        console.log("useEffect hook ran");
    }, [songs]);

    return (
        <div className="song-list">
            <ul>
                {
                    songs.map(song => {
                        return (<li key={song.id}>{song.title}</li>);
                    })
                }
            </ul>
            <NewSongForm addSong={addSong} />
        </div>
    );
};

export default SongList;