import style from './MyPosts.module.css'
import Post from './Post/Post'
import { StateType } from '../../Redux/state'
import { ChangeEvent } from 'react'

type DataTypeProps = {
    myPosts: StateType
    addPost: (postMessage: string) => void
    changeNewText: (newText: string) => void
}

const MyPosts = (props: DataTypeProps) => {

    console.log(props.myPosts.profilePage.valueNewPost);

    const myPostsItems = props.myPosts.profilePage.myPosts.map((e) => {
        return <Post key={e.id} id={e.id} message={e.message} likesCounts={e.likesCounts} />
    })

    const onCliCkHandler = () => {
        props.addPost(props.myPosts.profilePage.valueNewPost)
        props.changeNewText('')
    }

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
    }

    return (
        <div className={style.wrapper}>
            <h3>My posts</h3>
            <div>
                <textarea
                    onChange={onChangeText}
                    value={props.myPosts.profilePage.valueNewPost}
                />
            </div>
            <div className={style.btnAddPost}>
                <button onClick={onCliCkHandler}>Add post</button>
            </div>
            <div>new post</div>
            {myPostsItems}
        </div>
    )
}

export default MyPosts