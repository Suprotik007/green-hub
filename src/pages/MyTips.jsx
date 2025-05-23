import React, { useEffect, useState } from 'react';
import Footer from '../Components/Footer';
import { Link } from 'react-router';
import Navbar from '../Components/NavBar';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
const MyTips = () => {
    const [tips, setTips] = useState([]);
// const {_id}=useParams()

  useEffect(() => {
    fetch('http://localhost:3000/shareTips')  
      .then(res => res.json())
      .then(data => setTips(data))
      .catch(err => console.error('Failed to fetch tips:', err));
  }, []);

const handleDelete=(_id)=>{
console.log(_id);
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed);
    
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/shareTips/${_id}`,{
        method:'DELETE',
        // 'Content-Type' : 'application/json',

    })
    .then(res=>res.json())
    .then(data=>{
        console.log('after delete',data);
        if(data.deletedCount){
            setTips(prevTips => prevTips.filter(tip => tip._id !== _id));
Swal.fire({
      title: "Deleted!",
      text: "Your Tip  has been deleted.",
      icon: "success"
    });
        }
        
    })
    
  }
});
} 

    return (
        <div> 
          <Navbar></Navbar>
          <div className='w-9/12 mx-auto my-10'>
         <h1 className='text-3xl font-bold border-b-3 text-center pb-5  '> My Tips </h1>
            <div>
             
             

<ul className="list    rounded-box  pt-10">
  {tips.length === 0 && <p>Loading tips...</p>}
  {
              tips.map((tip,index)=><li  key={tip._id}className="list-row border-3 mb-5">
    <div className="text-3xl font-thin opacity-80 tabular-nums text-green-800">{String(index+1)})</div>
    <div><img className="size-11 rounded-box " src={tip.imagesUrl}/></div>
    <div className="list-col-grow">
      <div className='font-semibold text-xl'>{tip.title}</div>
      <div className="text-xs   uppercase font-semibold opacity-90">{tip.category}</div>
    </div>
    <Link to={`/editTip/${tip._id}`}><button className="btn btn-outline hover:bg-green-500   btn-accent border-2">
      <MdModeEdit />
    </button></Link>
    <button onClick={()=>handleDelete(tip._id)} className="btn btn-error border-2 btn-outline hover:bg-red-400   ">
      <MdDelete />
    </button>
  </li>
   )
             }
  
  
  
</ul>

            </div>
        </div>
        <Footer></Footer>
        </div>
    );
};

export default MyTips;