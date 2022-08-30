type DialogsDataTypes = {
    id: number,
    name: string,
}
type MessagesDataTypes = {
    id: number,
    message: string,
}
type MyPostsDataTypes = {
    id: number,
    message: string,
    likesCounts: number
}
type Friends = {
    id: number,
    name: string,
}
type OnChange = (store: StoreType) => void
type AddPost = (postMessage: string) => void
type ChangeNewText = (newText: string) => void
type SiteBarFriendsType = {
    friends: Friends[];
}
type StateTypeProfilePage = {
    myPosts: MyPostsDataTypes[];
    valueNewPost: string

}
type StateTypeMessagesPage = {
    dialogs: DialogsDataTypes[];
    messages: MessagesDataTypes[];
}
type StateType = {
    profilePage: StateTypeProfilePage
    dialogsPage: StateTypeMessagesPage
    siteBar: SiteBarFriendsType
}
export type StoreType = {
    stateData: StateType
    onChange: OnChange
    addPost: AddPost
    changeNewText: ChangeNewText
    dispatch: (action: AddPostActionType | ChangeNewAddPostActionType) => void
}
type AddPostActionType = {
    type: 'ADD-POST'
    newPost: string
}
type ChangeNewAddPostActionType = {
    type: 'CHANGE-NEW-TEXT'
    newText: string
}

export let store = {
    stateData: {
        siteBar: {
            friends: [
                { id: 1, name: 'Denis' },
                { id: 1, name: 'Sasha' },
                { id: 1, name: 'Olya' }
            ]
        },

        profilePage: {
            myPosts: [
                { id: 1, message: 'Hello,  how are you?', likesCounts: 20 },
                { id: 2, message: 'hi, i am fine', likesCounts: 30 },
            ],
            valueNewPost: 'bla bla'
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Denis' },
                { id: 2, name: 'Alex' },
                { id: 3, name: 'Katya' },
                { id: 4, name: 'Anya' },
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'Hi, how are you?' },
                { id: 3, message: 'I am fine' },
                { id: 4, message: 'I is okey' },
            ],
        }
    },
    onChange(store: StoreType) {
        console.log('bla bla')
    },
    dispatch(action: AddPostActionType | ChangeNewAddPostActionType, store: StoreType) {
        if (action.type === 'ADD-POST') {
            let newPost: MyPostsDataTypes = {
                id: 5,
                message: this.stateData.profilePage.valueNewPost,
                likesCounts: 0,
            }
            this.stateData.profilePage.myPosts.push(newPost)
            this.onChange(store)
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this.stateData.profilePage.valueNewPost = action.newText
            this.onChange(store)
        }
    }
}

export const subscribe = (callback: (store: StoreType) => void) => {
    store.onChange = callback
}

export default store