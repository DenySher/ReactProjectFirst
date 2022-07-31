import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div className={style.wrapper}>
            <h3>My posts</h3>
            <div>
                <input></input>
            </div>
            <div className={style.btnAddPost}>
                <button>Add post</button>
            </div>
            <div>new post</div>
            <Post message='Hello,  how are you?' likesCounts={20} />
            <Post message='hi, i am fine' likesCounts={30} />
        </div>
    )
}

export default MyPosts