import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id:1, text:'Hi! How are you?', likes:15},
        {id:2, text:'It\'s my first message!', likes:25},
    ];

    let postsElements = posts.map(post => <Post message={post.text} likes={posts[0].likes} />)

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
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;