import React from 'react';

import './UserPhoto.css'

const UserPhoto = ({photo:{albumId, id, title, thumbnailUrl}}) => {
    return (
        <div className={'userPhoto'}>
            <div>
                <div>ID: {id}</div>
                <div>Album: {albumId}</div>
                <div>Title: {title}</div>
            </div>
            <div><img src={thumbnailUrl} alt={id}/></div>

        </div>
    );
};

export default UserPhoto;