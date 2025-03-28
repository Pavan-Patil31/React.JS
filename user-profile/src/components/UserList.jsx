import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const UserList = () => {
     const[users,setUsers] = useState([])
     const[loading,setLoading] = useState(true)

    useEffect(() => {

     async function fetchAPI() {
   const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
   setUsers(response.data)
   setLoading(false)
  //  console.log(users);
     }
     fetchAPI()

    },[])

    if(loading) return <div className="spinner-grow text-light" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
  return (
    <div>
      <ul>
        {users.map((u,index)=>(
            <li key={index}><Link to={`/user/${u.id}`}>{u.name}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default UserList
