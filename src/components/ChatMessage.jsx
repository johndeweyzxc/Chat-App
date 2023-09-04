
function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    let messageStyle = ''

    // Check if the user owns the message
    if (uid === props.auth.currentUser.uid) {
      messageStyle = 'sent'
    } else {
      messageStyle = 'received'
    }
  
    return (<>
      <div className={`message ${messageStyle}`}>
        <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
        <p>{text}</p>
      </div>
    </>)
  }

export default ChatMessage