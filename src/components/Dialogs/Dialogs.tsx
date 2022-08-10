import style from './DialogsStyle.module.css'
import DialogsUsers from './DialogsUsers/DialogsUsers'
import MessagesUsers from './MessagesUsers/MessagesUsers'

const dialogsData = [
    { id: 1, name: 'Denis' },
    { id: 2, name: 'Alex' },
    { id: 3, name: 'Katya' },
    { id: 4, name: 'Anya' },
]

const messagesData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'Hi, how are you?' },
    { id: 3, message: 'I am fine' },
    { id: 4, message: 'I is okey' },
]

const Dialogs = () => {
    return (
        <div className={style.wraper}>
            <ul className={style.dialogsUsers}>
                <DialogsUsers name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogsUsers name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogsUsers name={dialogsData[2].name} id={dialogsData[2].id}/>
                <DialogsUsers name={dialogsData[3].name} id={dialogsData[3].id}/>
            </ul>
            <ul className={style.messagesUsers}>
                <MessagesUsers message={messagesData[0].message} id={messagesData[0].id}  />
                <MessagesUsers message={messagesData[1].message} id={messagesData[1].id} />
                <MessagesUsers message={messagesData[2].message} id={messagesData[2].id} />
                <MessagesUsers message={messagesData[3].message} id={messagesData[3].id} />
            </ul>
        </div>
    )
}

export default Dialogs


