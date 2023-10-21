import React, { useState } from 'react';
import Icon from './Icon';

const Reviews = () => {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here, e.g., send data to a server.

    // Reset the form fields after submission.
    setCustomer('');
    setAddress('');
    setPhone('');
  };

  return (
    <div className='h-fit bg-gray-200 flex gap-10 pt-5 pb-5 flex-col items-center' id='reviews'>
      <div className="text-center">
      <span className="font-capriola text-[30px] text-blue-900">Your  <span className='text-green-600'>Review</span></span>
        <p className="text-lg text-green-600">We value your feedback</p>
      </div>
      <div className='flex w-screen justify-evenly flex-wrap px-4 py-5 gap-10'>
      <div className="text-blue-900 text-[40px] gap-0 font-capriola h-[100%] flex flex-col justify-between items-center "
        data-aos="zoom-in-up">
          <span>
            We are always happy to<br/>get your feedback
          </span>
          <Icon/>
          
      </div>
        
      <form onSubmit={handleSubmit} data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000" className="bg-white p-6 rounded shadow-md w-80 max-w-full">
        <div className="mb-4">
          <label htmlFor="customer" className="block text-sm font-medium text-gray-700">
            Name Surname
          </label>
          <input
            id="customer"
            name="customer"
            type="text"
            placeholder="Full Name"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="block w-full mt-1 p-3 rounded border focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="block w-full mt-1 p-3 rounded border focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="review" className="block text-sm font-medium text-gray-700">
            Review
          </label>
          <textarea
            id="review"
            name="review"
            rows={5}
            placeholder="Your review"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="block w-full mt-1 p-3 rounded border focus:outline-none focus:ring focus:ring-green-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded hover:bg-white hover:border-2 hover:border-green-500 hover:text-green-600 duration-1000"
        >
          Submit
        </button>
      </form>
      </div>
    </div>
  );
}

export default Reviews;
