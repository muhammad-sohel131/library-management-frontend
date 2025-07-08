import { Outlet } from 'react-router'
import './App.css'
import Navigation from './components/Navigation'
import { Toaster } from 'sonner'

function App() {
  return (
   <>
      <Navigation />
      <Outlet />
      <Toaster />
   </>
  )
}

export default App
