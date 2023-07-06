import './Message.scss'

const Message = ({message}) => {
  return (
    <div className={message ? 'message':'' }>
     {message}
    </div>
  )
}

export default Message
