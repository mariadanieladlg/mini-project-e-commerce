import { Link } from "react-router-dom";

function ProfilePage() {
  const userProfile = {
    image: "https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg",
    name: "Joshua Danielson ",
    email: "Joshua Danielson@example.com",
  };

  return (
    <div>
      <h1>User Page</h1>
      <div>
        {userProfile && (
          <>
            <img
              src={userProfile.image}
              alt="profile-photo"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "100%",
                  objectFit: "cover",
                  border: "2px  #d1d5db"
                  }}
            />
            <h1 style={{fontSize:"20px"}}>
              {userProfile.name}
            </h1>

            <div>
              <p>
                <strong>Email:</strong> {userProfile.email}
              </p>
            </div>
          </>
        )}

        {/* Back button */}        
       <Link to="/" className="button">
        Back
      </Link>
        
      </div>
    </div>
  );
}

export default ProfilePage;