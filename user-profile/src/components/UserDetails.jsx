import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const UserDetails = () => {
  const{ID} = useParams()

  const[usersInDetails,setUsersInDetails] = useState([])
       const[loading,setLoading] = useState(true)
       const[UserDetail, setUserDetail] = useState({})
  
      useEffect(() => {
  
       async function fetchAPI() {
     const response =  await axios.get('https://jsonplaceholder.typicode.com/users')
     setUsersInDetails(response.data)
    //  console.log(users)
     setLoading(false)
     
    //  setUserDetail(users.find((u=> u.id == ID)))
    //  console.log(UserDetail);

    //  console.log(users);
       }
       fetchAPI()
  
      },[])

      useEffect(() => {
        setUserDetail(usersInDetails.find((u=> u.id == ID)))
     console.log(UserDetail);
     console.log("user details", UserDetail);


      },[usersInDetails, setUserDetail])


  
      if(loading) return <div className="spinner-grow text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>


  return (
    <div>
      {/* {UserDetail.name} */}
      Details
      
    </div>
  )
}

export default UserDetails
