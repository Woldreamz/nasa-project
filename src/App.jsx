import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';

function App() {
  const [showModal, setShowModal] = useState(false)
  
  function handleToggleModal() {
    setShowModal(!showModal)
  }
  
  useEffect(() => {
    async function fetchAPIData() {
      const NASA_KEY = import.meta.VITE_NASA_API_KEY
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}`
    }
  }, [])


  return (
    <>
      <Main />
      {showModal && (
        <Sidebar handleToggleModal={handleToggleModal} />
      )}      
      <Footer handleToggleModal={handleToggleModal} />
    </>
  )
}

export default App
