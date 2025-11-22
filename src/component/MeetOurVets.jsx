import React from 'react';
import d1 from '../assets/doctor-1.jpg'
import d2 from '../assets/doctor-2.avif'
import d3 from '../assets/doctor-3.webp'
const MeetOurVets = () => {
  return (
    <div className='mt-8 px-[145px]'>
        <div>
        <h3 className='font-bold text-3xl text-center'>Meet Our Expert Vets
</h3>
      </div>
      <div className='grid grid-cols-3 mt-12 gap-6'>
        <div className="card bg-base-100 w-80 shadow-sm">
  <figure>
    <img className='w-full h-[300px] object-cover'
      src={d1}
      alt="Doctor" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Dr.Alicia Snow</h2>
    <h4>Winter Dermatology & Paw Care</h4>
    <p className='text-gray-500'>8 Years Exp.</p>

    <div className="card-actions justify-center">
      <button className="btn btn-primary">Book Appointment</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-80 shadow-sm">
  <figure>
    <img className='w-full h-[300px] object-cover'
      src={d2}
      alt="Doctor" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Dr. frost</h2>
   <h4>Cold Weather Nutrition</h4>
    <p className='text-gray-500'>6 Years Exp.</p>
    <div className="card-actions justify-center">
      <button className="btn btn-primary">Book Appointment</button>
    </div>
  </div>
</div>
<div className="card bg-base-100 w-80 shadow-sm">
  <figure>
    <img className='w-full h-[300px] object-cover'
      src={d3}
      alt="Doctor" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Dr.Scarlett Pine</h2>
    <h4>pet Allergies & Skin</h4>
    <p className='text-gray-500'>5 Years Exp.</p>
    <div className="card-actions justify-center ">
      <button className="btn btn-primary ">Book Appointment</button>
    </div>
  </div>
</div>
      </div>
</div>
  );
};

export default MeetOurVets;