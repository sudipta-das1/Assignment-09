import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetalis = () => {
  const { id } = useParams();
  const [services, setServices] = useState([]);
  
  useEffect(() => {
    fetch('/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err));
  }, []);

 const findResult =services.find(service=> service.serviceId ==id)
 console.log(findResult);
 

  return (
    <div className='flex flex-col items-center px-[145px]'>
      <img src={findResult?.image} alt=""/>
    
      <h2 className='font-bold'>Servicename:{findResult?.serviceName}</h2>
      <h3><span className='font-bold text-blue-500'>Description:</span>{findResult?.description}</h3>
      <p><span className='font-bold text-blue-500' >Rating:</span>{findResult?.rating}</p>
      <p><span className='font-bold text-blue-500' >Category:</span>{findResult?.category}</p>
      <p><span className='font-bold '>Price:</span>{findResult?.price}</p>

        </div>
      

  );
};

export default ServiceDetalis;
