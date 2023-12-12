import { useParams } from "react-router-dom"
import { useState } from "react"

const Puppy = ({puppies}) => {
    const params = useParams()
    const id = params.id*1
    const [name, setName] = useState('')
    
    const puppy = puppies.find((puppy) => {
        return id === puppy.id
    })
    if(!puppy){
        return null
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     const updatedpuppy = {
    //         id,
    //         name
    //     }
    //     updatePuppies(updatedpuppy)
    // }

    // return(
    //     <div>
    //         <h1>{puppy.name}</h1>
    //         <form onSubmit={handleSubmit}>
    //             <label>
    //                 Enter new name:
    //                 <input 
    //                     type="text"
    //                     value={name}
    //                     onChange={(event) => {setName(event.target.value)}} 
    //                 />
    //             </label>
    //             <button type="submit">Submit</button>
    //         </form>
    //         <button onClick={() => {deletePuppies(puppy)}}>X</button>
    //     </div>
    // )
}

export default Puppy