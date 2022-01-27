import React from 'react';

const UserPhoto = ({photo:{albumId, id, title, thumbnailUrl}}) => {
    return (
        <div>
            <div>ID: {id}</div>
            <div>Album: {albumId}</div>
            <div>Title: {title}</div>
            <img src={thumbnailUrl} alt={id}/>

        </div>
    );
};

export default UserPhoto;