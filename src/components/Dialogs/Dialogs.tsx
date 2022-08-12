import { dialogs, messages } from '../..' // импортирую данные из index.tsx 
import style from './DialogsStyle.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers'
import MessagesUsers from './MessagesUsers/MessagesUsers'

const Dialogs = () => {

    const dialogsUsersItems = dialogs.map(e => <DialogsUsers name={e.name} id={e.id} />) //сокращенная запись

    const messagesUsersItems = messages.map((e) => {
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


