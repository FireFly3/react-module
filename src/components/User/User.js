import React from 'react';

import './User.css'

const User = ({user, setUserId}) => {

    return (
        <div className='userStyle'>
            id: {user.id}
            <br/>
            name: {user.name}
            <br/>
            username: {user.username}
            <br/>
            <button onClick={() => setUserId(user.id)}>Get Posts</button>

        </div>
    );
};

export default User;


// import React from 'react';
//
// import './User.css'
//
// const User = ({user}) => {
//     return (
//         <div className="userStyle">
//             <div>id: {user.id}</div>
//             <div>name: {user.name}</div>
//             <div>username: {user.username}</div>
//             <div>email: {user.email}</div>
//             <div>
//                 Address:
//                 <div>street: {user.address.street}</div>
//                 <div>suite: {user.address.suite}</div>
//                 <div>city: {user.address.city}</div>
//                 <div>zipcode: {user.address.zipcode}</div>
//                 <div>Geo:
//                     <div>lat: {user.address.geo.lat}</div>
//                     <div>lng: {user.address.geo.lng}</div>
//                 </div>
//             </div>
//             <div>phone: {user.phone}</div>
//             <div>website: {user.website}</div>
//             <div>company:
//                 <div>name: {user.company.name}</div>
//                 <div>catchPhrase: {user.company.catchPhrase}</div>
//                 <div>bs: {user.company.bs}</div>
//             </div>
//         </div>
//     );
// };
//
// export default User;