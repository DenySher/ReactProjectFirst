
import style from './DialogsStyle.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers'
import MessagesUsers from './MessagesUsers/MessagesUsers'

import { StateType } from '../../components/Redux/state'

type DataTypeProps = {
    dialogs: StateType
}

const Dialogs = (props: DataTypeProps) => {

    const dialogsUsersItems = props.dialogs.dialogsPage.dialogs.map(e => <DialogsUsers id={e.id} name={e.name} />) //сокращенная запись

    const messagesUsersItems = props.dialogs.dialogsPage.messages.map((e) => {
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


