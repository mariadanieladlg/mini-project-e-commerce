import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);

  const defaultProfile = {
    image:
      "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
    name: "Joshua Danielson",
    email: "JoshuaDanielson@example.com",
  };

  const [profile, setProfile] = useState(() => {
    const stored = localStorage.getItem("userProfile");
    return stored ? JSON.parse(stored) : defaultProfile;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    console.log("Profile saved to localStorage:", profile);
    setIsEditing(false);
  };

  return (
    <div className="profile-container">
      <h1>User Page</h1>

      <div className="profile-card">
        <img src={profile.image} alt="profile" className="profile-img" />

        {isEditing ? (
          <div className="edit-fields">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Image URL:
              <input
                type="text"
                name="image"
                value={profile.image}
                onChange={handleChange}
              />
            </label>
            <button onClick={handleSave} className="profile-btn">
              Save
            </button>
          </div>
        ) : (
          <>
            <h2>{profile.name}</h2>
            <p>
              <strong>Email:</strong> {profile.email}
            </p>
            <button onClick={() => setIsEditing(true)} className="profile-btn">
              Edit Profile
            </button>
          </>
        )}

        <button onClick={() => navigate(-1)} className="profile-btn">
          Back
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
