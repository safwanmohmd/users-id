import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({users}) => {
  return (
    <div  className='bg-white rounded shadow-md max-w-lg p-6 mx-auto w-[300px]'>
      <h1>{users.name}</h1>
      <p>{users.email}</p>
      <p>{users.phone}</p>
      <p>{users.website}</p>
      <p>{users.company.name}</p>

      <Link to={`/${users.id}`}> <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       view
        
    </button>
     </Link>
    </div>
  )
}

export default Card