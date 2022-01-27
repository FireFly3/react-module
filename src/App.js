import './App.css';

import {Route, Routes} from 'react-router-dom'
import './components/Layout/Layout.css'
import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import Layout from "./components/Layout/Layout";
import SinglePost from "./pages/SinglePost/SinglePost";
import Comments from "./pages/Comments/Comments";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<SinglePost/>}/>
                        <Route path={':id/comments'} element={<Comments/>}/>

                    </Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
