import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img
                src='https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png'/>
            {props.message}
            <div>
                <span>Like {props.likes}</span>
            </div>
        </div>
    );
};

export default Post;