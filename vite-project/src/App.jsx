import { useState, useEffect } from 'react'

function App() {
  const [joke, setJoke] = useState('')

  useEffect(() => {
    const url = 'https://icanhazdadjoke.com/'
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          headers: {
            'Accept': 'application/json'
          }
        });
        // needed to add headers otherwise it gave me SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
        const data = await response.json()
        console.log(data)
        setJoke(data.joke)
      } catch (e) {
        console.log("error", e)   
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <p>joke: {joke}</p>
    </div>
  )
}

export default App
