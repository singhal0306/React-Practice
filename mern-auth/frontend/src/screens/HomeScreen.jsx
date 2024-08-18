import Home from '../components/Home'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
const HomeScreen = () => {
  const userInfo = useSelector(state => state.auth.userInfo)

  return (
    <Home />
  )
}

export default HomeScreen