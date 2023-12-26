import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import {theme} from './Theme/muiTheme'
import HomePage from './Pages/HomePage'
import PropertyDetails from './Pages/PropertyDetails'
import PropertyFormComp from './components/Property/PropertyFormComp'
function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <Router>
      <Routes>
        <Route path='/login' element={<HomePage/>} />
        <Route path='/register' element={<HomePage/>} />
        <Route path='/' element={<HomePage/>} />
        <Route path='/property/:id' element={<PropertyDetails/>} />
      </Routes>
    </Router>
    </ThemeProvider>
    </>
  )
}

export default App
