import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {photoService} from "../../services/photos.service";
import UserPhoto from "../../components/UserPhoto/UserPhoto";

const UserPhotos = () => {
    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();

    useEffect(() => {
        photoService.getPhotoById(albumId).then(value => setPhotos(value))
    }, [albumId])

    return (
        <div>
            {photos.map(photo=> <UserPhoto key={photo.id} photo={photo}/>)}

        </div>
    );
};


export default UserPhotos;