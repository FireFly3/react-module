import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {albumsService} from "../../services/album.service";
import Album from "../../components/Album/Album";

const Albums = () => {
    const {id} = useParams();
    const [albums, setAlbums] = useState([]);

useEffect(()=> {
    albumsService.getByIdAlbums(id).then(value => setAlbums(value))
},[id])
    return (
        <div>
            <div>
                <h1>Albums</h1>
                {albums.map(album => <Album key={album.id} album={album}/>)}
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export default Albums;