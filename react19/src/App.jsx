import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Button from './components/Button.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (<>
      <h1>counter {count} </h1>
      <Button onClick={()=>setCount(count+1)}>Increment+</Button>
      <Button onClick={()=>setCount(count-1)}>Decrement-</Button>
  </>
    

  )
}

export default App
