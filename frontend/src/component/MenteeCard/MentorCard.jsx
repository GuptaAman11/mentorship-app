import React, { useEffect } from 'react';
import   './menteecard.css';
import { useGetAllUser } from '../../hooks/menteesHooks';
import { Link, useNavigate } from "react-router-dom";


const MentorCard = () => {
  const {getAllUser ,allUser} = useGetAllUser()
  useEffect(()=>{
    getAllUser()
  },[])

  const navigate = useNavigate()

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

          <div className="m-qualification">Qualification : <span>{user.qualification}</span></div>

          <div className="m-interest">
            <div className="m-interest-1">Interest :</div>
            <div className="m-interest-2">{user.areaOfInterest}</div>
          </div>
          <hr />


          <div className="m-bio"> 
            <div className="m-goal-1">Goal : </div>
            <div className="m-goal-2">{user.goal}</div>
          </div>
          <div className="message-button">
            <button
              onClick={() => {
                navigate(`/messages/${user._id}`);
              }}
            >
              message
            </button>
          </div>
        </div>
      ))}
    </div>)
   }
   </>
  );
};

export default MentorCard;
