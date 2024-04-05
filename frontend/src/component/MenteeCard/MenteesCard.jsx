import React, { useEffect } from 'react';
import   './menteecard.css';
import { useGetAllUser } from '../../hooks/menteesHooks';

const MenteesCard = () => {
  const {getAllUser ,allUser} = useGetAllUser()
  useEffect(()=>{
    getAllUser()
  },[])


  const mentor  = allUser.filter(user => user.typeOfUser==='mentor')
  console.log(mentor)

  const mentees  = allUser.filter(user => user.typeOfUser==='mentees')
  console.log(mentees)

  // }
  return (
   <div className='menteecard-main-div'>
     { allUser.map((user ,index) =>(
        <div key={index} className="meenteecard-container">
      <div className="image">
        <img src={`http://localhost:8000/${user.image}`} alt="" />
      </div>
      <div className="mentee-name">{user.name}</div>
      <div className="bio">software developer | data analyst</div>
      <div className="message-button"><button>message</button></div>
    </div>
      ))}
   </div>
  );
};

export default MenteesCard;
