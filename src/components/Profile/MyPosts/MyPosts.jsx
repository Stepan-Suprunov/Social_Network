import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id:1, text:'Hi! How are you?', likes:15},
        {id:2, text:'It\'s my first message!', likes:25},

    ];

    return (
        <div className={classes.postsBlock}>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </div>
            <div className={classes.posts}>
                <Post
                    message={postsData[0].text}
                    likes={postsData[0].likes}
                />
                <Post
                    message={postsData[1].text}
                    likes={postsData[1].likes}
                />
            </div>
        </div>
    );
};

export default MyPosts;