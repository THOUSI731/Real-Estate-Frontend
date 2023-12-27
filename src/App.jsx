import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import {theme} from './Theme/muiTheme'
import HomePage from './Pages/HomePage'
import PropertyDetails from './Pages/PropertyDetails'
import UnitDetailPage from './Pages/UnitDetails'
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
function App() {

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/login" element={<HomePage />} />
            <Route path="/register" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/property/:id" element={<PropertyDetails />} />
            <Route path="/property/:id/unit/:unit_id" element={<UnitDetailPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </LocalizationProvider>
    </>
  );
}

export default App
