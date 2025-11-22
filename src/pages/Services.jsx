import React, { useEffect, useState } from 'react';

const Services = () => {

    const [services, setServices] = useState([]);
    
      useEffect(() => {
        fetch('/services.json')   
          .then(res => res.json())
          .then(data => setServices(data))
          .catch(err => console.log(err));
      }, []);
    
  return (
    <div className='mt-8 px-[145px]'>
        <div className='grid grid-cols-3 mt-12 gap-6'>
        {
        services.map(service =>
          <div className="card bg-base-100 w-80 shadow-sm mt-3">
  <figure>
    <img className='w-full h-[300px] object-cover'
      src={service?.image}
      alt="Pet" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{service?.serviceName}</h2>
    <div className='flex justify-between'>
      <p>price :{service?.price}</p>
      <p>Ratting:{service?.rating}</p>
    </div>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">view Details</button>
    </div>
  </div>
</div>
         )
      }
      
      </div>
    </div>
  );
};

export default Services;