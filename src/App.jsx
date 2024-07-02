import './App.css'
import LandingPage from './pages/LandingPage'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
     <ToastContainer autoClose={1000}/>
     <LandingPage/>
    </>
  )
}

export default App
