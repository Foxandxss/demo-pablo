import { ReactElement, useEffect, useState } from 'react'
import './App.css'

interface Cat {
  _id: string
  name: string
  age: number
  breed: string
}

function App(): ReactElement {
  const [cats, setCats] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/cats')
      .then((res) => res.json())
      .then((data) => setCats(data))
  }, []
  )

  return (
    <>
      {cats.map((cat: Cat) => (
        <div key={cat._id}>
          <div>Nombre: {cat.name}</div>
          <div>Edad: {cat.age}</div>
          <div>Raza: {cat.breed}</div>
        </div>
      ))}
    </>
  )
}

export default App
