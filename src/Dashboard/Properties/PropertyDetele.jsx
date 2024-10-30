import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom';

const PropertyDetele = () => {

const [id]=useParams()
    
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this property?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:7000/property/${id}`);
        
        alert("Property deleted successfully.");
      } catch (error) {
        console.error("Error deleting property", error);
        alert("Failed to delete property.");
      }
    }
  };
  return (
    <div className='h-screen flex justify-center items-center'>


<button onClick={handleDelete}>

</button>

    </div>
  )
}

export default PropertyDetele