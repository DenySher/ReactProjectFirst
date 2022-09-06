import { StateTypeProfilePage } from "./state"

type AddPostActionType = ReturnType<typeof addPostAC>
type ChangeNewAddPostActionType = ReturnType<typeof changeNewTextAC>
type PropfileAllType = AddPostActionType | ChangeNewAddPostActionType

const profileReducer = (state: StateTypeProfilePage, action: PropfileAllType) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id: 5,
                message: state.valueNewPost,
                likesCounts: 0,
            }
            state.myPosts.push(newPost)
            return state
        case 'CHANGE-NEW-TEXT':
            state.valueNewPost = action.newText
            return state
        default:
            return state
    }
}

export const addPostAC = (newPost: string) => {
    return {
        type: 'ADD-POST',
        newPost: newPost
    } as const
}
export const changeNewTextAC = (newText: string) => {
    return {
        type: 'CHANGE-NEW-TEXT',
        newText: newText
    } as const
}

export default profileReducer