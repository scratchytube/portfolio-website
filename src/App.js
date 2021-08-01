import React, { useState } from 'react'
import { Navbar, Sidebar, Landing, Portfolio, About, Contact } from './components'


function App() {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="App">
      <Navbar handleToggle={handleToggle} />
      <Sidebar isOpen={isOpen} handleToggle={handleToggle} />
      <Landing />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
