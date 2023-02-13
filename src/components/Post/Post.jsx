import PMod from "./Post.module.css";

const Post = (props) => {
    return(
        <div className={PMod.post}>
            <img src={props.img} alt="" className={PMod.image}/>
            <p className={PMod.name}>{props.name}</p>
            <p className={PMod.message}>{props.message}</p>
        </div>
    );
}

export default Post;