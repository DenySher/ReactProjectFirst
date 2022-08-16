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

type SiteBarFriendsType = {
    friends: Friends[];
}

type StateTypeProfilePage = {
    myPosts: MyPostsDataTypes[];
}
type StateTypeMessagesPage = {
    dialogs: DialogsDataTypes[];
    messages: MessagesDataTypes[];
}

export type StateType = {
    profilePage: StateTypeProfilePage
    dialogsPage: StateTypeMessagesPage
    siteBar: SiteBarFriendsType
   
}

const stateData = {
    siteBar: {
        friends: [
            {id: 1, name: 'Denis'},
            {id: 1, name: 'Sasha'},
            {id: 1, name: 'Olya'}
        ]
    },
    profilePage: {
        myPosts: [
            { id: 1, message: 'Hello,  how are you?', likesCounts: 20 },
            { id: 2, message: 'hi, i am fine', likesCounts: 30 },
        ]
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
    },
}

export default stateData