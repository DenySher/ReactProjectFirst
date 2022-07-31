import { Link } from 'react-router-dom'
import style from './DialogsStyle.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers'
import MessagesUsers from './MessagesUsers/MessagesUsers'


const Dialogs = () => {
    return (
        <div className={style.wraper}>
            <ul className={style.dialogsUsers}>
                <DialogsUsers name={'Denis'} id={'1'} />
                <DialogsUsers name={'Alex'} id={'2'} />
                <DialogsUsers name={'Katya'} id={'3'} />
                <DialogsUsers name={'Anya'} id={'4'} />
            </ul>
            <ul className={style.messagesUsers}>
                <MessagesUsers text={'Hi'} />
                <MessagesUsers text={'Hi, how are you?'} />
                <MessagesUsers text={'I am fine'} />
            </ul>
        </div>
    )
}
export default Dialogs


