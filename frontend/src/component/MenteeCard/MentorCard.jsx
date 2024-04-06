import React, { useEffect } from 'react';
import   './menteecard.css';
import { useGetAllUser } from '../../hooks/menteesHooks';

const MentorCard = () => {
  const {getAllUser ,allUser} = useGetAllUser()
  useEffect(()=>{
    getAllUser()
  },[])


  const mentor  = allUser.filter(user => user.typeOfUser==='mentor')
  console.log(mentor)


  // }
  return (
   <>
   {
    mentor.length===0 ?(<div><h1>no mentor found</h1></div>) : (<div className='menteecard-main-div'>
    { mentor.map((user ,index) =>(
       <div key={index} className="meenteecard-container">
     <div className="image">
       <img src={`http://localhost:8000/${user.image}`} alt="" />
     </div>
     <div className="mentee-name">{user.name}</div>
     <div className="bio">software developer | data analyst</div>
     <div className="message-button"><button>message</button></div>
   </div>
     ))}
  </div>)
   }
   </>
  );
};

export default MentorCard;
