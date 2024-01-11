import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userId } = useParams();
  console.log('User ID:', userId);
  return (
    <div>
      <h2>User Profile</h2>
      <p>User ID: {userId}</p>
      {/* Rest of the Profile component */}
    </div>
  );
};

export default Profile;
