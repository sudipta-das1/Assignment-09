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
        </div>
      

  );
};

export default ServiceDetalis;
