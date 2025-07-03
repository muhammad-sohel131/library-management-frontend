import { Outlet } from 'react-router'
import './App.css'
import Navigation from './components/Navigation'

function App() {
  return (
   <>
      <Navigation />
      <Outlet />
   </>
  )
}

export default App
