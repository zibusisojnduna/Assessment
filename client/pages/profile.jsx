import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserProfile, updateUserProfile, logout } from '../features/profileSlice';
import "../src/assets/w3.css"

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.profile);

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
  });

  
  useEffect(() => {
    if (!user) {
      dispatch(fetchUserProfile(1));  
    }
  }, [dispatch, user]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile(formData));
  };

  
  const handleLogout = () => {
    dispatch(logout());
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div>
      <h2>Profile</h2>
      {user ? (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              className='w3-input'
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

      
          <button type="submit">Update Profile</button>
        </form>
      ) : (
        <p>No profile data available</p>
      )}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
