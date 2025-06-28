
import React, { useContext, useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import { Link } from 'react-router';
import Navbar from '../Components/NavBar';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import { Typewriter } from 'react-simple-typewriter';
import { AuthContext } from '../provider/Authprovider';
  

const MyTips = () => {
  const [tips, setTips] = useState([]);
  const { user } = useContext(AuthContext);

  // useEffect(() => {
  //   fetch('https://graden-explorer-server.vercel.app/shareTips')
  //     .then(res => res.json())
  //     .then(data => setTips(data))
  //     .catch(err => console.error('Failed to fetch tips:', err));
  // }, []);

useEffect(() => {
  if (user && user.email) {
    fetch(`https://graden-explorer-server.vercel.app/shareTips?email=${user.email}`)
      .then(res => res.json())
      .then(data => setTips(data))
      .catch(err => console.error('Failed to fetch tips:', err));
    
      
  }
}, [user]);




  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://graden-explorer-server.vercel.app/shareTips/${_id}`, {
          method: 'DELETE',
        })
          .then(res => res.json())
          .then(data => {
            if (data.deletedCount) {
              setTips(prevTips => prevTips.filter(tip => tip._id !== _id));
              Swal.fire({
                title: "Deleted!",
                text: "Your Tip has been deleted.",
                icon: "success"
              });
            }
          })
      }
    });
  }

  return (
    <div>
      <Navbar />
      <div className='w-11/12 sm:w-9/12 mx-auto my-10'>
        <h1 className='text-3xl font-bold border-b-3 w-6/12 mx-auto text-center text-teal-700 pb-5'>
          <Typewriter
            words={['My Tips']}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <div className=''>
          <ul className="list rounded-box pt-10 space-y-5">
            {tips.length === 0 && <p>Loading tips...</p>}
            {tips.map((tip, index) => (
              <li
                key={tip._id}
                className="list-row border-3 border-teal-700 p-4 rounded shadow flex flex-row flex-nowrap items-center space-x-4"
              >
                <div className="text-3xl font-thin opacity-80 tabular-nums  flex-shrink-0">
                  {String(index + 1)}) 
                </div>

                <div className="flex-shrink-0">
                  <img
                    className= "w-20 h-20 rounded-box object-cover"
                    src={tip.imagesUrl || 'https://via.placeholder.com/80'}
                    alt={tip.title}
                  />
                </div>

                <div className="list-col-grow flex-grow min-w-0">
                  <div className="font-semibold text-xl hidden sm:block truncate">{tip.title}</div>
                  <div className="text-xs uppercase hidden sm:block font-semibold opacity-90 truncate">{tip.category}</div>
                </div>

                <Link to={`/editTip/${tip._id}`}>
                  <button className="btn btn-outline btn-xs md:btn-md btn-accent border-2 hover:bg-green-500 whitespace-nowrap">
                    <MdModeEdit size={20} />
                  </button>
                </Link>

                <button
                  onClick={() => handleDelete(tip._id)}
                  className="btn btn-error btn-xs md:btn-md border-2 btn-outline hover:bg-red-400 whitespace-nowrap"
                >
                  <MdDelete size={20} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyTips;
