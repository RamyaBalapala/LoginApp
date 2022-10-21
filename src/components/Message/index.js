import './index.css'

const Message = props => {
  const {isLoggedIn} = props

  const headingText = isLoggedIn ? 'Welcome User' : 'Please Login'

  return <h1 className="main-heading">{headingText}</h1>
}

export default Message
