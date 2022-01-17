import {useState} from "react";

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import UserDetail from "./components/UserDetails/UserDetail";

function App() {
    const [userId, setUserId] = useState(null);
    const [flagForPosts, setFlagForPosts] = useState(null);

    return (
        <div className='window'>
            <div className='upper_block'><Users setUserId={setUserId}/>
                {userId && <UserDetail userId={userId} setFlagForPosts={setFlagForPosts} flagForPosts={flagForPosts}/>}
            </div>
            <div className='bottom_block'>{userId && flagForPosts && <Posts userId={userId}/>}</div>
        </div>
    );
}

export default App;

