import React from 'react'
import Card from '../componants/Card'
import { useState,useEffect } from 'react'
import axios from 'axios'
const Home = () => {
  const [users,setUsers] = useState(null)
 
  const getUser = async ()=>{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
    setUsers(response.data)
    console.log(response.data);
   
  }
useEffect(()=>{
  getUser()
},[])

  if (!users) {
    return <div className='text-center mt-10'>Loading...</div>;
  }

  return (
     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5'>
     {users.map((usr)=>{
        return <Card key={usr.id} users={usr}/>
     })}
      
      

    </div>
  )
}

export default Home