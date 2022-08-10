import style from './MyPosts.module.css'
import Post from './Post/Post'


const myPostsData = [
    { message:'Hello,  how are you?', likesCounts: 20},
    { message:'hi, i am fine', likesCounts: 30},
]
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
            <Post message={myPostsData[0].message} likesCounts={myPostsData[0].likesCounts} />
            <Post message={myPostsData[1].message} likesCounts={myPostsData[1].likesCounts} />
        </div>
    )
}

export default MyPosts