import { useState , useEffect } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import axios from 'axios'
import Puppy from './puppies'



function App() {
  const [puppies, setNewPuppies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    const fetchPuppies = async () => {
      const {data} = await axios.get('https://fsa-puppy-bowl.herokuapp.com/api/2310/players')
      setNewPuppies(data.data)
      console.log(data.data)
    }
    fetchPuppies()
  }, [])


  return (
    <div>
      <h1>Puppy Bowl</h1>
      <ul>
        {
        puppies.map((puppy) => {
          return(
            <li key={puppy.id}>
              <Link to={`/players/${puppy.id}`}>
              {puppy.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <Routes>
        <Route path='/players/:id' element={<Puppy puppies={puppies} />}/>
      </Routes>
    </div>
  )
}

export default App
