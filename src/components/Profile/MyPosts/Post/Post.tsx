import style from './Post.module.css'
type MwssageType = {
    message: string
    likesCounts: number
}

const Post = (props: MwssageType) => {
    return (
        <div>
            <div>{props.message}</div>
            <div>
                <span>like {props.likesCounts}</span>
            </div>
        </div>
    )
}

export default Post