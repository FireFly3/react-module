import React from 'react';

const Mission = (props) => {
    const {mission_name, launch_year, mission_patch_small} = props;
    return (
        <div>
            <div><h1>{mission_name}</h1>
                <p>{launch_year}</p></div>
            <img src={mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export default Mission;

