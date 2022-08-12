import { myPostsData } from '../../..' // импортирую данные из index.tsx 
import style from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    const myPostsItems = myPostsData.map((e) => {
        return <Post message={e.message} likesCounts={e.likesCounts} id={e.id} key={e.id} />
    })

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
            {myPostsItems}
        </div>
    )
}

export default MyPosts