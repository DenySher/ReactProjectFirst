
import style from './DialogsStyle.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers'
import MessagesUsers from './MessagesUsers/MessagesUsers'

import { StoreType } from '../../components/Redux/state'

type StorePropsType = {
    store: StoreType
}

const Dialogs = (props: StorePropsType) => {

    const dialogsUsersItems = props.store.stateData.dialogsPage.dialogs.map(e => <DialogsUsers key={e.id} id={e.id} name={e.name} />) //сокращенная запись

    const messagesUsersItems = props.store.stateData.dialogsPage.messages.map((e) => {
        return (
        <MessagesUsers message={e.message} id={e.id} key={e.id++}/> // полная запись
        )
    })
       
    return (
        <div className={style.wraper}>
            <ul className={style.dialogsUsers}>
                {dialogsUsersItems}
            </ul>
            <ul className={style.messagesUsers}>
                {messagesUsersItems}
            </ul>
        </div>
    )
}

export default Dialogs


