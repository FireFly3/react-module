import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";

function App() {
    return (
        <div className="window">
            <div className="userPostStyle">
                <div className="userStyle"><Users/></div>
                <div className="postStyle"><Posts/></div>
            </div>
            <div className="commentStyle">
                <Comments/>
            </div>

        </div>
    );
}

export default App;
