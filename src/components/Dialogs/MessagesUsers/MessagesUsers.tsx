
type MessagesUsersPropsType = {
    text: string,
}

const MessagesUsers = (props: MessagesUsersPropsType) => {
    
    return (
        <>
            <li>{props.text}</li>
        </>
    )
}

export default MessagesUsers