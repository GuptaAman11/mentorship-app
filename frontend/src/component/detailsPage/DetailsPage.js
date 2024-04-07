import React, { useEffect, useState } from "react";
import "./detailpage.css";
import Multiselect from "multiselect-react-dropdown";
import {
  useLoggedInUser,
  useUpdateUserProfile,
} from "../../hooks/menteesHooks";
import {useNavigate} from  'react-router';

const DetailsPage = () => {
  const { updateProfile } = useUpdateUserProfile();
  const { loggedUser, loggedInUser } = useLoggedInUser();
  useEffect(() => {
    loggedInUser();
  }, []);
const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // name: '',
    skillLevel: loggedUser.skillLevel,
    // email: '',
    qualification: loggedUser.qualification,
    address: loggedUser.address,
    gender: loggedUser.gender,
    goal: loggedUser.goal,
    bio: loggedUser.bio,
    additionalInformation: "",
    phoneNumber: loggedUser.phoneNumber,
    experience: loggedUser.experience,
  });
  console.log(formData);
  const [image, setImage] = useState();
  const options = ["hindi", "english", "marathi"];
  const [selectedLanguages, setSelectedLanguages] = useState([]);

  const getValues = () => {
    const inputText = document.getElementById("textInput").value;
    const values = inputText.split(",").map((value) => value.trim());
    setAreaOfInterest(values);
  };
  const [areaOfInterest, setAreaOfInterest] = useState([]);
  const availabilityTime = ["weekend", "weekday", "morning", "evening"];
  const [availability, setAvailability] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(
      formData,
      availability,
      areaOfInterest,
      selectedLanguages,
      image
    );
  };
//defining the skip function
const handleOnSubmit = () =>{
  console.log(loggedUser.typeOfUser);
  if (loggedUser.typeOfUser === "mentor") {
    navigate(`/dashboard/${loggedUser._id}`);
  }
  if (loggedUser.typeOfUser === "mentee") {
    navigate("/profile");
  }

}


  return (
    <div className="a-container">
      <div className="sub-container">
        <div className="left-profile-part">
          <div className="profile-image"></div>

          {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/236886/profile/profile-512.jpg?1501731600" alt=""/> */}
          <div id="name" className="name">
            Mentor WebApp
          </div>
        </div>

        <div className="right-profile-part">
          <h1 className="text-center">Profile-Form</h1>
          <form className="profile-form" onSubmit={handleSubmit}>
            {/* <label>
       Full Name:
        <input type="text" name="name" value={loggedUser.name} onChange={handleChange} className="input-field" />
      </label>

      <label>
        Email:
        <input type="email" name="email" value={loggedUser.email} onChange={handleChange} className="input-field" />
      </label> */}

            <label>
              Phone Number
              <input
                pattern="[0-9]{10}"
                type="tel"
                name="phoneNumber"
                className="input-field"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Gender:
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </label>

            <label>
              Address
              <input
                type="text"
                name="address"
                className="input-field"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Language :
              <Multiselect
                isObject={false}
                options={options}
                selectedValues={selectedLanguages}
                value={formData.language}
                onSelect={(selectedList) => {
                  setSelectedLanguages([
                    ...selectedLanguages,
                    selectedList[selectedList.length - 1],
                  ]);
                }}
                onRemove={(selectedList) => {
                  setSelectedLanguages(
                    selectedLanguages.filter(
                      (lang) => lang !== selectedList[selectedList.length - 1]
                    )
                  );
                }}
                showArrow
                className="input-field"
              />
            </label>

            <label>
              Qualification:
              <select
                name="qualification"
                value={formData.qualification}
                onChange={handleChange}
                className="input-field"
              >
                <option value="">Select Qualification</option>
                <option value="Graduagate">Graduagate</option>
                <option value="UnderGraduate">UnderGraduate</option>
                <option value="Master">Master</option>
                <option value="other">other</option>
              </select>
            </label>

            {loggedUser.typeOfUser == "mentor" ? (
              <label>
                Experience:
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">level of experience</option>
                  <option value="2 to 4 years">2 to 4 years</option>
                  <option value="5 to 8 years">5 to 8 years</option>
                  <option value="9 to 14 years">9 to 14 years</option>
                  <option value="15 years above">15 years above</option>
                </select>
              </label>
            ) : (
              <label>
                Level of Knowledge:
                <select
                  name="skillLevel"
                  value={formData.skillLevel}
                  onChange={handleChange}
                  className="input-field"
                >
                  <option value="">Grade Your Knowledge</option>
                  <option value="Beginner">Beginner</option>
                  <option value="intermiadte">intermiadte</option>
                  <option value="Advanced">Advanced</option>
                </select>
              </label>
            )}

            <label>
              Area OF Interest :
              <input
                type="text"
                placeholder="enter interested field seeperated by commas"
                onChange={getValues}
                value={formData.areaOfInterest}
                id="textInput"
                className="input-field"
                required
              />
            </label>

            <label>
              Goal:
              <textarea
                name="goal"
                value={formData.goal}
                onChange={handleChange}
                className="textarea-field"
                required
              />
            </label>

            <label>
              Bio:
              <textarea
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                className="textarea-field"
                required
              />
            </label>

            <label>
              Availability :
              <Multiselect
                isObject={false}
                options={availabilityTime}
                selectedValues={availability}
                onSelect={(selectedList) => {
                  setAvailability([
                    ...availability,
                    selectedList[selectedList.length - 1],
                  ]);
                }}
                onRemove={(selectedList) => {
                  setAvailability(
                    availability.filter(
                      (lang) => lang !== selectedList[selectedList.length - 1]
                    )
                  );
                }}
                showArrow
                className="input-field"
              />
            </label>

            <label>
              <label>
                Additional Information:
                <textarea
                  name="additionalInformation"
                  value={formData.additionalInformation}
                  onChange={handleChange}
                  className="textarea-field"
                  required
                />
              </label>
              Profile Image :
              <input
                type="file"
                name="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="input-field"
                required
              />
            </label>

            <button type="submit" className="submit-button">
              Submit
            </button>
            <label>Skip if you already filled details</label>
            <button type="submit" className="submit-button" onClick={handleOnSubmit}>
              Skip
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
