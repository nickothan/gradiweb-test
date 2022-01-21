import { useState, useEffect } from "react"

export default function App() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(null)
  const [item, setItem] = useState(null)

  useEffect(() => {
    fetch(
      "https://graditest-store.myshopify.com/products/free-trainer-3-mmw.js"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true)
          setItem(result)
        },
        (error) => {
          setIsLoaded(true)
          setError(error)
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>
  } else if (!isLoaded) {
    return <div>Loading...</div>
  } else {
    return <div> Data cargada{console.log(item)}</div>
  }
}
