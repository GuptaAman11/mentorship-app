import React, { useEffect } from 'react'
import { useGetSessionBySessionId } from '../../hooks/session'

const SessionView = () => {
    const { sessionData , getSessionBySessionId } = useGetSessionBySessionId();
    useEffect(() =>{
        getSessionBySessionId()
     },[])
     console.log(sessionData)
  return (
    <div><div>

    <div className="blog-post bg-white  shadow-md rounded-lg flex items-center space-x-10 my-10 p-10 relative ">
        <div className="w-96 h-72 relative">
            <img src="" alt="Blog Post Image" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute w-full h-full top-0 left-0 shadow-md bg-opacity-50 rounded-lg"></div>
        </div>
        <div className="flex-1">
            <div className="mb-5">
                <span className="block text-gray-700 text-sm font-semibold mb-1"></span>
                <span className="block text-gray-700 text-sm font-semibold">gdfdfg</span>
            </div>
            <h1 className="text-2xl font-bold text-blue-500 mb-3 uppercase">dvs</h1>
            <p className="text-sm text-gray-600 mb-5">lorem100</p>
        </div>
        
        <div className="absolute bottom-4 right-4  ">
        <button  className='bg-blue-500 text-white px-11 py-2 rounded-lg mr-1'>delete</button>

          <button className="bg-blue-500 text-white px-11 py-2 rounded-lg mr-1" >update</button>

            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg mr-1">Like</button>
            <button className="bg-gray-700 text-white px-5 py-2 rounded-lg mr-1">Comment</button>
        </div>
    </div>

    <div className="w-1/2"></div> 

    </div>
        {/* comment form code is here  */}
    
    </div>
  )
}

export default SessionView