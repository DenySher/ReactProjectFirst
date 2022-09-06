import profileReducer from "./profileReducer"

type DialogsDataTypes = {
    id: number,
    name: string,
}
export type MessagesDataTypes = {
    id: number,
    message: string,
}
export type MyPostsDataTypes = {
    id: number,
    message: string,
    likesCounts: number
}
type Friends = {
    id: number,
    name: string,
}
type OnChange = (store: StoreType) => void
type SiteBarFriendsType = {
    friends: Friends[];
}
export type StateTypeProfilePage = {
    myPosts: MyPostsDataTypes[];
    valueNewPost: string
}
type StateTypeMessagesPage = {
    newMassageText: string
    dialogs: DialogsDataTypes[];
    messages: MessagesDataTypes[];
}
export type StateType = {
    profilePage: StateTypeProfilePage
    dialogsPage: StateTypeMessagesPage
    siteBar: SiteBarFriendsType
}
export type StoreType = {
    stateData: StateType
    _onChange: OnChange
    subscribe: (callback: () => void) => void
    dispatch: (action:  ActionAllType) => void
}

type AddPostActionType = ReturnType<typeof addPostAC> // автоматически типизируем используя creator
type ChangeNewAddPostActionType = ReturnType<typeof changeNewTextAC>
type ChangeNewTextMassageActionType = ReturnType<typeof changeNewTextmassageBodyAC>
type AddNewTextMassageActionType = ReturnType<typeof addNewTextMessageAC>
export type ActionAllType =  AddPostActionType | ChangeNewAddPostActionType | ChangeNewTextMassageActionType | AddNewTextMassageActionType

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
            valueNewPost: ''
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
            newMassageText: ''
        },
    },
    _onChange() {

    },
    getState() {
        return this.stateData
    },
    subscribe(callback: () => void) {
        this._onChange = callback
    },
    dispatch(action: ActionAllType) {

        // this.stateData.profilePage = profileReducer(this.stateData.profilePage, action: 'ADD-POST')
        // this._onChange()

        if (action.type === 'ADD-POST') {
            let newPost: MyPostsDataTypes = {
                id: 5,
                message: this.stateData.profilePage.valueNewPost,
                likesCounts: 0,
            }
            this.stateData.profilePage.myPosts.push(newPost)
            this._onChange()
        } else if (action.type === 'CHANGE-NEW-TEXT') {
            this.stateData.profilePage.valueNewPost = action.newText
            this._onChange()
        } else if (action.type === 'UPDATE-NEW-MESSAGE') {
            this.stateData.dialogsPage.newMassageText = action.message
            this._onChange()
        } else if (action.type === 'ADD-NEW-TEXT-MESSAGE') {
            let newMessage: MessagesDataTypes = {
                id: 5,
                message: this.stateData.dialogsPage.newMassageText,
            }
            this.stateData.dialogsPage.messages.push(newMessage)
            this._onChange()
        }
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
export const changeNewTextmassageBodyAC = (message: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE',
        message: message
    } as const
}
export const addNewTextMessageAC = (body: string) => {
    return {
        type: 'ADD-NEW-TEXT-MESSAGE',
        message: body
    } as const
}


export default store