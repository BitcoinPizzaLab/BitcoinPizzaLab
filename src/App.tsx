import { Box } from '@chakra-ui/react'
import { Header } from './components/Header'
import Index from './pages/Index'

function App() {
  return (
    <Box
      // bgColor="#F2CD5C"
      bgColor="#ffc803">
      <Box maxW="1400px" margin="auto" minH="100vh"
        color="#ef5f29"
        padding={['10px', '20px', '80px']}>
        <Header></Header>
        <Index></Index>
      </Box>
    </Box>
  )
}

export default App
