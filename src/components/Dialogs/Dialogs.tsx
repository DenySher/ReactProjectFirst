import style from './DialogsStyle.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers'
import MessagesUsers from './MessagesUsers/MessagesUsers'
import { StoreType } from '../../components/Redux/state'
import TextArea from 'antd/lib/input/TextArea'
import { ChangeEvent } from 'react'

type StorePropsType = {
    store: StoreType
}

const Dialogs = (props: StorePropsType) => {

    const dialogsUsersItems = props.store.stateData.dialogsPage.dialogs.map(e => <DialogsUsers key={e.id} id={e.id} name={e.name} />)

    const messagesUsersItems = props.store.stateData.dialogsPage.messages.map((e) => {
        return (
            <MessagesUsers message={e.message} id={e.id} key={e.id++} />
        )
    })

    const changeNewTextmassage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.store.dispatch({ type: 'UPDATE-NEW-MESSAGE', message: e.currentTarget.value })
    }
    const addMessageOnClick = () => {
        props.store.dispatch({ type: 'ADD-NEW-TEXT-MESSAGE', message: props.store.stateData.dialogsPage.newMassageText })
        props.store.stateData.dialogsPage.newMassageText = ''
    }

    return (
        <div className={style.wraper}>
            <ul className={style.dialogsUsers}>
                {dialogsUsersItems}
            </ul>
            <ul className={style.messagesUsers}>
                {messagesUsersItems}
            </ul>
            <TextArea value={props.store.stateData.dialogsPage.newMassageText} onChange={changeNewTextmassage} />
            <button onClick={addMessageOnClick}>+</button>
        </div>
    )
}

export default Dialogs


