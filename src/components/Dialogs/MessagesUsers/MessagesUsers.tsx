
type MessagesUsersPropsType = {
    id: number
    message: string,
}

const MessagesUsers = (props: MessagesUsersPropsType) => {
    
    return (
        <>
            <li>{props.message}</li>
        </>
    )
}

export default MessagesUsers