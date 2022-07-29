import style from './Post.module.css'

type MwssageType = {
    message: string
    likesCounts: number
}

const Post = (props: MwssageType) => {
    return (
        <div className={style.post}>
            <div className={style.avaAndMessage}>
                <img src='https://uprostim.com/wp-content/uploads/2021/02/image020-24.jpg'></img>
                <div>{props.message}</div>
            </div>
            <span className={style.like}>like {props.likesCounts}</span>
        </div>
    )
}

export default Post