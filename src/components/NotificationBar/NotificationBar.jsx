import './Notification.scss'

const NotificationBar = ({toggleStatus}) => {
  return (
    <div className='bar'>
      <div className="title">
        <h1>Notifications</h1>
        <div className='notif'>3</div>
      </div>
      <div className='read' onClick={toggleStatus}><p>Mark all as read</p></div>
    </div>
  )
}

export default NotificationBar
