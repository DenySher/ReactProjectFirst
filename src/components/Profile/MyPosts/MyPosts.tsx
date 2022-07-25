import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div>new post</div>
            <Post message='Hello,  how are you?' likesCounts={20}/>
            <Post message='hi, i am fine' likesCounts={30}/>
        </div>
    )
}

export default MyPosts