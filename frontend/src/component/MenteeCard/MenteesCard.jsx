import React, { useEffect, useState } from "react";
import "./menteecard.css";
import { useGetAllUser } from "../../hooks/menteesHooks";
import { Link, useNavigate } from "react-router-dom";

const MenteesCard = () => {
  const { getAllUser, allUser } = useGetAllUser();
  useEffect(() => {
    getAllUser();
  }, []);
  const navigate = useNavigate();
  const mentor = allUser.filter((user) => user.typeOfUser === "mentor");
  console.log(mentor);

  const mentees = allUser.filter((user) => user.typeOfUser === "mentees");
  console.log(mentees);

  return (
    <div className="menteecard-main-div">
      {allUser.map((user, index) => (
        <div key={index} className="meenteecard-container">
          <div className="image">
            <img src={`http://localhost:8000/${user.image}`} alt="" />
          </div>
          <div className="mentee-name">{user.name}</div>
          <div className="bio">software developer | data analyst</div>
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
    </div>

  );
};

export default MenteesCard;
