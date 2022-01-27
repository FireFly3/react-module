
const Comment = ({comment}) => {

    return (
        <div>
            <div>
                <div>PostId: {comment.postId}</div>
                <div>ID: {comment.id}</div>
                <div>Name: {comment.name}</div>
                <div>Email: {comment.email}</div>
                <div>Body: {comment.body}</div>
            </div>

        </div>
    );
};

export default Comment;