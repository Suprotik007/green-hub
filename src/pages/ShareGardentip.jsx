
import React, { useState, useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { toast } from 'react-toastify';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';

const ShareGardentip = () => {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: '',
    plantType: '',
    difficulty: 'Easy',
    description: '',
    imagesUrl: '',
    category: 'Composting',
    availability: 'Public',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const tipData = {
      ...formData,
      userName: user?.displayName || '',
      userEmail: user?.email || '',
      createdAt: new Date().toISOString(),
    };

    // TODO: Replace with your API call or database logic
    fetch('http://localhost:3000/shareTips',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(tipData)
    })
    .then(res=>res.json())
    .then(data=>console.log('after adding tip to db',data)
    )
    console.log('Submitting tip:', tipData);
    toast.success('Garden tip submitted successfully!');

    // Reset form (optional)
    setFormData({
      title: '',
      plantType: '',
      difficulty: 'Easy',
      description: '',
      imagesUrl: '',
      category: 'Composting',
      availability: 'Public',
    });
  };

  return (
   <div>
<Navbar></Navbar>
     <div className="max-w-3xl mx-auto my-10 p-6 border-2 border-dashed rounded-lg shadow-md">
      <h2 className="text-3xl font-bold  mb-6 text-center text-green-800"> Submit Garden Tip</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        
        <div>
          <label htmlFor="title" className="block  font-semibold mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 border-2 border-green-800"
            required
          />
        </div>

        
        <div>
          <label htmlFor="plantType" className="block font-semibold mb-1">
            Plant Type 
          </label>
          <input
            type="text"
            id="plantType"
            name="plantType"
            
            value={formData.plantType}
            onChange={handleChange}
            className="w-full border-2 border-green-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />
        </div>

       
        <div>
          <label htmlFor="difficulty" className="block font-semibold mb-1">
            Difficulty Level
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            className="w-full border-2 border-green-800  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option>Easy</option>
            <option>Medium</option>
            <option>Hard</option>
          </select>
        </div>

        
        <div>
          <label htmlFor="description" className="block font-semibold mb-1">
            Description 
          </label>
          <textarea
            id="description"
            name="description"
            rows="5"
            placeholder="Write your garden tip here..."
            value={formData.description}
            onChange={handleChange}
            className="w-full border-2 border-green-800 rounded px-3 py-2 "
            required
          />
        </div>

        
        <div>
          <label htmlFor="imagesUrl" className="block font-semibold mb-1">
            Image URL
          </label>
          <input
            type="text"
            id="imagesUrl"
            name="imagesUrl"
            
            value={formData.imagesUrl}
            onChange={handleChange}
            className="w-full border-2 border-green-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        
        <div>
          <label htmlFor="category" className="block font-semibold mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border-2 border-green-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option>Composting</option>
            <option>Plant Care</option>
            <option>Vertical Gardening</option>
            <option>Indoor Gardening</option>
            <option>Organic Gardening</option>
            <option>Hydroponics</option>
          </select>
        </div>

        
        <div>
          <label htmlFor="availability" className="block font-semibold mb-1">
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            value={formData.availability}
            onChange={handleChange}
            className="w-full border-2 border-green-800 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option>Public</option>
            <option>Hidden</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="userName" className="block font-semibold mb-1">
              User Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={user?.displayName || ''}
              readOnly
              className="w-full border-2 border-green-800 rounded px-3 py-2 bg-gray-100 "
            />
          </div>
          <div>
            <label htmlFor="userEmail" className="block font-semibold mb-1">
              User Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={user?.email || ''}
              readOnly
              className="w-full border-2 border-green-800 rounded px-3 py-2 bg-gray-100 "
            />
          </div>
        </div>

    
        <div>
          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded transition"
          >
            Submit Tip
          </button>
        </div>
      </form>
    </div>
    <Footer></Footer>
   </div>
  );
};

export default ShareGardentip;
