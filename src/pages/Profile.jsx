import React, { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import auth from '../firebase/firebase.config';

const Profile = () => {
    const {setUser,user} =useContext(AuthContext)
    // console.log(user);
    const[isOpen, setIsOpen] = useState(false)
    const handleOpenForm =()=>{
        setIsOpen(!isOpen)
        
        
    }
    const handleUpdate =(e)=>{
      e.preventDefault()
      const name = e.target.name.value;
      const photourl= e.target.photourl.value;

      updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photourl
              })
              .then(() => {
                setUser({...user, displayName: name, photoURL:photourl})
                
              })
              .catch((error) => {
                console.log(error);
              });
      
    }
    
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className="avatar">
  <div className="w-24 rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
<p>{user?.displayName}</p>
<p>{user?.email}</p>
<button onClick={handleOpenForm} className='btn mt-2'>Update Profile</button>
{
    isOpen &&(
        <form onSubmit={handleUpdate}  className="form">
          <label className="label">Name</label>

          <input name='name' type="text" className="input" placeholder="Your Name" />
          <label className="label">Photo URL</label>
          <br/>
          <input name='photourl' type="text" className="input" placeholder="Your url" />
          
          <button className="btn btn-neutral w-full mt-4">update</button>
        </form>
    )
}

    </div>
  );
};

export default Profile;