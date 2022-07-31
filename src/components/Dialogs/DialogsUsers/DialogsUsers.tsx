import { Link } from "react-router-dom"

type DialogsUsersPropsType = {
    name: string,
    id: string
}

const DialogsUsers = (props: DialogsUsersPropsType) => {
    
    return (
        <>
            <li><Link to={'/dialogs/' + props.id}>{props.name}</Link></li>
        </>
    )
}

export default DialogsUsers