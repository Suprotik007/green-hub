import React, { useState, useContext } from 'react';
import { AuthContext } from '../provider/Authprovider';
import { toast } from 'react-toastify';
import Navbar from '../Components/NavBar';
import Footer from '../Components/Footer';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';


const EditTip = () => {
  // const {_id}=useParams()
    const { user } = useContext(AuthContext);
    const {_id,title,plantType,difficulty,description,imagesUrl,category,availability}=useLoaderData()
    // console.log(updateTip);
    
    
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
    const handleUpdate=(e)=>{
        e.preventDefault()
        const form =e.target
    const formData=new FormData(form)
    const updatedTip=Object.fromEntries(formData.entries())
    // console.log(updatedTip);
    
    fetch(`https://graden-explorer-server.vercel.app/shareTips/${_id}`,{
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body :JSON.stringify(updatedTip)
    })
    .then(res=>res.json())
    .then(data=>{
        if(data.modifiedCount){
            Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your tip has been updated",
  showConfirmButton: false,
  timer: 1500
});

        }
    }
    )

    }
    
    return (
        <div>
            <div>
                <div>
<Navbar></Navbar>
     <div className="max-w-3xl mx-auto my-10 p-6 border-2 border-teal-700  rounded-lg shadow-md">
      <h2 className="text-3xl font-bold  mb-6 text-center text-teal-700"> Edit Garden Tip</h2>
      <form onSubmit={handleUpdate} className="space-y-5 ">
        
        <div>
          <label htmlFor="title" className="block  font-semibold mb-1">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={title}
            // value={formData.title}
            onChange={handleChange}
            className="w-full  rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 border-2 border-teal-700"
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
            
            defaultValue={plantType}
            onChange={handleChange}
            className="w-full border-2 border-teal-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
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
            defaultValue={difficulty}
            onChange={handleChange}
            className="w-full border-2 border-teal-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          >
             <option className='text-teal-800'>Easy</option>
            <option className='text-teal-800'>Medium</option>
            <option className='text-teal-800'>Hard</option>
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
            defaultValue={description}
            onChange={handleChange}
            className="w-full border-2 border-teal-700  rounded px-3 py-2 "
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
            
            defaultValue={imagesUrl}
            onChange={handleChange}
            className="w-full border-2 border-teal-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400"
          />
        </div>

        
        <div>
          <label htmlFor="category" className="block font-semibold mb-1">
            Category
          </label>
          <select
            id="category"
            name="category"
            defaultValue={category}
            onChange={handleChange}
            className="w-full border-2 border-teal-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
           <option className='text-green-800'>Composting</option>
            <option className='text-green-800'>Plant Care</option>
            <option className='text-green-800'>Vertical Gardening</option>
            <option className='text-green-800'>Indoor Gardening</option>
            <option className='text-green-800'>Organic Gardening</option>
            <option className='text-green-800'>Hydroponics</option>
          </select>
        </div>

        
        <div>
          <label htmlFor="availability" className="block font-semibold mb-1">
            Availability
          </label>
          <select
            id="availability"
            name="availability"
            defaultValue={availability}
            onChange={handleChange}
            className="w-full border-2 border-teal-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
              <option className='text-green-800'>Public</option>
            <option className='text-green-800'>Hidden</option>
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
              defaultValue={user?.displayName || ''}
              readOnly
              className="w-full border-2 border-teal-700 text-green-800 rounded px-3 py-2 bg-gray-100 "
            />
          </div>
          <div>
            <label htmlFor="userEmail" className="block  font-semibold mb-1">
              User Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              value={user?.email || ''}
              readOnly
              className="w-full border-2 border-teal-700 text-green-800 rounded px-3 py-2 bg-gray-100 "
            />
          </div>
        </div>

    
        <div>
          <button
            type="submit"
            className="btn btn-accent  font-semibold px-6 py-3 rounded transition"
          >
            Update Tip
          </button>
        </div>
      </form>
    </div>
    <Footer></Footer>
   </div>
  
            </div>
        </div>
    );
};

export default EditTip;