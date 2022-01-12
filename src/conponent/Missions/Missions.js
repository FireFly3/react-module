import React, {useEffect, useState} from 'react';

import Mission from "../Mission/Mission"

const Missions = () => {
    const [missions, setMissions] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(value => setMissions(value))
    })


    return (
        <div>
            {missions.map(value => +value.launch_year !== 2020 &&
                <Mission key={value.flight_number} mission_name={value.mission_name} launch_year={value.launch_year} mission_patch_small={value.links.mission_patch_small}/>
            )}
        </div>
    );
};

export default Missions;
