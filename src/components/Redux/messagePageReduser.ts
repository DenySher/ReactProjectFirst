import { MessagesDataTypes, StoreType } from "./state"

type ChangeNewTextMassageActionType = ReturnType<typeof changeNewTextmassageBodyAC>
type AddNewTextMassageActionType = ReturnType<typeof addNewTextMessageAC>
type MessageAllType = ChangeNewTextMassageActionType | AddNewTextMassageActionType

const messagePageReduser = (state: StoreType, action: MessageAllType) => {
    switch (action.type) {
        case 'ADD-NEW-TEXT-MESSAGE':
            let newMessage: MessagesDataTypes = {
                id: 5,
                message: state.stateData.dialogsPage.newMassageText,
            }
            state.stateData.dialogsPage.messages.push(newMessage)
            return state
        case 'UPDATE-NEW-MESSAGE':
            state.stateData.dialogsPage.newMassageText = action.message
            return state
        default: return state
    }
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

export default messagePageReduser