import style from './MyPosts.module.css'
import Post from './Post/Post'
import { StoreType } from '../../Redux/state'
import { ChangeEvent } from 'react'


type StorePropsType = {
    store: StoreType
}

const MyPosts = (props: StorePropsType) => {

    console.log(props.store.stateData.profilePage.valueNewPost);

    const myPostsItems = props.store.stateData.profilePage.myPosts.map((e) => {
        return <Post key={e.id} id={e.id} message={e.message} likesCounts={e.likesCounts} />
    })

    const onCliCkHandler = () => {
        props.store.dispatch({ type: 'ADD-POST', newPost: props.store.stateData.profilePage.valueNewPost })
        props.store.changeNewText('')
    }

    const onChangeText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.store.changeNewText(e.currentTarget.value) вмето этого dispatch
        props.store.dispatch({ type: 'CHANGE-NEW-TEXT', newText: e.currentTarget.value })
    }

    return (
        <div className={style.wrapper}>
            <h3>My posts</h3>
            <div>
                <textarea
                    onChange={onChangeText}
                    value={props.store.stateData.profilePage.valueNewPost}
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