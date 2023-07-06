import './Box.scss'
import Message from '../Message/Message'


const Box = ({image, name, action, post, time, group, message, unread, picture}) => {
  return (
    <div className={`box-container ${unread ? 'unread' : ''}`}>
        <div className='box'>
            <img src={image} alt="" />
            <div>
                <div className='inner'>
                    <div>
                    <p><span className='name'>{name}</span> {action} <span className='post'>{post}</span> <span className='group'>{group}</span> {unread && <span className='status'></span>}</p>
                    <p>{time}</p>  
                    </div>
                    {picture && <img src={picture} alt="" />}
                </div>
                
                <Message message={message} />
            </div>
        </div> 
        
    </div>
  )
}

export default Box
