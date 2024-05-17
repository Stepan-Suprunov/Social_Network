import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post
                    message='Hi! How are you?'
                    likes='15'
                />
                <Post
                    message="It's my first message!"
                    likes='25'
                />
            </div>
        </div>
    );
};

export default MyPosts;