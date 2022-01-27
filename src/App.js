import './App.css';

import {Route, Routes} from 'react-router-dom'
import './components/Layout/Layout.css'
import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import Layout from "./components/Layout/Layout";
import SinglePost from "./pages/SinglePost/SinglePost";
import Comments from "./pages/Comments/Comments";
import UserDetail from "./pages/UserDetail/UserDetail";
import Albums from "./pages/Albums/Albums";
import UserPosts from "./pages/UserPosts/UserPosts";
import UserPhotos from "./pages/UserPhotos/UserPhotos";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetail/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<Albums/>}>
                            <Route path={':albumId/photos'} element={<UserPhotos/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<SinglePost/>}>
                            <Route path={'comments'} element={<Comments/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
